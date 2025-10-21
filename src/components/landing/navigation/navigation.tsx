import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { menuItems } from "@/data/menu-items";
import { useAnalytics } from "@/hooks/use-analytics";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverQuickstart, setIsOverQuickstart] = useState(false);
  const location = useLocation();
  const { trackCTAClick } = useAnalytics();

  // Verificar se estamos na página de registro, obrigado, signin, signup ou blog
  const isOnRegisterPage = location.pathname === "/wait-list";
  const isOnThankYouPage = location.pathname === "/obrigado";
  const isOnBlogPage = location.pathname.startsWith("/blog");

  // Função para scroll suave ou navegação
  const scrollToSection = (href: string, itemLabel?: string) => {
    // Rastrear clique na navegação
    if (itemLabel) {
      trackCTAClick(
        `nav-${itemLabel.toLowerCase().replace(/\s+/g, "-")}`,
        "navigation"
      );
    }

    // Se é um link externo (começa com /), navegar diretamente
    if (href.startsWith("/")) {
      window.location.href = href;
      setIsMobileMenuOpen(false);
      return;
    }

    if (isOnRegisterPage || isOnThankYouPage || isOnBlogPage) {
      // Se estamos na página de registro, obrigado, signin, signup ou blog, navegar para a página index com a seção
      window.location.href = `/${href}`;
    } else {
      // Se estamos na página index, fazer scroll suave
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // Fechar menu mobile após clicar
    setIsMobileMenuOpen(false);
  };

  // Detectar seção ativa baseada no scroll (apenas na página index)
  useEffect(() => {
    if (isOnRegisterPage || isOnThankYouPage) {
      // Se estamos na página de registro, obrigado, signin ou signup, definir seção ativa como "inicio"
      setActiveSection("inicio");
      return;
    }

    if (isOnBlogPage) {
      // Se estamos na página do blog, definir seção ativa como "blog"
      setActiveSection("blog");
      return;
    }

    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100; // Offset para considerar o menu fixo

      // Verificar se estamos sobre a seção Quickstart
      const quickstartElement = document.getElementById("quickstart");
      if (quickstartElement) {
        const quickstartTop = quickstartElement.offsetTop;
        const quickstartBottom = quickstartTop + quickstartElement.offsetHeight;
        const menuHeight = 110; // Altura do menu

        setIsOverQuickstart(
          scrollPosition >= quickstartTop - menuHeight &&
            scrollPosition <= quickstartBottom
        );
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar seção inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOnRegisterPage, isOnThankYouPage, isOnBlogPage]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-[var(--color-neutral-200)] shadow-lg w-full transition-all duration-300 ${
        isOverQuickstart ? "bg-background" : "bg-background/65"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-between h-[80px] md:h-[110px]">
          <div className="flex items-center">
            <img
              src="/images/logo.webp"
              alt="Iara Labs"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.label)}
                className={`group relative px-4 py-2 xl:px-5 xl:py-3 text-sm xl:text-base font-medium transition-all duration-300 ease-in-out rounded-4xl cursor-pointer ${
                  activeSection === item.id
                    ? "text-white bg-[var(--color-primary)]"
                    : "text-[var(--color-secondary)] hover:text-white hover:bg-[var(--color-primary)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={isOnThankYouPage ? "/" : "/wait-list"}
              onClick={() =>
                trackCTAClick(
                  isOnThankYouPage ? "voltar-inicio" : "comecar-agora",
                  "navigation-header"
                )
              }
              className="group relative px-4 py-2 xl:px-5 xl:py-3 text-sm xl:text-base font-medium transition-all duration-300 ease-in-out rounded-4xl cursor-pointer text-white bg-[var(--color-primary)] hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2"
            >
              {isOnThankYouPage ? "Voltar ao Início" : "Começar Agora"}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-4xl text-[var(--color-secondary)] hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-neutral-200)] shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.label)}
                className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out rounded-4xl cursor-pointer ${
                  activeSection === item.id
                    ? "text-white bg-[var(--color-primary)]"
                    : "text-[var(--color-secondary)] hover:text-white hover:bg-[var(--color-primary)]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[var(--color-neutral-200)] space-y-2">
              <a
                href={isOnThankYouPage ? "/" : "/wait-list"}
                onClick={() =>
                  trackCTAClick(
                    isOnThankYouPage ? "voltar-inicio" : "comecar-agora",
                    "navigation-mobile"
                  )
                }
                className="w-full inline-flex items-center justify-center rounded-4xl bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-[#188f6a] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2 cursor-pointer"
              >
                {isOnThankYouPage ? "Voltar ao Início" : "Começar Agora"}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
