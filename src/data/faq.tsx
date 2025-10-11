export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a migração do AWS Rekognition?",
    answer:
      "Basta trocar o endpoint na configuração do AWS SDK. Nossa API é 100% compatível com Rekognition e Textract, então seu código existente funciona sem alterações.",
  },
  {
    question: "Os dados ficam realmente no Brasil?",
    answer:
      "Sim. Toda a infraestrutura está em São Paulo (SA-East-1). Não há transferência internacional de dados biométricos ou documentos.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer:
      "Sim! O ambiente sandbox é gratuito e ilimitado para desenvolvimento. Você só paga quando colocar em produção.",
  },
  {
    question: "Qual a precisão comparada ao AWS Rekognition?",
    answer:
      "Nossos modelos têm precisão equivalente ou superior em datasets brasileiros, especialmente para documentos nacionais (RG, CNH, CPF).",
  },
  {
    question: "Vocês armazenam as imagens enviadas?",
    answer:
      "Não. Processamos e descartamos imediatamente. Mantemos apenas logs de requisição (sem conteúdo) por 30 dias para auditoria.",
  },
];
