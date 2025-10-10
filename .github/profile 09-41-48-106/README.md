<p align="center">
  <img src="../../assets/logo/logo.png" alt="SabIA" width="140" />
</p>

## SabIA — Alternativa brasileira ao AWS Rekognition e Textract

Plataforma brasileira de visão computacional compatível com o SDK da AWS (Rekognition e Textract). Mantenha seu código, troque apenas o endpoint. Infra no Brasil (sa-east-1 equivalente), baixa latência e suporte em português.

### Por que SabIA?

- **Compatível com o SDK da AWS**: mesma DX, entradas/saídas familiares
- **Infra no Brasil**: latência menor e residência de dados local
- **Onboarding em minutos**: sandbox com 1000 requests/dia por API
- **Preços previsíveis**: cobrança por request, sem surpresas

### O que oferecemos

- **Reconhecimento facial**: detecção/análise de faces, comparação, busca por coleções
- **OCR em imagens**: detecção de texto (placas, embalagens, notas)
- **OCR de documentos (Textract-Compat)**: `DetectDocumentText` com cliente Textract
- **Observabilidade**: métricas por chave, logs mascarados, webhooks de limite

### Compatibilidade (SDK-compat)

- Rekognition (Imagem): `DetectFaces`, `CompareFaces`, `IndexFaces`/`SearchFacesByImage`, `DetectText`
- Textract (Documentos): `DetectDocumentText` usando o cliente Textract
- Entradas/saídas seguem o formato comum do AWS; diferenças documentadas

### Quickstart (Node.js AWS SDK v3 — DetectFaces)

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

### Preços e limites

- Free tier para testes: 1000 requests/dia por API
- Planos com volumes progressivos e descontos por faixa
- Tabela detalhada disponível no site/documentação

### Como começar

1. Crie sua conta e gere suas chaves (Access Key e Secret)
2. Use o AWS SDK que você já utiliza
3. Configure o `endpoint` para nosso servidor
4. Chame as mesmas operações (ex.: `DetectFaces`, `DetectText`, `DetectDocumentText`)
5. Monitore consumo em tempo real no dashboard

### Acessibilidade

- Contraste AA, foco visível, respeito a `prefers-reduced-motion`, tipografia mínima 16 px

### Links

- Website: `https://sabia.ai/`
- Documentação: em breve no site
- Identidade visual/brand: disponível no site e nos repositórios públicos

### Contato

- Email: hello@sabia.ai

—
SabIA • Visão computacional no Brasil, com a mesma experiência do SDK da AWS
