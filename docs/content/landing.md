## Produto: alternativa brasileira para Reconhecimento Facial e OCR

### Visão geral

- **Proposta**: Plataforma brasileira de visão computacional com foco em Reconhecimento Facial e OCR, compatível com o SDK da AWS (mesmo modelo de chamadas), bastando alterar o servidor.
- **Para quem**: Desenvolvedores que querem integrar visão computacional em minutos, com uma DX moderna, transparente e previsível.
- **Destaque**: Infra no Brasil, latência baixa em `sa-east-1`, suporte em português, compliance local.

---

### Sessões da landing page

#### Hero

- **Headline**: A alternativa brasileira ao AWS Rekognition e Textract
- **Subheadline**: Reconhecimento facial e OCR com a mesma experiência do SDK da AWS — apenas altere o endpoint.
- **CTA primário**: Crie sua chave gratuita
- **CTA secundário**: Ver documentação
- Prova social: Logos de clientes brasileiros + depoimento curto

#### Propostas de valor (USPs)

- **Compatível com o SDK da AWS**: Mantenha seu código, troque só o servidor.
- **Latência e compliance locais**: Tráfego e dados no Brasil.
- **Onboarding em minutos**: 1000 requests/dia grátis por API.
- **Preços previsíveis**: Cobrança por request, sem surpresas.

#### Como funciona

1. Crie sua conta e gere uma `Access Key` e `Secret`.
2. Instale o SDK AWS que você já usa.
3. Configure `endpoint` para nosso servidor.
4. Chame as mesmas operações (ex.: `DetectFaces`, `DetectText`).
5. Monitore consumo em tempo real no dashboard.

#### Para desenvolvedores (DX)

- SDKs suportados: Node.js, Python, Go, Java (mesmo AWS SDK).
- Ambiente de sandbox com chaves instantâneas.
- Examples, Postman collection e OpenAPI.
- Observabilidade: métricas por chave, logs de requisição mascarados, webhooks de limite.

#### Recursos principais

- Reconhecimento facial:
  - Detecção e análise de faces (idades aproximadas, emoções, landmarks).
  - Comparação e busca de faces (coleções).
- OCR:
  - Detecção de texto em imagens (placas, embalagens, notas).
  - OCR de documentos com layout básico (modo compatível com Textract opcional).
- Segurança:
  - Dados em repouso e trânsito criptografados.
  - Retenção configurável, anonimizadores e redatores.
- Compliance:
  - Alojamento e processamento no Brasil, controle de residência de dados.

---

## Compatibilidade com AWS: mapeamento e correlação

### Rekognition (Imagem)

- Operações compatíveis inicialmente:
  - `DetectFaces`
  - `CompareFaces`
  - `IndexFaces` / `SearchFacesByImage` (coleções)
  - `DetectText` (OCR em imagens)
- Entrada/saída: Seguimos o formato do AWS Rekognition na estrutura dos campos mais comuns. Pequenas diferenças serão documentadas.

### OCR de documentos

- Dois modos:
  - Modo Rekognition: `DetectText` (texto em imagens simples).
  - Modo Textract-Compat: `DetectDocumentText` (documentos), com cliente Textract apontando para nosso endpoint. Útil para PDFs/escaneados.

### Como “usar o mesmo SDK” apenas alterando o servidor

- No AWS SDK v3 (JS), você pode sobrescrever `endpoint` do cliente:
  - Rekognition: `new RekognitionClient({ region, endpoint })`
  - Textract: `new TextractClient({ region, endpoint })`
- Credenciais: usamos par `accessKeyId`/`secretAccessKey` no mesmo formato (chaves próprias geradas no nosso dashboard).

---

## Quickstart

### Node.js (AWS SDK v3) — Reconhecimento Facial

```javascript
import {
  RekognitionClient,
  DetectFacesCommand,
} from "@aws-sdk/client-rekognition";

const client = new RekognitionClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/rekognition", // apenas troque o servidor
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY!,
    secretAccessKey: process.env.BR_VISION_SECRET!,
  },
});

const input = {
  Image: {
    Bytes: await (await fetch("https://.../foto.jpg")).arrayBuffer(),
  },
  Attributes: ["ALL"],
};

const result = await client.send(new DetectFacesCommand(input));
console.log(JSON.stringify(result, null, 2));
```

Exemplo de resposta (resumo compatível):

```json
{
  "FaceDetails": [
    {
      "BoundingBox": {
        "Width": 0.25,
        "Height": 0.32,
        "Left": 0.12,
        "Top": 0.18
      },
      "Confidence": 99.2,
      "Landmarks": [{ "Type": "eyeLeft", "X": 0.2, "Y": 0.25 }],
      "Pose": { "Roll": 2.1, "Yaw": -1.4, "Pitch": 0.6 },
      "Quality": { "Brightness": 80.1, "Sharpness": 92.3 },
      "Emotions": [{ "Type": "HAPPY", "Confidence": 96.7 }],
      "Smile": { "Value": true, "Confidence": 95.1 }
    }
  ]
}
```

### cURL — Reconhecimento Facial (DetectFaces)

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

### Node.js — OCR em imagens (DetectText via Rekognition)

