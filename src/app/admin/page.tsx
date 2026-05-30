import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { revalidatePath } from "next/cache";
export default async function AdminDashboard() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  async function deletePost(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.post.delete({ where: { id } });
    revalidatePath("/admin");
    revalidatePath("/blog");
    revalidatePath("/");
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Posts</h1>
        <Link
          href="/admin/editor/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-lg font-medium transition-transform hover:scale-105"
        >
          <Plus size={18} /> Novo Post
        </Link>
      </div>
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm">
              <th className="px-6 py-4 font-medium">Título</th>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)]">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-[var(--text-muted)]">
                  Nenhum post encontrado.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-[var(--bg-tertiary)] transition-colors">
                  <td className="px-6 py-4 font-medium text-[var(--text-primary)]">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                        post.published
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {post.published ? "Publicado" : "Rascunho"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/editor/${post.id}`}
                        className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button
                          type="submit"
                          className="p-2 text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                          title="Excluir"
                        >
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
