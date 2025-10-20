import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import Navigation from "@/components/landing/navigation/navigation";
import Footer from "@/components/landing/footer/footer";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  const location = useLocation();
  const isSigninPage = location.pathname === "/sign-in";
  const isSignupPage = location.pathname === "/sign-up";
  const isAdminPage = location.pathname.startsWith("/app");
  const isMinimalPage = isSigninPage || isSignupPage || isAdminPage;

  useScrollTracking();

  return (
    <>
      {!isMinimalPage && <Navigation />}
      <div className={isMinimalPage ? "" : "pt-[80px] md:pt-[110px]"}>
        <Outlet />
      </div>
      {!isMinimalPage && <Footer />}
      <Toaster />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