```javascript
import {
  RekognitionClient,
  DetectTextCommand,
} from "@aws-sdk/client-rekognition";

const client = new RekognitionClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/rekognition",
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY!,
    secretAccessKey: process.env.BR_VISION_SECRET!,
  },
});

const input = {
  Image: {
    S3Object: { Bucket: "meu-bucket", Name: "docs/placa.jpg" }
  }
};

const res = await client.send(new DetectTextCommand(input));
console.log(JSON.stringify(res, null, 2));
```

Resposta ilustrativa:

```json
{
  "TextDetections": [
    {
      "DetectedText": "BRASIL-1234",
      "Type": "LINE",
      "Confidence": 98.4,
      "Geometry": {
        "BoundingBox": {
          "Width": 0.42,
          "Height": 0.12,
          "Left": 0.28,
          "Top": 0.36
        }
      }
    }
  ]
}
```

### Node.js — OCR de documentos (modo Textract-Compat)

```javascript
import {
  TextractClient,
  DetectDocumentTextCommand,
} from "@aws-sdk/client-textract";

const client = new TextractClient({
  region: "sa-east-1",
  endpoint: "https://api.seu-produto.br/textract",
  credentials: {
    accessKeyId: process.env.BR_VISION_KEY!,
    secretAccessKey: process.env.BR_VISION_SECRET!,
  },
});

const input = {
  Document: {
    S3Object: { Bucket: "meu-bucket", Name: "docs/nota-fiscal.pdf" }
  }
};

const res = await client.send(new DetectDocumentTextCommand(input));
console.log(JSON.stringify(res, null, 2));
```

Resposta ilustrativa:

```json
{
  "Blocks": [
    {
      "BlockType": "LINE",
      "Text": "NOTA FISCAL ELETRÔNICA",
      "Confidence": 99.0
    }
  ]
}
```

---

## Limites e sandbox

- **Free tier**: 1000 requests/dia por API (Reconhecimento e OCR) para testes.
- Rate limit padrão: 10 RPS por chave (ajustável por plano).
- Tamanhos: até 15 MB por imagem; até 10 páginas por request no OCR de documentos no sandbox.

---

## Preços

Observação: valores indicativos baseados em referências públicas da AWS para 2024/2025 e ajustados para manter margem e hospedagem no Brasil. Ajuste final por região e volume poderá variar. Cobrança por request, com faturamento a cada 1.000 chamadas.

### Tabela de planos (BRL)

| Plano          |  Mensalidade | Incluído/mês (Face) | Incluído/mês (OCR Imagem) | Incluído/mês (OCR Documento) | Excedente Face (por 1k) | Excedente OCR Img (por 1k) | Excedente OCR Doc (por 1k) | Suporte          |
| -------------- | -----------: | ------------------: | ------------------------: | ---------------------------: | ----------------------: | -------------------------: | -------------------------: | ---------------- |
| Free (Sandbox) |         R$ 0 |           1.000/dia |                 1.000/dia |                    1.000/dia |                     N/D |                        N/D |                        N/D | Comunidade       |
| Starter        |        R$ 99 |              50.000 |                    50.000 |                        5.000 |                 R$ 6,00 |                    R$ 6,00 |                    R$ 9,00 | Email 8x5        |
| Growth         |       R$ 499 |             400.000 |                   400.000 |                       40.000 |                 R$ 5,00 |                    R$ 5,00 |                    R$ 8,00 | Email/Chat 12x5  |
| Scale          |     R$ 1.999 |           2.000.000 |                 2.000.000 |                      200.000 |                 R$ 4,00 |                    R$ 4,00 |                    R$ 7,00 | Suporte dedicado |
| Enterprise     | Sob consulta |          Sob medida |                Sob medida |                   Sob medida |               Negociado |                  Negociado |                  Negociado | SLA 24x7         |

Notas:

- Referências AWS típicas: Rekognition (detecção/face/texto em imagem) ~ US$ 1,00 por 1.000; Textract (DetectDocumentText) ~ US$ 1,50 por 1.000 páginas. Conversão aproximada para BRL e margem aplicada.
- Descontos progressivos disponíveis mediante compromisso de volume.

---

## Roadmap

- Ampliação de compatibilidade com `SearchFaces`, `CreateCollection`, `DeleteFaces`.
- OCR estruturado (tabelas e formulários) em modo Textract-Compat.
- Fila assíncrona para PDFs longos e retorno via Webhook.

---

## Sugestões de nome (com identidade brasileira)

- **Capivara Vision** — simpático, memorável, 100% BR.
- **Guará Vision** — referência ao lobo-guará, símbolo do Cerrado.
- **JaguAR** — jaguar + AR (augmented/AI), forte e tech.
- **Sabiá AI** — sonoridade brasileira, simples.
- **Iara Vision** — mitologia brasileira, feminino e marcante.
- **TucanAI** — trocadilho com tucano + AI.
- **SelvaVision** — remete à Amazônia e abundância.
- **Pindorama AI** — nome indígena do Brasil, identidade cultural.

Recomendação inicial: **Guará Vision** (fácil pronúncia, vínculo nacional forte, transmite agilidade e inteligência).

---

## FAQ rápido

- **Posso reutilizar meu código da AWS?** Sim. Basta trocar o `endpoint` do cliente e usar nossas chaves.
- **Onde os dados são processados?** No Brasil (região `sa-east-1` equivalente), com residência de dados local.
- **Qual o limite grátis?** 1000 requests/dia por API, para testes.
- **Como funciona a cobrança?** Por request, faturamento a cada 1.000 chamadas, com descontos por volume.
