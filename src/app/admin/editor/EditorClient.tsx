"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { savePost } from "./actions";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
type PostData = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string;
  content: string;
  published: boolean;
};
export function EditorClient({ post }: { post: PostData }) {
  const [content, setContent] = useState(post.content || "");
  return (
    <form action={savePost} className="space-y-6">
      <input type="hidden" name="id" value={post.id} />
      <input type="hidden" name="content" value={content} />
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft size={16} /> Voltar
        </Link>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--accent-primary)] text-white rounded-lg font-medium transition-transform hover:scale-105 shadow-[0_4px_15px_var(--accent-glow)]"
        >
          <Save size={18} /> Salvar Post
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--text-primary)]">Título</label>
          <input
            name="title"
            defaultValue={post.title}
            required
            className="w-full px-4 py-2 rounded-xl outline-none border focus:border-[var(--accent-primary)] bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--text-primary)]">Slug (URL)</label>
          <input
            name="slug"
            defaultValue={post.slug}
            required
            className="w-full px-4 py-2 rounded-xl outline-none border focus:border-[var(--accent-primary)] bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--text-primary)]">Resumo</label>
        <textarea
          name="summary"
          defaultValue={post.summary}
          required
          rows={2}
          className="w-full px-4 py-2 rounded-xl outline-none border focus:border-[var(--accent-primary)] bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-primary)]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--text-primary)]">Tags (separadas por vírgula)</label>
          <input
            name="tags"
            defaultValue={post.tags}
            placeholder="Ex: Next.js, React, Tutorial"
            className="w-full px-4 py-2 rounded-xl outline-none border focus:border-[var(--accent-primary)] bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
        </div>
        <div className="space-y-2 flex flex-col justify-center">
          <label className="flex items-center gap-3 cursor-pointer mt-6">
            <input
              type="checkbox"
              name="published"
              defaultChecked={post.published}
              className="w-5 h-5 rounded border-[var(--border-subtle)] text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
            />
            <span className="text-sm font-medium text-[var(--text-primary)]">Post Público (Publicado)</span>
          </label>
        </div>
      </div>
      <div className="space-y-2 mt-8" data-color-mode="dark">
        <label className="text-sm font-medium text-[var(--text-primary)]">Conteúdo (Markdown / MDX)</label>
        <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden">
          <MDEditor
            value={content}
            onChange={(val) => setContent(val || "")}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </form>
  );
}
