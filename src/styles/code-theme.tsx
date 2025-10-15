import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

// Tema dark personalizado com as cores do site e alto contraste
export const customDarkTheme: SyntaxHighlighterProps["style"] = {
  'code[class*="language-"]': {
    color: "#ffffff", // Branco puro para máximo contraste
    background: "none",
    textShadow: "none",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#ffffff", // Branco puro para máximo contraste
    background: "#000000", // Preto puro para máximo contraste
    textShadow: "none",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre-wrap", // Permite quebra de linha em mobile
    wordSpacing: "normal",
    wordBreak: "break-word", // Quebra palavras longas em mobile
    wordWrap: "break-word",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "auto", // Hifenização automática em mobile
    MozHyphens: "auto",
    msHyphens: "auto",
    hyphens: "auto",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.5rem",
    border: "1px solid #404040", // Borda sutil para definir o bloco
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#262626", // --color-neutral-800
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#6b7280", // Cinza para comentários
    fontStyle: "italic",
  },
  prolog: {
    color: "#6b7280",
  },
  doctype: {
    color: "#6b7280",
  },
  cdata: {
    color: "#6b7280",
  },
  punctuation: {
    color: "#ffffff", // Branco para pontuação
  },
  ".namespace": {
    opacity: ".7",
  },
  property: {
    color: "#1fa37a", // Verde primário do site
  },
  tag: {
    color: "#1fa37a",
  },
  boolean: {
    color: "#1fa37a",
  },
  number: {
    color: "#1fa37a",
  },
  constant: {
    color: "#1fa37a",
  },
  symbol: {
    color: "#1fa37a",
  },
  deleted: {
    color: "#1fa37a",
  },
  selector: {
    color: "#34d399", // Verde mais claro para seletores
  },
  "attr-name": {
    color: "#34d399",
  },
  string: {
    color: "#34d399", // Verde claro para strings
  },
  char: {
    color: "#34d399",
  },
  builtin: {
    color: "#34d399",
  },
  inserted: {
    color: "#34d399",
  },
  operator: {
    color: "#ffffff", // Branco para operadores
  },
  entity: {
    color: "#ffffff",
    cursor: "help",
  },
  url: {
    color: "#ffffff",
  },
  ".language-css .token.string": {
    color: "#34d399",
  },
  ".style .token.string": {
    color: "#34d399",
  },
  variable: {
    color: "#ffffff",
  },
  atrule: {
    color: "#10b981", // Verde vibrante para palavras-chave
  },
  "attr-value": {
    color: "#10b981",
  },
  function: {
    color: "#10b981",
  },
  "class-name": {
    color: "#10b981",
  },
  keyword: {
    color: "#10b981", // Verde vibrante para palavras-chave
  },
  regex: {
    color: "#10b981",
  },
  important: {
    color: "#059669", // Verde escuro para importante
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};
