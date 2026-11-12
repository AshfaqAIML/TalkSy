/** Verify CMS tables exist in a database (default: main dev db). */
import { PrismaClient } from "@prisma/client";

const url = process.env.DATABASE_URL;
const prisma = new PrismaClient();
const tables = await prisma.$queryRaw<{ name: string }[]>`
  SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'Cms%' ORDER BY name
`;
console.log(`${url ?? "default"} → ${tables.length} CMS tables:`);
for (const t of tables) console.log(`  ${t.name}`);
await prisma.$disconnect();
