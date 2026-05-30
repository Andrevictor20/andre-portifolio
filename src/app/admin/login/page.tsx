"use client";
import { useActionState } from "react";
import { login } from "../actions";
import { Lock, ArrowRight } from "lucide-react";
export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-primary)]">
      <div className="max-w-md w-full p-8 rounded-2xl border bg-[var(--bg-secondary)] border-[var(--border-subtle)] shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mb-4">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Login</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-2 text-center">
            Área restrita. Insira sua senha para acessar o painel do blog.
          </p>
        </div>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-[var(--text-primary)]">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl outline-none transition-colors border focus:border-[var(--accent-primary)] bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-primary)]"
              placeholder="••••••••"
            />
            {state?.error && (
              <p className="text-sm text-red-500 mt-1">{state.error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] bg-[var(--accent-primary)] shadow-[0_4px_15px_var(--accent-glow)]"
          >
            {isPending ? "Entrando..." : (
              <>
                Entrar <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
