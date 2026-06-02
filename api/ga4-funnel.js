const { createSign } = require("crypto");

const TRACKED_EVENTS = [
  "quiz_entry_view",
  "quiz_step_1_view",
  "quiz_step_2_view",
  "quiz_step_3_view",
  "quiz_bridge_1_view",
  "quiz_step_4_view",
  "quiz_step_5_view",
  "quiz_bridge_2_view",
  "quiz_step_6_view",
  "quiz_step_7_view",
  "quiz_result_view",
  "quiz_vsl_click",
  "vsl_view",
  "vsl_cta_visible",
  "vsl_cta_click",
];

function base64UrlEncode(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function getPrivateKey() {
  return (process.env.GA4_PRIVATE_KEY || "").replace(/\\n/g, "\n");
}

function createSignedJwt(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT",
  };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer
    .sign(privateKey, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

  return `${unsignedToken}.${signature}`;
}

async function getAccessToken(clientEmail, privateKey) {
  const assertion = createSignedJwt(clientEmail, privateKey);
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OAuth error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

function getDateRangeConfig(range) {
  if (range === "7d") {
    return {
      startDate: "7daysAgo",
      endDate: "today",
      label: "Últimos 7 dias",
    };
  }

  return {
    startDate: "today",
    endDate: "today",
    label: "Hoje",
  };
}

async function fetchGa4Snapshot(accessToken, propertyId, range) {
  const dateConfig = getDateRangeConfig(range);
  const response = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateRanges: [
          {
            startDate: dateConfig.startDate,
            endDate: dateConfig.endDate,
          },
        ],
        dimensions: [{ name: "eventName" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: {
          filter: {
            fieldName: "eventName",
            inListFilter: {
              values: TRACKED_EVENTS,
            },
          },
        },
        limit: String(TRACKED_EVENTS.length),
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GA4 error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const snapshot = Object.fromEntries(TRACKED_EVENTS.map((eventName) => [eventName, 0]));

  for (const row of data.rows || []) {
    const eventName = row.dimensionValues?.[0]?.value;
    const eventCount = Number(row.metricValues?.[0]?.value || 0);

    if (eventName) {
      snapshot[eventName] = eventCount;
    }
  }

  return {
    snapshot,
    rangeLabel: dateConfig.label,
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
    return;
  }

  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GA4_CLIENT_EMAIL;
  const privateKey = getPrivateKey();

  if (!propertyId || !clientEmail || !privateKey) {
    res.status(503).json({
      ok: false,
      error: "GA4 env vars are missing",
      required: [
        "GA4_PROPERTY_ID",
        "GA4_CLIENT_EMAIL",
        "GA4_PRIVATE_KEY",
      ],
    });
    return;
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);
    const { snapshot, rangeLabel } = await fetchGa4Snapshot(
      accessToken,
      propertyId,
      req.query.range || "today",
    );

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({
      ok: true,
      source: "ga4",
      rangeLabel,
      snapshot,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(502).json({
      ok: false,
      error: error.message,
    });
  }
};
