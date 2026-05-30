"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export async function savePost(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const summary = formData.get("summary") as string;
  const tagsStr = formData.get("tags") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const tags = tagsStr.split(",").map((t) => t.trim()).filter(Boolean);
  const data = {
    title,
    slug,
    summary,
    content,
    tags: JSON.stringify(tags),
    published,
  };
  if (id === "new") {
    await prisma.post.create({ data });
  } else {
    await prisma.post.update({
      where: { id },
      data,
    });
  }
  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin");
}
