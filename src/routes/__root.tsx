import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const RootLayout = () => {
  const location = useLocation();
  const isSigninPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";
  const isAdminPage = location.pathname.startsWith("/admin");

  // Páginas que não devem ter menu e rodapé
  const isMinimalPage = isSigninPage || isSignupPage || isAdminPage;

  // Ativa o tracking de scroll apenas se não for uma página minimal
  useScrollTracking();

  return (
    <>
      {!isMinimalPage && <Navigation />}
      <div className={isMinimalPage ? "" : "pt-[80px] md:pt-[110px]"}>
        <Outlet />
      </div>
      {!isMinimalPage && <Footer />}
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
