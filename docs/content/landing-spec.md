## Iara — Landing Page Spec (conteúdo + diretrizes)

---

### 1) Metadados (SEO/OG)

- Título: Iara — Alternativa brasileira ao AWS Rekognition e Textract
- Descrição: Plataforma brasileira de visão computacional (Reconhecimento Facial e OCR) compatível com o SDK da AWS. Mesma DX — basta trocar o endpoint. Infra no Brasil, baixa latência, suporte em português.
- Palavras‑chave: Iara, visão computacional, reconhecimento facial, OCR, Rekognition, Textract, AWS SDK, Brasil, sa-east-1
- Canonical: https://iara.ai/
- Robots: index, follow
- OG:
  - og:title: Iara — Alternativa brasileira ao AWS Rekognition e Textract
  - og:description: Reconhecimento facial e OCR com a mesma experiência do SDK da AWS — apenas altere o endpoint.
  - og:image: https://iara.ai/og/cover.png
  - og:type: website
  - og:url: https://iara.ai/
- JSON-LD (resumo)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Iara",
  "applicationCategory": "AIService",
  "operatingSystem": "Cloud",
  "description": "Plataforma brasileira de visão computacional compatível com SDK da AWS (Reconhecimento Facial e OCR).",
  "url": "https://iara.ai/"
}
```

---

### 2) Hero

- Headline: A alternativa brasileira ao AWS Rekognition e Textract
- Subheadline: Reconhecimento facial e OCR com a mesma experiência do SDK da AWS — apenas altere o endpoint.
- CTA primário: Crie sua chave gratuita
- CTA secundário: Ver documentação
- Prova social: logos de clientes brasileiros + um depoimento curto.
- Layout: ilustração abstrata tech (verde/azul sutis) à direita em desktop; centrado em mobile.

AI Brief — Hero

- Título direto e forte; subtítulo explicando compatibilidade e facilidade.
- CTAs visíveis; primário sólido (verde), secundário contornado.
- Espaço negativo amplo; contraste AA.

---

### 3) Propostas de valor (USPs)

1. Compatível com o SDK da AWS: Mantenha seu código, troque só o servidor.
2. Latência e compliance locais: Tráfego e dados no Brasil (sa-east-1).
3. Onboarding em minutos: 1000 requests/dia grátis por API.
4. Preços previsíveis: Cobrança por request, sem surpresas.

AI Brief — USPs

- Ícones outline simples; títulos curtos; descrições objetivas.
- Grade 2×2 em desktop; 1×4 em mobile.

---

### 4) Como funciona (steps)

1. Crie sua conta e gere uma Access Key e Secret.
2. Instale o SDK AWS que você já usa.
3. Configure endpoint para nosso servidor.
4. Chame as mesmas operações (ex.: DetectFaces, DetectText).
5. Monitore consumo em tempo real no dashboard.

---

### 5) Para desenvolvedores (DX)

- SDKs suportados: Node.js, Python, Go, Java (mesmo AWS SDK).
- Sandbox com chaves instantâneas.
- Examples, Postman collection e OpenAPI.
- Observabilidade: métricas por chave, logs mascarados, webhooks de limite.

---

### 6) Recursos principais

- Reconhecimento facial:
  - Detecção e análise de faces (idades aproximadas, emoções, landmarks)
  - Comparação e busca de faces (coleções)
- OCR (imagem):
  - Detecção de texto (placas, embalagens, notas)
- OCR de documentos:
  - DetectDocumentText (modo Textract-Compat)
- Segurança e compliance no Brasil.

---

### 7) Compatibilidade com AWS

- Rekognition (Imagem):
  - DetectFaces, CompareFaces, IndexFaces/SearchFacesByImage, DetectText
- OCR de documentos (Textract-Compat):
  - DetectDocumentText (cliente Textract apontando para nosso endpoint)
- Entradas/saídas: seguir formato comum do AWS; diferenças documentadas.

---

### 8) Quickstart (código)

Node.js (AWS SDK v3) — DetectFaces

```javascript
import {
  RekognitionClient,
  DetectFacesCommand,
} from "@aws-sdk/client-rekognition";

const client = new RekognitionClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/rekognition",
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY,
    secretAccessKey: process.env.BR_VISION_SECRET,
  },
});

