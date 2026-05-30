const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@libsql/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

async function main() {
  const adapter = new PrismaLibSql({
    url: 'libsql://dummy.turso.io',
    authToken: 'dummy'
  });
  const prisma = new PrismaClient({ adapter });

  try {
    const posts = await prisma.post.findMany();
    console.log("Success! Posts count:", posts.length);
  } catch (e) {
    console.error("Error:", e);
  }
}

main();
