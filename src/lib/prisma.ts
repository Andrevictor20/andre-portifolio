import { PrismaClient } from '@prisma/client'
import { createClient } from '@libsql/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const prismaClientSingleton = () => {
  const envTursoUrl = process.env.TURSO_DATABASE_URL;
  
  if (typeof envTursoUrl === 'string' && envTursoUrl.length > 5 && envTursoUrl !== 'undefined') {
    const libsql = createClient({
      url: envTursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN !== 'undefined' ? process.env.TURSO_AUTH_TOKEN : undefined,
    });
    const adapter = new PrismaLibSql(libsql as any);
    return new PrismaClient({ adapter });
  }

  // Fallback to native Prisma SQLite engine
  return new PrismaClient();
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