const input = {
  Image: { Bytes: await (await fetch("https://.../foto.jpg")).arrayBuffer() },
  Attributes: ["ALL"],
};

const result = await client.send(new DetectFacesCommand(input));
console.log(JSON.stringify(result, null, 2));
```

cURL — DetectFaces

```bash
curl -X POST "https://api.seu-produto.br/rekognition/detect-faces" \
  -H "Content-Type: application/json" \
  -H "X-Access-Key: $BR_VISION_KEY" \
  -H "X-Secret-Key: $BR_VISION_SECRET" \
  --data '{
    "Image": { "S3Object": { "Bucket": "meu-bucket", "Name": "img/foto.jpg" } },
    "Attributes": ["ALL"]
  }'
```

Node.js — DetectText (imagem)

```javascript
import {
  RekognitionClient,
  DetectTextCommand,
} from "@aws-sdk/client-rekognition";

const client = new RekognitionClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/rekognition",
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY,
    secretAccessKey: process.env.BR_VISION_SECRET,
  },
});

const input = {
  Image: { S3Object: { Bucket: "meu-bucket", Name: "docs/placa.jpg" } },
};
const res = await client.send(new DetectTextCommand(input));
console.log(JSON.stringify(res, null, 2));
```

Node.js — DetectDocumentText (Textract-Compat)

```javascript
import {
  TextractClient,
  DetectDocumentTextCommand,
} from "@aws-sdk/client-textract";

const client = new TextractClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/textract",
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY,
    secretAccessKey: process.env.BR_VISION_SECRET,
  },
});

const input = {
  Document: {
    S3Object: { Bucket: "meu-bucket", Name: "docs/nota-fiscal.pdf" },
  },
};
const res = await client.send(new DetectDocumentTextCommand(input));
console.log(JSON.stringify(res, null, 2));
```

---

### 9) Limites e sandbox

- Free tier: 1000 requests/dia por API (Reconhecimento e OCR) para testes.
- Rate limit padrão: 10 RPS por chave (ajustável por plano).
- Tamanhos: até 15 MB por imagem; até 10 páginas por request no OCR de documentos (sandbox).

---

### 10) Preços (tabela)

| Plano          |  Mensalidade | Incluído/mês (Face) | Incluído/mês (OCR Imagem) | Incluído/mês (OCR Documento) | Excedente Face (por 1k) | Excedente OCR Img (por 1k) | Excedente OCR Doc (por 1k) | Suporte          |
| -------------- | -----------: | ------------------: | ------------------------: | ---------------------------: | ----------------------: | -------------------------: | -------------------------: | ---------------- |
| Free (Sandbox) |         R$ 0 |           1.000/dia |                 1.000/dia |                    1.000/dia |                     N/D |                        N/D |                        N/D | Comunidade       |
| Starter        |        R$ 99 |              50.000 |                    50.000 |                        5.000 |                 R$ 6,00 |                    R$ 6,00 |                    R$ 9,00 | Email 8x5        |
| Growth         |       R$ 499 |             400.000 |                   400.000 |                       40.000 |                 R$ 5,00 |                    R$ 5,00 |                    R$ 8,00 | Email/Chat 12x5  |
| Scale          |     R$ 1.999 |           2.000.000 |                 2.000.000 |                      200.000 |                 R$ 4,00 |                    R$ 4,00 |                    R$ 7,00 | Suporte dedicado |
| Enterprise     | Sob consulta |          Sob medida |                Sob medida |                   Sob medida |               Negociado |                  Negociado |                  Negociado | SLA 24x7         |

Notas

- Referências públicas da AWS (2024/2025) com ajustes para hospedagem no Brasil.
- Descontos progressivos conforme compromisso de volume.

---

### 11) FAQ rápido

- Posso reutilizar meu código da AWS? Sim. Basta trocar o endpoint e usar nossas chaves.
- Onde os dados são processados? No Brasil (região sa-east-1 equivalente), com residência de dados local.
- Qual o limite grátis? 1000 requests/dia por API, para testes.
- Como funciona a cobrança? Por request, faturamento a cada 1.000 chamadas, com descontos por volume.

---

### 12) UI tokens e diretrizes visuais (referência)

- Paleta principal: verde `#1FA37A`, azul `#1062C3`, acento `#FFC857`; neutros `#0F172A`–`#F8FAFC`.
- Tipografia: títulos Space Grotesk; corpo Inter; corpo 16–18 px / 1.6.
- Radius: 6/10/14. Sombras: suaves (0 4px 10px 0 rgba(0,0,0,0.08)).
- Grid: 12 colunas; container 1200 px; gutter 24 px.

