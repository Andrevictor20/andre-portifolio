require('dotenv').config();
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({});

async function main() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  
  if (!fs.existsSync(postsDirectory)) return;

  const files = fs.readdirSync(postsDirectory);

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const tags = data.tags || [];

    await prisma.post.upsert({
      where: { slug },
      update: {
        title: data.title,
        summary: data.summary,
        content: content,
        tags: JSON.stringify(tags),
        published: true,
        createdAt: new Date(data.date),
      },
      create: {
        slug,
        title: data.title,
        summary: data.summary,
        content: content,
        tags: JSON.stringify(tags),
        published: true,
        createdAt: new Date(data.date),
      },
    });

    console.log(`Migrated: ${slug}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
