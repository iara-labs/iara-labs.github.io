import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] relative">
      {/* Background Pattern Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-[var(--color-secondary)]/8 to-[var(--color-primary)]/10 blur-2xl"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231fa37a' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating elements - Subtle particles */}
        <div className="absolute top-1/6 left-1/6 h-1 w-1 rounded-full bg-[var(--color-primary)]/3 animate-particle-1"></div>
        <div className="absolute top-1/4 right-1/4 h-2.5 w-2.5 rounded-full bg-[var(--color-secondary)]/4 animate-particle-2"></div>
        <div className="absolute top-1/3 left-1/5 h-4 w-4 rounded-full bg-[var(--color-primary)]/2 animate-particle-3"></div>
        <div className="absolute top-2/5 right-1/6 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]/5 animate-particle-4"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 rounded-full bg-[var(--color-primary)]/3 animate-particle-5"></div>
        <div className="absolute top-3/5 right-1/3 h-2 w-2 rounded-full bg-[var(--color-secondary)]/4 animate-particle-6"></div>
        <div className="absolute bottom-1/6 left-1/6 h-3.5 w-3.5 rounded-full bg-[var(--color-primary)]/3 animate-particle-7"></div>
        <div className="absolute bottom-1/4 right-1/5 h-1 w-1 rounded-full bg-[var(--color-secondary)]/5 animate-particle-8"></div>
        <div className="absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-[var(--color-primary)]/2 animate-particle-9"></div>
        <div className="absolute bottom-2/5 right-1/4 h-4.5 w-4.5 rounded-full bg-[var(--color-secondary)]/3 animate-particle-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
