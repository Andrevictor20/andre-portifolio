import prisma from "./prisma";
import type { PostMeta, Post } from "@/types/blog";
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
  });
  if (!post) return null;
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);
  return {
    meta: {
      slug: post.slug,
      title: post.title,
      date: post.createdAt.toISOString(),
      summary: post.summary,
      tags: JSON.parse(post.tags),
      readingTime,
    },
    content: post.content,
  };
}
export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return posts.map((post) => {
    const words = post.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);
    return {
      slug: post.slug,
      title: post.title,
      date: post.createdAt.toISOString(),
      summary: post.summary,
      tags: JSON.parse(post.tags),
      readingTime,
    };
  });
}
