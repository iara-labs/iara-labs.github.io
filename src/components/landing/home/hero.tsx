import { useAnalytics } from "@/hooks/use-analytics";

const Hero = () => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName, "hero-section");
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10 py-20 md:py-32"
    >
      {/* Background Pattern Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-[var(--color-secondary)]/15 to-[var(--color-primary)]/20 blur-2xl"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fa37a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating elements - Enhanced random particles with scale effects */}
        <div className="absolute top-1/6 left-1/6 h-1 w-1 rounded-full bg-[var(--color-primary)]/4 animate-particle-1"></div>
        <div className="absolute top-1/4 right-1/4 h-2.5 w-2.5 rounded-full bg-[var(--color-secondary)]/6 animate-particle-2"></div>
        <div className="absolute top-1/3 left-1/5 h-4 w-4 rounded-full bg-[var(--color-primary)]/3 animate-particle-3"></div>
        <div className="absolute top-2/5 right-1/6 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]/8 animate-particle-4"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 rounded-full bg-[var(--color-primary)]/5 animate-particle-5"></div>
        <div className="absolute top-3/5 right-1/3 h-2 w-2 rounded-full bg-[var(--color-secondary)]/7 animate-particle-6"></div>
        <div className="absolute bottom-1/6 left-1/6 h-3.5 w-3.5 rounded-full bg-[var(--color-primary)]/6 animate-particle-7"></div>
        <div className="absolute bottom-1/4 right-1/5 h-1 w-1 rounded-full bg-[var(--color-secondary)]/9 animate-particle-8"></div>
        <div className="absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-[var(--color-primary)]/4 animate-particle-9"></div>
        <div className="absolute bottom-2/5 right-1/4 h-4.5 w-4.5 rounded-full bg-[var(--color-secondary)]/5 animate-particle-10"></div>
        <div className="absolute bottom-1/2 left-1/3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/7 animate-particle-11"></div>
        <div className="absolute bottom-3/5 right-1/6 h-3 w-3 rounded-full bg-[var(--color-secondary)]/6 animate-particle-12"></div>
        <div className="absolute top-1/5 left-2/3 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]/8 animate-particle-13"></div>
        <div className="absolute top-2/5 right-2/3 h-1 w-1 rounded-full bg-[var(--color-secondary)]/4 animate-particle-14"></div>
        <div className="absolute bottom-1/5 left-2/3 h-3.5 w-3.5 rounded-full bg-[var(--color-primary)]/5 animate-particle-15"></div>
        <div className="absolute bottom-2/5 right-2/3 h-2 w-2 rounded-full bg-[var(--color-secondary)]/7 animate-particle-16"></div>

        {/* Additional random particles for more density */}
        <div className="absolute top-1/8 left-1/8 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/3 animate-particle-17"></div>
        <div className="absolute top-3/8 right-1/8 h-2 w-2 rounded-full bg-[var(--color-secondary)]/5 animate-particle-18"></div>
        <div className="absolute top-5/8 left-1/8 h-1 w-1 rounded-full bg-[var(--color-primary)]/6 animate-particle-19"></div>
        <div className="absolute top-7/8 right-1/8 h-3 w-3 rounded-full bg-[var(--color-secondary)]/4 animate-particle-20"></div>
        <div className="absolute bottom-1/8 left-1/8 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]/7 animate-particle-21"></div>
        <div className="absolute bottom-3/8 right-1/8 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]/8 animate-particle-22"></div>
        <div className="absolute bottom-5/8 left-1/8 h-4 w-4 rounded-full bg-[var(--color-primary)]/3 animate-particle-23"></div>
        <div className="absolute bottom-7/8 right-1/8 h-1 w-1 rounded-full bg-[var(--color-secondary)]/6 animate-particle-24"></div>

        {/* Center area particles */}
        <div className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-[var(--color-primary)]/4 animate-particle-25"></div>
        <div className="absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-[var(--color-secondary)]/7 animate-particle-26"></div>
        <div className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-[var(--color-primary)]/5 animate-particle-27"></div>

        {/* Extra scattered particles for maximum randomness */}
        <div className="absolute top-1/12 left-1/3 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]/5 animate-particle-28"></div>
        <div className="absolute top-1/3 right-1/12 h-2 w-2 rounded-full bg-[var(--color-primary)]/4 animate-particle-29"></div>
        <div className="absolute bottom-1/12 right-1/3 h-1 w-1 rounded-full bg-[var(--color-secondary)]/6 animate-particle-30"></div>
        <div className="absolute bottom-1/3 left-1/12 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]/3 animate-particle-1"></div>

        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-primary)]/5 to-transparent"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--color-neutral-900)] md:text-5xl lg:text-6xl">
              Reconhecimento facial e OCR{" "}
              <span className="text-[var(--color-primary)] text-2xl lg:text-4xl">
                hospedado no Brasil
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-neutral-700)] md:text-xl">
              APIs compatíveis com AWS Rekognition e Textract. Dados seguros em
              território nacional, conformidade com LGPD e latência reduzida
              para aplicações brasileiras.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/wait-list"
                onClick={() => handleCTAClick("comecar-agora")}
                className="inline-flex items-center justify-center rounded-4xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
              >
                Começar Agora
              </a>
              <a
                href="#quickstart"
                onClick={() => handleCTAClick("ver-documentacao")}
                className="inline-flex items-center justify-center rounded-4xl border-2 border-[var(--color-secondary)] px-8 py-4 font-semibold text-[var(--color-secondary)] transition-all hover:bg-[var(--color-secondary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
              >
                Ver documentação
              </a>
            </div>
            <div className="space-y-4 pt-8">
              <p className="text-md italic text-[var(--color-neutral-400)]">
                "Migramos do Rekognition e reduzimos custos em 40% mantendo a
                mesma qualidade."
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/images/logo.webp"
              alt="Hero"
              className="md:w-[75%] lg:w-[85%] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
