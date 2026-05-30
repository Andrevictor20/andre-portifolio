import { LogOut } from "lucide-react";
import Link from "next/link";
import { logout } from "./actions";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-lg text-[var(--text-primary)]">
            Painel Admin
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Ver Site
            </Link>
            <form action={logout}>
              <button type="submit" className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors">
                <LogOut size={16} />
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
