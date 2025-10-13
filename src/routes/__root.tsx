import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const RootLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isAdminPage = location.pathname.startsWith("/admin");

  // Ativa o tracking de scroll apenas se não for a página de login ou admin
  useScrollTracking();

  return (
    <>
      {!isLoginPage && !isAdminPage && <Navigation />}
      <div
        className={isLoginPage || isAdminPage ? "" : "pt-[80px] md:pt-[110px]"}
      >
        <Outlet />
      </div>
      {!isLoginPage && !isAdminPage && <Footer />}
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
