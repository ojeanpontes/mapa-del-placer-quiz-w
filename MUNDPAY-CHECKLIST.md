# Checklist Mundpay - White

Fonte de referência: https://mundpay.crisp.help/pt-br/article/requisitos-para-aprovacao-do-site-do-seller-19to7e5/

## Já ajustado no código

- Quiz white sem celebridades, sem promessa específica e sem linguagem explícita.
- Design do quiz mesclado com a referência XQuiz: layout claro, mobile-first, opções em cards simples e progressão direta.
- Página de vendas redesenhada em formato claro, objetivo e sem claims agressivas.
- Página de vendas com produto, formato, preço, entrega digital e suporte.
- Avisos de transparência: conteúdo educativo, sem garantia de resultado e sem substituição de terapia/psicologia/medicina/legal.
- Rodapé da página de vendas com links para suporte, privacidade, termos e reembolso.
- Páginas criadas/ajustadas:
  - `support.html`
  - `privacy.html`
  - `terms.html`
  - `refund.html`
- Roteiros das 5 aulas em `white-course-scripts.md`.
- Checkout principal atualizado para `https://pay.mycheckoutt.com/019ecd07-c319-7138-abe8-82716dd2af22?ref=`.

## Pendente antes de reenviar para análise

1. Confirmar se o checkout configurado no produto é o checkout final aprovado pela Mundpay.
   - Arquivo: `tsl.html`
   - Constante: `CHECKOUT_URL`

2. Preencher identificação do vendedor no rodapé da TSL e nos termos.
   - Razão social ou nome do responsável: `JEAN MOREIRA DE SOUSA PONTES`.
   - CNPJ: `63.217.560/0001-12`.
   - Endereço comercial: `Rua Jose Zacharias 552, Cosmopolis - SP, 13157-352, Brasil`.
   - E-mail de suporte: `mapadelplacer.contato@gmail.com`.

3. Publicar em domínio próprio .com.
   - A Vercel pode continuar hospedando.
   - Mas o domínio final não deve ser apenas `vercel.app` nem página provisória.

4. Confirmar política de reembolso final.
   - O texto atual informa 30 dias.
   - Validar se esse prazo é o mesmo configurado no checkout Mundpay.
