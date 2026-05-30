import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Metadata, ResolvingMetadata } from "next";
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: "Post não encontrado" };
  }
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      publishedTime: post.meta.date,
      authors: ["André Victor"],
    },
  };
}
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }
  return (
    <article className="pt-32 pb-20">
      <div className="section-container max-w-3xl">
        {}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent-primary)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={16} />
            Voltar para o blog
          </Link>
        </div>
        {}
        <header className="mb-12 pb-8 border-b" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(108, 99, 255, 0.1)",
                  color: "var(--accent-primary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs" style={{ background: "var(--gradient-hero)" }}>
                AV
              </div>
              <span style={{ color: "var(--text-primary)" }}>André Victor</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {new Date(post.meta.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {post.meta.readingTime} min
              </span>
            </div>
          </div>
        </header>
        {}
        <div className="prose prose-lg max-w-none prose-custom">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                ],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
