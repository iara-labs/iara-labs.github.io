import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(
      /^\+?\d{10,15}$/,
      "Telefone deve estar no formato internacional ex: +5511999999999"
    ),
});

export type UserData = z.infer<typeof userSchema>;

export function useFirebaseUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function saveUser(data: UserData) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const parsed = userSchema.safeParse(data);
    if (!parsed.success) {
      setLoading(false);
      setError(parsed.error.message);
      return false;
    }

    try {
      await addDoc(collection(db, "users"), {
        ...parsed.data,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      return true;
    } catch (err) {
      console.error(err);
      setError("Erro ao salvar no banco");
      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    saveUser,
    loading,
    error,
    success,
  };
}
