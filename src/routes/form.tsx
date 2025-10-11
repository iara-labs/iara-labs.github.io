import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useFirebaseUser } from "../hooks/useFirebaseUser";

export const Route = createFileRoute("/form")({
  component: Form,
});

function Form() {
  const { saveUser, loading, error, success } = useFirebaseUser();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveUser(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto p-4 border rounded"
    >
      <input
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="+5511999999999"
        value={form.phone}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Cadastrar"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">Usuário cadastrado com sucesso!</p>
      )}
    </form>
  );
}
