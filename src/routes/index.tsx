import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src="/images/logo.png" alt="Logo" />
    </div>
  );
}
