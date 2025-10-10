import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6xl">
                Reconhecimento facial e OCR{" "}
                <span className="text-[var(--color-primary)]">
                  hospedado no Brasil
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-[var(--color-neutral-700)] md:text-xl">
                APIs compatíveis com AWS Rekognition e Textract. Dados seguros
                em território nacional, conformidade com LGPD e latência
                reduzida para aplicações brasileiras.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
                >
                  Crie sua chave gratuita
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--color-secondary)] px-8 py-4 font-semibold text-[var(--color-secondary)] transition-all hover:bg-[var(--color-secondary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
                >
                  Ver documentação
                </a>
              </div>
              {/* Social Proof */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center gap-6">
                  <div className="h-12 w-24 rounded bg-[var(--color-neutral-200)]"></div>
                  <div className="h-12 w-24 rounded bg-[var(--color-neutral-200)]"></div>
                  <div className="h-12 w-24 rounded bg-[var(--color-neutral-200)]"></div>
                </div>
                <p className="text-sm italic text-[var(--color-neutral-600)]">
                  "Migramos do Rekognition e reduzimos custos em 40% mantendo a
                  mesma qualidade."
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/logo.png" alt="Hero" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Por que escolher a SabIA?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* USP 1 */}
            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg
                  className="h-6 w-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Conformidade LGPD nativa
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Dados biométricos e documentos processados exclusivamente em
                servidores brasileiros. Sem transferência internacional, sem
                riscos de compliance.
              </p>
            </div>

            {/* USP 2 */}
            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10">
                <svg
                  className="h-6 w-6 text-[var(--color-secondary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Latência reduzida
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Servidores em São Paulo garantem respostas até 60% mais rápidas
                para usuários no Brasil comparado a APIs hospedadas nos EUA.
              </p>
            </div>

            {/* USP 3 */}
            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                <svg
                  className="h-6 w-6 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Preços transparentes em reais
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Cobrança em BRL sem surpresas cambiais. Planos claros e
                previsíveis, com tier gratuito generoso para desenvolvimento.
              </p>
            </div>

            {/* USP 4 */}
            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg
                  className="h-6 w-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Drop-in replacement para AWS
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                APIs compatíveis com AWS SDK v3. Migre trocando apenas o
                endpoint — sem reescrever código.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[var(--color-neutral-50)] py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Como funciona
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Crie sua conta
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Cadastro gratuito em menos de 2 minutos. Receba suas credenciais
                de API instantaneamente.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)] text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Configure o SDK
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Use o AWS SDK v3 apontando para nosso endpoint. Compatível com
                seu código existente.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-neutral-900)]">
                Comece a processar
              </h3>
              <p className="leading-relaxed text-[var(--color-neutral-700)]">
                Envie imagens e documentos. Receba resultados em JSON
                estruturado, idêntico ao formato AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Feito para desenvolvedores
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-700)]">
              APIs REST simples, SDKs oficiais e documentação completa em
              português.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                  <svg
                    className="h-8 w-8 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Docs em português
              </h3>
              <p className="text-[var(--color-neutral-700)]">
                Guias, exemplos e referência completa na sua língua.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                  <svg
                    className="h-8 w-8 text-[var(--color-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                SDKs oficiais
              </h3>
              <p className="text-[var(--color-neutral-700)]">
                Node.js, Python, Go. Compatíveis com AWS SDK v3.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                  <svg
                    className="h-8 w-8 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Sandbox gratuito
              </h3>
              <p className="text-[var(--color-neutral-700)]">
                Teste ilimitado em ambiente de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-[var(--color-neutral-50)] py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Recursos principais
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Detecção de faces
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Localização, atributos faciais, emoções e qualidade de imagem.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Comparação facial
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Score de similaridade entre duas faces para verificação de
                identidade.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                OCR de documentos
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Extração de texto de RG, CNH, passaportes e documentos gerais.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Análise de documentos
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Detecção de campos estruturados, tabelas e layout de páginas.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Moderação de conteúdo
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Detecção de conteúdo impróprio, violência e nudez em imagens.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-neutral-900)]">
                Detecção de labels
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)]">
                Identificação automática de objetos, cenas e conceitos em
                imagens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Compatibility Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-2xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-lg md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)]">
                  Compatibilidade com AWS
                </h2>
                <p className="mb-6 leading-relaxed text-[var(--color-neutral-700)]">
                  Nossa API é 100% compatível com AWS Rekognition e Textract.
                  Use o mesmo código, mesmas bibliotecas, apenas mude o
                  endpoint.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--color-neutral-700)]">
                      Mesma estrutura de requisições e respostas JSON
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--color-neutral-700)]">
                      Compatível com AWS SDK v3 para Node.js, Python e Go
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--color-neutral-700)]">
                      Migração sem reescrever código — apenas configure o
                      endpoint
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl bg-[var(--color-neutral-100)] p-8">
                  <svg
                    className="h-32 w-32 text-[var(--color-neutral-400)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart Code Examples Section */}
      <section className="bg-[var(--color-neutral-900)] py-20 text-white md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">
              Quickstart
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-300)]">
              Exemplos práticos para começar em minutos
            </p>
          </div>

          <div className="space-y-8">
            {/* Example 1: Node.js DetectFaces */}
            <div className="rounded-xl bg-[var(--color-neutral-800)] p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">
                Node.js — DetectFaces (AWS SDK v3)
              </h3>
              <pre className="overflow-x-auto rounded-lg bg-[var(--color-neutral-950)] p-4 text-sm">
                <code className="text-[var(--color-neutral-100)]">{`import { RekognitionClient, DetectFacesCommand } from "@aws-sdk/client-rekognition";
import { readFileSync } from "fs";

const client = new RekognitionClient({
  region: "sa-east-1",
  endpoint: "https://api.sabia.ai",
  credentials: {
    accessKeyId: process.env.SABIA_ACCESS_KEY,
    secretAccessKey: process.env.SABIA_SECRET_KEY,
  },
});

const imageBytes = readFileSync("./photo.jpg");

const command = new DetectFacesCommand({
  Image: { Bytes: imageBytes },
  Attributes: ["ALL"],
});

const response = await client.send(command);
console.log(response.FaceDetails);`}</code>
              </pre>
            </div>

            {/* Example 2: cURL DetectFaces */}
            <div className="rounded-xl bg-[var(--color-neutral-800)] p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">
                cURL — DetectFaces
              </h3>
              <pre className="overflow-x-auto rounded-lg bg-[var(--color-neutral-950)] p-4 text-sm">
                <code className="text-[var(--color-neutral-100)]">{`curl -X POST https://api.sabia.ai/rekognition/DetectFaces \\
  -H "Content-Type: application/x-amz-json-1.1" \\
  -H "X-Amz-Target: RekognitionService.DetectFaces" \\
  -H "Authorization: AWS4-HMAC-SHA256 Credential=..." \\
  -d '{
    "Image": {
      "Bytes": "<base64-encoded-image>"
    },
    "Attributes": ["ALL"]
  }'`}</code>
              </pre>
            </div>

            {/* Example 3: Node.js DetectText */}
            <div className="rounded-xl bg-[var(--color-neutral-800)] p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">
                Node.js — DetectText (OCR)
              </h3>
              <pre className="overflow-x-auto rounded-lg bg-[var(--color-neutral-950)] p-4 text-sm">
                <code className="text-[var(--color-neutral-100)]">{`import { RekognitionClient, DetectTextCommand } from "@aws-sdk/client-rekognition";

const command = new DetectTextCommand({
  Image: { Bytes: imageBytes },
});

const response = await client.send(command);
response.TextDetections.forEach((text) => {
  console.log(\`\${text.Type}: \${text.DetectedText} (confidence: \${text.Confidence})\`);
});`}</code>
              </pre>
            </div>

            {/* Example 4: Node.js Textract */}
            <div className="rounded-xl bg-[var(--color-neutral-800)] p-6">
              <h3 className="mb-4 font-['Space_Grotesk'] text-lg font-semibold">
                Node.js — Textract-Compat DetectDocumentText
              </h3>
              <pre className="overflow-x-auto rounded-lg bg-[var(--color-neutral-950)] p-4 text-sm">
                <code className="text-[var(--color-neutral-100)]">{`import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract";

const textractClient = new TextractClient({
  region: "sa-east-1",
  endpoint: "https://api.sabia.ai",
  credentials: {
    accessKeyId: process.env.SABIA_ACCESS_KEY,
    secretAccessKey: process.env.SABIA_SECRET_KEY,
  },
});

const command = new DetectDocumentTextCommand({
  Document: { Bytes: documentBytes },
});

const response = await textractClient.send(command);
console.log(response.Blocks);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Limits and Sandbox Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] p-8 md:p-12">
            <h2 className="mb-6 font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)] md:text-3xl">
              Limites e ambiente sandbox
            </h2>
            <div className="space-y-4 text-[var(--color-neutral-700)]">
              <p className="leading-relaxed">
                <strong className="text-[var(--color-neutral-900)]">
                  Sandbox (desenvolvimento):
                </strong>{" "}
                Requisições ilimitadas, mas com marca d'água nas respostas e
                latência não garantida. Ideal para testes e prototipagem.
              </p>
              <p className="leading-relaxed">
                <strong className="text-[var(--color-neutral-900)]">
                  Produção:
                </strong>{" "}
                Rate limit de 10 req/s no plano Starter, 50 req/s no Pro e 200
                req/s no Enterprise. Imagens até 15 MB, documentos até 10
                páginas.
              </p>
              <p className="leading-relaxed">
                <strong className="text-[var(--color-neutral-900)]">
                  Retenção:
                </strong>{" "}
                Não armazenamos suas imagens ou documentos após o processamento.
                Logs de requisição mantidos por 30 dias para auditoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="precos"
        className="bg-[var(--color-neutral-50)] py-20 md:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Preços transparentes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-700)]">
              Cobrança em reais, sem surpresas cambiais
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-xl border border-[var(--color-neutral-200)] bg-white shadow-lg">
                <table className="min-w-full divide-y divide-[var(--color-neutral-200)]">
                  <thead className="bg-[var(--color-neutral-100)]">
                    <tr>
                      <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-sm font-semibold text-[var(--color-neutral-900)]">
                        Plano
                      </th>
                      <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-sm font-semibold text-[var(--color-neutral-900)]">
                        Preço/mês
                      </th>
                      <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-sm font-semibold text-[var(--color-neutral-900)]">
                        Requisições incluídas
                      </th>
                      <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-sm font-semibold text-[var(--color-neutral-900)]">
                        Custo adicional
                      </th>
                      <th className="px-6 py-4 text-left font-['Space_Grotesk'] text-sm font-semibold text-[var(--color-neutral-900)]">
                        Rate limit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-neutral-200)]">
                    <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                      <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                        Sandbox
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        Gratuito
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        Ilimitadas (dev)
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        —
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        5 req/s
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                      <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                        Starter
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        R$ 99
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        5.000
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        R$ 0,015/req
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        10 req/s
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                      <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                        Pro
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        R$ 499
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        50.000
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        R$ 0,008/req
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        50 req/s
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-[var(--color-neutral-50)]">
                      <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                        Enterprise
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        Sob consulta
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        Customizado
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        Negociável
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-700)]">
                        200+ req/s
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--color-neutral-600)]">
              * Todos os planos incluem suporte por email. Enterprise inclui SLA
              e suporte prioritário.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="mb-16 text-center">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>Como funciona a migração do AWS Rekognition?</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                Basta trocar o endpoint na configuração do AWS SDK. Nossa API é
                100% compatível com Rekognition e Textract, então seu código
                existente funciona sem alterações.
              </p>
            </details>

            <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>Os dados ficam realmente no Brasil?</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                Sim. Toda a infraestrutura está em São Paulo (SA-East-1). Não há
                transferência internacional de dados biométricos ou documentos.
              </p>
            </details>

            <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>Posso testar antes de assinar?</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                Sim! O ambiente sandbox é gratuito e ilimitado para
                desenvolvimento. Você só paga quando colocar em produção.
              </p>
            </details>

            <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>Qual a precisão comparada ao AWS Rekognition?</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                Nossos modelos têm precisão equivalente ou superior em datasets
                brasileiros, especialmente para documentos nacionais (RG, CNH,
                CPF).
              </p>
            </details>

            <details className="group rounded-lg border border-[var(--color-neutral-200)] bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-['Space_Grotesk'] font-semibold text-[var(--color-neutral-900)]">
                <span>Vocês armazenam as imagens enviadas?</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-[var(--color-neutral-700)]">
                Não. Processamos e descartamos imediatamente. Mantemos apenas
                logs de requisição (sem conteúdo) por 30 dias para auditoria.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Accessibility Checklist Section */}
      <section className="bg-[var(--color-neutral-50)] py-20 md:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="rounded-2xl border border-[var(--color-neutral-200)] bg-white p-8 shadow-lg md:p-12">
            <h2 className="mb-6 font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-neutral-900)] md:text-3xl">
              Compromisso com acessibilidade
            </h2>
            <p className="mb-8 leading-relaxed text-[var(--color-neutral-700)]">
              Nossa plataforma segue as diretrizes WCAG 2.1 nível AA:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Contraste mínimo de 4.5:1 em todos os textos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Navegação completa por teclado com indicadores de foco
                  visíveis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Markup semântico e ARIA labels para leitores de tela
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--color-neutral-700)]">
                  Respeito a prefers-reduced-motion para animações
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-neutral-900)] md:text-4xl">
            Pronto para começar?
          </h2>
          <p className="mb-8 text-lg text-[var(--color-neutral-700)]">
            Crie sua conta gratuita e comece a processar imagens e documentos em
            minutos.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
          >
            Criar conta gratuita
          </a>
        </div>
      </section>
    </div>
  );
}
