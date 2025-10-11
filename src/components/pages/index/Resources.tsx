const Resources = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10 py-20 md:py-32"
      id="recursos"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6x">
            Principais Recursos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Detecção de faces
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Localização, atributos faciais, emoções e qualidade de imagem.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Comparação facial
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Score de similaridade entre duas faces para verificação de
              identidade.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              OCR inteligente
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Extração de texto de documentos, placas de veículos, cartões e
              qualquer imagem com texto.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Análise de documentos
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Detecção de campos estruturados, tabelas e layout de páginas.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Moderação de conteúdo
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Detecção de conteúdo impróprio, violência e nudez em imagens.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-[var(--color-neutral-900)]">
              Detecção de labels
            </h3>
            <p className="leading-relaxed text-[var(--color-neutral-700)]">
              Identificação automática de objetos, cenas e conceitos em imagens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
