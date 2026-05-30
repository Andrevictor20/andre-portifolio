import prisma from "@/lib/prisma";
import { EditorClient } from "../EditorClient";
import { notFound } from "next/navigation";
export default async function EditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  let post = {
    id: "new",
    title: "",
    slug: "",
    summary: "",
    tags: "",
    content: "",
    published: false,
  };
  if (id !== "new") {
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) return notFound();
    post = {
      id: existing.id,
      title: existing.title,
      slug: existing.slug,
      summary: existing.summary,
      tags: JSON.parse(existing.tags).join(", "),
      content: existing.content,
      published: existing.published,
    };
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
        {id === "new" ? "Novo Post" : "Editar Post"}
      </h1>
      <EditorClient post={post} />
    </div>
  );
}
