import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
export async function BlogPreview() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);
  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="section-container">
        {}
        <FadeIn>
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-2"
              style={{ color: "var(--accent-primary)" }}
            >
              Blog
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Artigos Técnicos
            </h2>
            <p
              className="mt-3 text-base max-w-lg mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Compartilhando conhecimento sobre desenvolvimento, DevOps, IoT e
              mais.
            </p>
          </div>
        </FadeIn>
        {}
        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {latestPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group">
                  <article
                    className="h-full rounded-2xl border overflow-hidden card-hover"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    {}
                    <div
                      className="h-40 flex items-center justify-center"
                      style={{ background: "var(--gradient-card)" }}
                    >
                      <span
                        className="text-5xl font-black opacity-15"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        {"</>"}
                      </span>
                    </div>
                    <div className="p-5">
                      {}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                            style={{
                              background: "rgba(108, 99, 255, 0.1)",
                              color: "var(--accent-primary)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3
                        className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-sm mb-4 line-clamp-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {post.summary}
                      </p>
                      <div
                        className="flex items-center gap-4 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readingTime} min
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div
              className="text-center py-16 rounded-2xl border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <p className="text-5xl mb-4">📝</p>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Em breve!
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                Novos artigos técnicos estão a caminho.
              </p>
            </div>
          </FadeIn>
        )}
        {}
        {latestPosts.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{ color: "var(--accent-primary)" }}
              >
                Ver todos os artigos
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
