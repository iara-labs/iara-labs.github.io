<!-- Iara Visual Identity — single source of truth for brand & landing UI -->

## Identidade Visual — Iara

### Marca

- **Nome**: Iara (nome indígena brasileiro que significa "senhora das águas"). Usar assim em todos os contextos: "Iara".
- **Essência**: plataforma brasileira de visão computacional compatível com SDK da AWS, focada em Reconhecimento Facial e OCR, com infra no Brasil.
- **Tagline**: Alternativa brasileira ao AWS Rekognition e Textract.
- **Personalidade**: tech minimalista, com brasilidade sutil (acentos cromáticos e formas discretas), confiável e developer-first.
- **Tom de voz**: direto, transparente, objetivo, com ênfase em DX e previsibilidade.

AI Brief — Marca

- Nome: Iara. Case exato: "I" maiúsculo + "ara" minúsculo.
- Proposta: visão computacional (faces, OCR) compatível com SDK AWS.
- Princípios: confiança, performance local (sa-east-1), suporte PT-BR.
- Uso: evite gírias; privilegie clareza e precisão técnica.

---

### Logotipo (diretrizes)

- **Construção**: wordmark "Iara" (preferencial) + símbolo opcional que remete a visão/olho abstraído ou pixel/retícula com leve referência a curvas orgânicas brasileiras.
- **Proporções**: relação altura/espessura equilibrada para leitura em tamanhos pequenos; x-height generosa.
- **Área de respiro**: no mínimo 0,5× da altura do wordmark ao redor.
- **Tamanho mínimo**: 24 px de altura em UI; 12 mm em impresso.
- **Variações**: positivo (cor principal sobre fundo claro), negativo (branco sobre fundo escuro), monocromático (preto/branco) e alto contraste (acessibilidade).
- **Alinhamento**: alinhamento ótico horizontal; evitar center com elementos desbalanceados sem compensação ótica.
- **Restrições (Don’t)**:
  - não distorcer, inclinar ou aplicar efeitos (glow, shadow exagerado, degradês pesados);
  - não alterar case (sempre "Iara");
  - não usar sobre fundos com baixo contraste; manter WCAG AA para texto/logos.

AI Brief — Logotipo

- Wordmark "Iara" limpo e legível; símbolo opcional de visão/pixels.
- Estilo: minimalista tech; sem adornos caricatos; curvas sutis.
- Versões: positivo, negativo, mono; preservar respiro 0,5×.

---

### Cores

Paleta inspirada no Brasil de forma sutil: verde e azul como acentos, amarelo em doses moderadas, base neutra cinza.

- **Primárias**
  - `brand.primary` (Verde Iara): `#1FA37A`
  - `brand.secondary` (Azul Iara): `#1062C3`
  - `brand.accent` (Amarelo Sutil): `#FFC857`

- **Neutros**
  - `neutral.900`: `#0F172A`
  - `neutral.800`: `#1E293B`
  - `neutral.700`: `#334155`
  - `neutral.600`: `#475569`
  - `neutral.500`: `#64748B`
  - `neutral.400`: `#94A3B8`
  - `neutral.300`: `#CBD5E1`
  - `neutral.200`: `#E2E8F0`
  - `neutral.100`: `#F1F5F9`
  - `neutral.050`: `#F8FAFC`

- **Feedback**
  - `success`: `#16A34A`
  - `warning`: `#F59E0B`
  - `danger`: `#DC2626`
  - `info`: `#0EA5E9`

Diretrizes de contraste

- Texto primário: usar `neutral.900` sobre `neutral.050/100/200` (AA 4.5:1+).
- Texto inverso: usar `#FFFFFF` sobre `brand.primary` ou `neutral.800/900` (AA 4.5:1+). Evitar `brand.accent` como fundo para longos textos.
- Borda e separadores: `neutral.200/300`.

Tokens de cor (exemplos)

```yaml
color:
  brand:
    primary: "#1FA37A"
    secondary: "#1062C3"
    accent: "#FFC857"
  text:
    primary: "#0F172A"
    secondary: "#475569"
    inverse: "#FFFFFF"
  surface:
    base: "#FFFFFF"
    subtle: "#F8FAFC"
    raised: "#FFFFFF"
  border:
    default: "#E2E8F0"
    strong: "#CBD5E1"
```

AI Brief — Cores

- Use verde `#1FA37A` como primária e azul `#1062C3` como apoio.
- Amarelo `#FFC857` apenas para destaques/indicadores, nunca texto longo.
- Fundos claros, texto `#0F172A`; garanta contraste AA.

---

### Tipografia

- **Títulos**: Space Grotesk (ou alternativa semelhante geométrica tech). Pesos 500–700.
- **Corpo**: Inter (alta legibilidade em UI). Pesos 400–500.
- **Fallbacks**: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif.

Escala tipográfica (web)

- H1: 48–56 px / 1.1 line-height / 700
- H2: 36–40 px / 1.15 / 700
- H3: 28–32 px / 1.2 / 600
- Body L: 18 px / 1.6 / 400–500
- Body M: 16 px / 1.6 / 400–500
- Caption: 13–14 px / 1.4 / 400

Boas práticas

- Evitar mais de 2 famílias simultâneas.
- Espaçamento de parágrafo 0.5–1× do font-size; evitar justificado.
- Não usar uppercase para longos blocos; preservar legibilidade.

AI Brief — Tipografia

- Títulos com Space Grotesk, corpo com Inter; hierarquia clara.
- Preferir 16–18 px no corpo; line-height amplo (1.6).
- Evitar tracking negativo/sombra em texto.

---

### Iconografia e Ilustração

