import { SigninForm } from "@/components/landing/sign-in/signin-form";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export const Route = createFileRoute("/_landing/sign-in")({
  component: SigninPage,
});

function SigninPage() {
  const { trackCustomEvent } = useAnalytics();

  // Rastrear visualização da página de signin
  useEffect(() => {
    trackCustomEvent("page_view", {
      page_name: "signin",
      page_path: "/signin",
    });
  }, [trackCustomEvent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-neutral-50)] to-[var(--color-primary)]/10">
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

        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-primary)]/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md mx-auto px-6">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}