Tokens (YAML)

```yaml
radius:
  sm: 6
  md: 10
  lg: 14
shadow:
  sm: "0 1px 2px rgba(0,0,0,0.05)"
  md: "0 4px 10px rgba(0,0,0,0.08)"
  lg: "0 8px 24px rgba(0,0,0,0.12)"
layout:
  container: 1200
  gutter: 24
  gridCols: 12
color:
  brand:
    primary: "#1FA37A"
    secondary: "#1062C3"
    accent: "#FFC857"
  text:
    primary: "#0F172A"
    inverse: "#FFFFFF"
```

---

### 13) Acessibilidade

- Contraste AA mínimo 4.5:1 em textos.
- Foco visível (2 px) em azul `#1062C3`.
- Respeitar prefers-reduced-motion; evitar animações agressivas.
- Tamanho de fonte mínimo 16 px; labels claros em campos/ícones essenciais.

Checklist

- [ ] Contraste verificado
- [ ] Navegação por teclado
- [ ] Foco visível
- [ ] Sem dependência exclusiva de cor

---

### 14) Conteúdo estruturado (YAML)

```yaml
hero:
  headline: "A alternativa brasileira ao AWS Rekognition e Textract"
  subheadline: "Reconhecimento facial e OCR com a mesma experiência do SDK da AWS — apenas altere o endpoint."
  ctas:
    primary: "Crie sua chave gratuita"
    secondary: "Ver documentação"
  socialProof:
    logos: ["cliente1.svg", "cliente2.svg", "cliente3.svg"]
    quote: "Integramos em poucas horas mantendo nosso código AWS."
usps:
  - title: "Compatível com o SDK da AWS"
    desc: "Mantenha seu código, troque só o servidor."
  - title: "Latência e compliance locais"
    desc: "Tráfego e dados no Brasil (sa-east-1)."
  - title: "Onboarding em minutos"
    desc: "1000 requests/dia grátis por API."
  - title: "Preços previsíveis"
    desc: "Cobrança por request, sem surpresas."
howItWorks:
  steps:
    - "Crie sua conta e gere uma Access Key e Secret."
    - "Instale o SDK AWS que você já usa."
    - "Configure o endpoint para nosso servidor."
    - "Chame as mesmas operações (DetectFaces, DetectText)."
    - "Monitore consumo em tempo real no dashboard."
dx:
  items:
    - "SDKs: Node.js, Python, Go, Java"
    - "Sandbox com chaves instantâneas"
    - "Examples, Postman, OpenAPI"
    - "Observabilidade: métricas, logs mascarados, webhooks"
features:
  face:
    - "Detecção e análise de faces"
    - "Comparação e busca (coleções)"
  ocrImage:
    - "Detecção de texto em imagens"
  ocrDocs:
    - "DetectDocumentText (Textract-Compat)"
pricing:
  plans: ["Free", "Starter", "Growth", "Scale", "Enterprise"]
faq:
  - q: "Posso reutilizar meu código da AWS?"
    a: "Sim. Basta trocar o endpoint e usar nossas chaves."
  - q: "Onde os dados são processados?"
    a: "No Brasil (sa-east-1), com residência local."
  - q: "Qual o limite grátis?"
    a: "1000 requests/dia por API."
  - q: "Como funciona a cobrança?"
    a: "Por request, faturamento a cada 1.000 chamadas."
```

---

### 15) Variantes e testes A/B

- Headline alternativa: "SDK-compat: visão computacional no Brasil, em minutos"
- CTA alternativo: "Testar no sandbox"
- Ordem de seções: mover USPs acima da prova social (variante)

---

### 16) Anexos para IA

- AI Brief curto por seção (acima)
- Prompts para ilustrações abstratas com acentos verde/azul e formas discretas