- **Ícones**: linha (outline) ou duotone suave, cantos levemente arredondados; grid de 24 px, stroke 1.5 px.
- **Ilustrações**: shapes geométricos com curvas orgânicas leves; paleta derivada das cores de marca; evitar clichês literais.
- **Fotografia**: se usada junto, manter coerência de cor (azul/verde discretos), nitidez alta, zero granulação.

Do / Don’t

- Do: manter simplicidade, consistência, uso de acentos cromáticos.
- Don’t: usar ícones detalhados excessivamente, gradientes pesados, mascotes caricatos.

AI Brief — Iconografia/Ilustração

- Ícones outline, grid 24, stroke 1.5, bordas suaves.
- Ilustrações tech clean com acentos verde/azul; evitar excesso de adornos.

---

### Imagens e Fotografia

- Direção: retratar tecnologia aplicada no Brasil (datacenters, times de devs, empresas locais) com diversidade e autenticidade.
- Tratamento: contraste moderado, temperatura neutra, saturação contida; evite filtros pesados.
- Composição: muito espaço negativo; foco no produto e mensagens.

AI Brief — Imagens

- Fotos nítidas, luz neutra, composições limpas.
- Espaço negativo para títulos/CTAs; sem filtros exagerados.

---

### Componentes de UI (landing)

Componentes principais

- Hero: título forte, subtítulo claro, CTA primário (sólido) + secundário (contorno).
- USPs (grid 3–4): ícone simples + título curto + descrição objetiva.
- Como funciona (steps): 4–5 passos numerados.
- Prova social: logos cinza (neutral.400/500), hover suave.
- Tabela de preços: planos, colunas claras, CTA por plano; notas abaixo.
- FAQ: acordes com borda `neutral.200`, ícone de plus/minus.

Microcopy sugerido (derivado de landing)

- Headline: "A alternativa brasileira ao AWS Rekognition e Textract"
- Subheadline: "Reconhecimento facial e OCR com a mesma experiência do SDK da AWS — apenas altere o endpoint."
- CTA primário: "Crie sua chave gratuita"
- CTA secundário: "Ver documentação"

Tokens de UI (exemplos)

```yaml
radius:
  sm: 6
  md: 10
  lg: 14
shadow:
  sm: "0 1px 2px rgba(0,0,0,0.05)"
  md: "0 4px 10px rgba(0,0,0,0.08)"
  lg: "0 8px 24px rgba(0,0,0,0.12)"
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 40
layout:
  container: 1200
  gutter: 24
  gridCols: 12
button:
  primary:
    bg: "#1FA37A"
    text: "#FFFFFF"
    hoverBg: "#198A68"
  secondary:
    bg: "transparent"
    text: "#1FA37A"
    border: "#1FA37A"
```

AI Brief — Componentes

- Hero com título/subtítulo claros; CTA sólido verde; secundário contorno.
- Uso consistente de tokens; grid 12 colunas; espaço generoso.

---

### Acessibilidade

- Contraste mínimo AA (4.5:1) para texto normal; AAA quando possível em botões.
- Foco visível: outline de 2 px com `#1062C3` em elementos focáveis.
- Tamanho mínimo de fonte: 16 px (corpo); respeitar prefers-reduced-motion.
- Alternativas textuais para ícones essenciais; labels explícitos.

Checklist rápido

- [ ] Contraste de texto verificado
- [ ] Navegação por teclado plena
- [ ] Foco visível consistente
- [ ] Conteúdo não dependente apenas de cor

AI Brief — Acessibilidade

- Priorizar contraste, foco visível azul, tipografia 16–18 px.
- Reagir a prefers-reduced-motion; evitar animações agressivas.

---

### Conteúdo e Mensagens (de `landing.md`)

- Proposta: plataforma brasileira de visão computacional (faces e OCR) compatível com SDK AWS; infra e dados no Brasil; latência baixa em `sa-east-1`.
- Público: devs que querem integrar visão em minutos com DX moderna.
- USPs: compatibilidade com SDK; latência/compliance locais; onboarding rápido; preços previsíveis.
- Recursos: faces (detecção, análise, comparação, coleções), OCR imagem e documentos; segurança e residência de dados no Brasil.

Glossário

- Rekognition: serviço de visão para imagens (ex.: DetectFaces, DetectText).
- Textract-Compat: modo para `DetectDocumentText` (documentos) usando cliente Textract.
- Endpoint: URL do servidor Iara substituindo o endpoint AWS no SDK.

AI Brief — Mensagens

- Enfatize compatibilidade com SDK AWS (trocar apenas endpoint).
- Mencione infra Brasil, suporte PT-BR, previsibilidade de custos.

---

### Exemplos de Layout (wire textual)

Home (desktop)

1. Header (logo à esquerda, navegação Docs/Preços, botão "Criar chave")
2. Hero (H1, subtítulo, CTAs; ilustração leve à direita)
3. Provas sociais (logos em escala de cinza)
4. USPs (grid 4)
5. Como funciona (5 passos)
6. Recursos (Faces, OCR, Segurança, Compliance)
7. Preços (tabela 4–5 colunas + notas)
8. FAQ
9. Footer (links, contato, termos)

Mobile

- Stack vertical; CTAs sempre visíveis; navegação colapsada; tipografia 32/24/18 para H1/H2/body.

---

### Anexos para IA

- Blocos "AI Brief" em cada seção (acima) para prompting rápido.
- Tokens YAML de cores e UI para parsing automático.
- Checklist de acessibilidade e branding para validação.

---

### Licenciamento e uso

- Tipos: Space Grotesk e Inter (licenças open source). Verificar termos ao publicar.
- Ícones: preferir bibliotecas open-source compatíveis (ex.: Lucide, Heroicons outline).
