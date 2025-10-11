import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { codeExamples, languageLabels } from "@/data/codeExamples";
import { customDarkTheme } from "@/styles/customDarkTheme";

const CodeBlock = ({
  exampleType,
  title,
}: {
  exampleType: "detectFaces" | "detectText" | "textract";
  title: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<keyof typeof codeExamples>("nodejs");

  const getLanguageForSyntaxHighlighter = (lang: keyof typeof codeExamples) => {
    switch (lang) {
      case "nodejs":
        return "javascript";
      case "python":
        return "python";
      case "php":
        return "php";
      case "ruby":
        return "ruby";
      case "go":
        return "go";
      case "rust":
        return "rust";
      case "java":
        return "java";
      case "dotnet":
        return "csharp";
      case "curl":
        return "bash";
      default:
        return "javascript";
    }
  };

  const currentCode = codeExamples[selectedLanguage][exampleType];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="rounded-xl bg-[var(--color-neutral-800)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-['Space_Grotesk'] text-lg font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-3">
          {/* Seletor de Linguagem */}
          <Select
            value={selectedLanguage}
            onValueChange={(value) =>
              setSelectedLanguage(value as keyof typeof codeExamples)
            }
          >
            <SelectTrigger className="w-40 bg-[var(--color-neutral-700)] border-[var(--color-neutral-600)] text-white text-sm hover:bg-[var(--color-neutral-600)] rounded-4xl [&:focus]:ring-0 [&:focus]:ring-offset-0 [&:focus]:border-[var(--color-neutral-600)] [&:focus]:outline-none [&:focus]:shadow-none">
              <SelectValue placeholder="Linguagem" />
            </SelectTrigger>
            <SelectContent
              className="bg-[var(--color-neutral-800)] border-[var(--color-neutral-700)] [&:focus]:outline-none [&:focus]:ring-0 [&:focus]:border-[var(--color-neutral-700)] z-[99999]"
              position="popper"
              sideOffset={4}
            >
              {Object.entries(languageLabels).map(([key, label]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className="text-white hover:bg-[var(--color-neutral-700)] focus:bg-[var(--color-neutral-700)] [&:focus]:outline-none [&:focus]:ring-0 [&:focus]:border-0 [&:hover]:outline-none [&:hover]:ring-0 [&:hover]:border-0"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Botão Copiar */}
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 rounded-4xl bg-[var(--color-neutral-700)] px-3 py-2 text-sm text-[var(--color-neutral-200)] transition-colors hover:bg-[var(--color-neutral-600)]"
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4"
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
                Copiado!
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        language={getLanguageForSyntaxHighlighter(selectedLanguage)}
        style={customDarkTheme}
        customStyle={{
          background: "#000000",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          border: "1px solid #404040",
        }}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {currentCode}
      </SyntaxHighlighter>
    </div>
  );
};

const Quickstart = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[var(--color-neutral-900)] via-[var(--color-secondary)] to-[var(--color-neutral-950)] py-20 text-white md:py-32 overflow-hidden"
      id="quickstart"
    >
      {/* Efeito de partículas/grãos */}
      <div className="absolute inset-0 opacity-10">
        {/* Partículas principais */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-500"></div>

        {/* Partículas adicionais */}
        <div className="absolute top-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-2500"></div>
        <div className="absolute bottom-40 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-3500"></div>
        <div className="absolute top-1/3 left-20 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-750"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-40 left-2/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-1250"></div>
        <div className="absolute bottom-10 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-2750"></div>
        <div className="absolute top-80 right-1/2 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-1750"></div>
        <div className="absolute bottom-80 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-3250"></div>
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-2250"></div>

        {/* Partículas extras para efeito mais rico */}
        <div className="absolute top-15 left-1/6 w-1 h-1 bg-white rounded-full animate-pulse delay-4500"></div>
        <div className="absolute top-45 right-1/6 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-5500"></div>
        <div className="absolute bottom-15 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-6500"></div>
        <div className="absolute top-2/3 left-1/8 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-750"></div>
        <div className="absolute bottom-45 right-1/8 w-1 h-1 bg-white rounded-full animate-pulse delay-8500"></div>
        <div className="absolute top-25 left-3/4 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-1250"></div>
        <div className="absolute bottom-25 left-1/7 w-1 h-1 bg-white rounded-full animate-pulse delay-9500"></div>
        <div className="absolute top-75 right-3/4 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-10500"></div>
        <div className="absolute bottom-75 left-4/5 w-1 h-1 bg-white rounded-full animate-pulse delay-11500"></div>
        <div className="absolute top-1/6 right-2/5 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-12500"></div>
        <div className="absolute bottom-1/6 left-2/5 w-1 h-1 bg-white rounded-full animate-pulse delay-13500"></div>
        <div className="absolute top-3/4 right-1/7 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-14500"></div>
        <div className="absolute bottom-3/4 left-1/7 w-1 h-1 bg-white rounded-full animate-pulse delay-15500"></div>
        <div className="absolute top-1/8 right-3/5 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-16500"></div>
        <div className="absolute bottom-1/8 left-3/5 w-1 h-1 bg-white rounded-full animate-pulse delay-17500"></div>
        <div className="absolute top-5/6 right-4/5 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-18500"></div>
        <div className="absolute bottom-5/6 left-4/5 w-1 h-1 bg-white rounded-full animate-pulse delay-19500"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight  md:text-5xl lg:text-6x">
            Quickstart
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-neutral-300)]">
            Exemplos práticos para começar em minutos. Cada bloco tem seu
            próprio seletor de linguagem.
          </p>
        </div>

        <div className="space-y-8">
          <CodeBlock exampleType="detectFaces" title="DetectFaces" />

          <CodeBlock exampleType="detectText" title="DetectText (OCR)" />

          <CodeBlock
            exampleType="textract"
            title="Textract-Compat DetectDocumentText"
          />
        </div>
      </div>
    </section>
  );
};

export default Quickstart;
