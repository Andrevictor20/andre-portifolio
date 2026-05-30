import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre desenvolvimento, Cloud, DevOps e experiências da faculdade.",
};
export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <div className="pt-32 pb-20">
      <div className="section-container max-w-4xl">
        {}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
            Blog Técnico
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Documentando aprendizados, projetos e ideias sobre tecnologia.
          </p>
        </div>
        {}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border p-6 sm:p-8 transition-all hover:shadow-[var(--shadow-md)]"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {}
                <div className="hidden sm:block shrink-0 w-32 pt-1">
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-primary)" }}>
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      month: "short",
                      year: "numeric",
                    }).toUpperCase()}
                  </p>
                  <p className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                    {new Date(post.date).getDate()}
                  </p>
                </div>
                {}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "var(--bg-tertiary)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2
                      className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                      <span className="flex sm:hidden items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readingTime} min de leitura
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      Ler artigo <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="text-center py-20 border rounded-2xl" style={{ borderColor: "var(--border-subtle)" }}>
              <p className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Nenhum post encontrado</p>
              <p style={{ color: "var(--text-secondary)" }}>Volte em breve para novos conteúdos!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
