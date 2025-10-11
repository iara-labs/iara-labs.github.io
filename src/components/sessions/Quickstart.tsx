const Quickstart = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--color-neutral-900)] via-[var(--color-secondary)] to-[var(--color-neutral-950)] py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight  md:text-5xl lg:text-6x">
            Quickstart
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-300)]">
            Exemplos práticos para começar em minutos.
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
  );
};

export default Quickstart;
