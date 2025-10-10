import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RootLayout = () => (
  <>
    <Navigation />
    <div className="pt-[80px] md:pt-[110px]">
      <Outlet />
    </div>
    <Footer />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
