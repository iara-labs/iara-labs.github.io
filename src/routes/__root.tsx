import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const RootLayout = () => {
  // Ativa o tracking de scroll
  useScrollTracking();

  return (
    <>
      <Navigation />
      <div className="pt-[80px] md:pt-[110px]">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
