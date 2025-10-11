import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .refine((value) => {
      // Remove todos os caracteres não numéricos
      const cleanValue = value.replace(/\D/g, "");
      // Verifica se tem entre 10 e 15 dígitos
      return cleanValue.length >= 10 && cleanValue.length <= 15;
    }, "Telefone inválido"),
  company: z.string().optional(),
});

export type LeadData = z.infer<typeof leadSchema>;

export function useFirebaseLead() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function saveLead(data: LeadData) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      setLoading(false);
      setError(parsed.error.message);
      return false;
    }

    try {
      await addDoc(collection(db, "leads"), {
        ...parsed.data,
        company: parsed.data.company || "",
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
    saveLead,
    loading,
    error,
    success,
  };
}
