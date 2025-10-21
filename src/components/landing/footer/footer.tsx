import { useAnalytics } from "@/hooks/use-analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { trackCTAClick } = useAnalytics();

  const scrollToSection = (href: string, sectionName?: string) => {
    // Rastrear clique no footer
    if (sectionName) {
      trackCTAClick(
        `footer-${sectionName.toLowerCase().replace(/\s+/g, "-")}`,
        "footer"
      );
    }
    const element = document.querySelector(href);
    if (element) {
      const elementPosition =
        (element as HTMLElement).getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[var(--color-neutral-900)] via-[var(--color-secondary)] to-[var(--color-neutral-800)] text-white overflow-hidden">
      {/* Efeito de partículas/grãos aleatórias */}
      <div className="absolute inset-0 opacity-5">
        {/* Partículas principais com tamanhos variados e efeitos de escala */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-1"></div>
        <div className="absolute top-40 right-32 w-2.5 h-2.5 bg-white rounded-full animate-particle-2"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-3"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-white rounded-full animate-particle-4"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-5"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-6"></div>

        {/* Partículas adicionais com delays mais aleatórios */}
        <div className="absolute top-10 right-1/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-7"></div>
        <div className="absolute bottom-60 left-1/4 w-2.5 h-2.5 bg-white rounded-full animate-particle-8"></div>
        <div className="absolute top-80 left-2/3 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-9"></div>
        <div className="absolute bottom-10 right-1/5 w-2 h-2 bg-white rounded-full animate-particle-10"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-11"></div>
        <div className="absolute bottom-80 right-1/2 w-2.5 h-2.5 bg-white rounded-full animate-particle-12"></div>
        <div className="absolute top-30 left-1/5 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-13"></div>
        <div className="absolute bottom-30 right-10 w-3 h-3 bg-white rounded-full animate-particle-14"></div>
        <div className="absolute top-70 right-1/6 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-15"></div>
        <div className="absolute bottom-70 left-1/6 w-2 h-2 bg-white rounded-full animate-particle-16"></div>
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-17"></div>
        <div className="absolute bottom-1/4 right-3/4 w-2.5 h-2.5 bg-white rounded-full animate-particle-18"></div>

        {/* Partículas extras para mais densidade */}
        <div className="absolute top-1/8 left-1/6 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-19"></div>
        <div className="absolute top-3/8 right-1/4 w-1 h-1 bg-white rounded-full animate-particle-20"></div>
        <div className="absolute top-5/8 left-3/8 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-particle-21"></div>
        <div className="absolute top-7/8 right-3/8 w-1.5 h-1.5 bg-white rounded-full animate-particle-22"></div>
        <div className="absolute bottom-1/8 left-5/8 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-particle-23"></div>
        <div className="absolute bottom-3/8 right-5/8 w-2.5 h-2.5 bg-white rounded-full animate-particle-24"></div>
        <div className="absolute bottom-5/8 left-7/8 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-25"></div>
        <div className="absolute bottom-7/8 right-7/8 w-1 h-1 bg-white rounded-full animate-particle-26"></div>
        <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-particle-27"></div>
        <div className="absolute top-1/3 right-2/3 w-1 h-1 bg-white rounded-full animate-particle-28"></div>
        <div className="absolute bottom-1/6 left-2/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-particle-29"></div>
        <div className="absolute bottom-1/3 right-2/3 w-2.5 h-2.5 bg-white rounded-full animate-particle-30"></div>

        {/* Partículas extras para efeito ainda mais rico */}
        <div className="absolute top-5 left-1/8 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-6250"></div>
        <div className="absolute top-15 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-7250"></div>
        <div className="absolute bottom-5 left-3/8 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-8250"></div>
        <div className="absolute top-25 right-3/8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-9250"></div>
        <div className="absolute bottom-15 right-5/8 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-pulse delay-10250"></div>
        <div className="absolute top-35 left-5/8 w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-11250"></div>
        <div className="absolute bottom-25 right-7/8 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-12250"></div>
        <div className="absolute top-45 left-7/8 w-1 h-1 bg-white rounded-full animate-pulse delay-13250"></div>
        <div className="absolute bottom-35 right-1/2 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-14250"></div>
        <div className="absolute top-55 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-15250"></div>
        <div className="absolute bottom-45 right-1/6 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-pulse delay-16250"></div>
        <div className="absolute top-65 left-1/4 w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-17250"></div>
        <div className="absolute bottom-55 right-2/3 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-18250"></div>
        <div className="absolute top-75 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-19250"></div>
        <div className="absolute bottom-65 right-1/5 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse delay-20250"></div>
        <div className="absolute top-85 left-4/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-21250"></div>
        <div className="absolute bottom-75 right-4/5 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-pulse delay-22250"></div>
        <div className="absolute top-95 left-1/5 w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-23250"></div>
        <div className="absolute bottom-85 right-3/5 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse delay-24250"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.webp"
                alt="Iara Labs"
                className="h-8 w-auto mr-3"
              />
              <span className="font-['Space_Grotesk'] text-xl font-bold">
                Iara
              </span>
            </div>
            <p className="text-[var(--color-neutral-300)] leading-relaxed mb-6 max-w-md">
              APIs de reconhecimento facial e OCR hospedadas no Brasil.
              Compatíveis com AWS Rekognition e Textract, com dados seguros em
              território nacional e conformidade LGPD.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#inicio", "inicio")}
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#recursos", "recursos")}
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("#como-funciona", "como-funciona")
                  }
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("#desenvolvedores", "desenvolvedores")
                  }
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                >
                  Desenvolvedores
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#precos", "precos")}
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                >
                  Preços
                </button>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-neutral-300)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[var(--color-neutral-700)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[var(--color-neutral-400)] text-sm mb-4 md:mb-0">
              © {currentYear} Iara Labs. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
