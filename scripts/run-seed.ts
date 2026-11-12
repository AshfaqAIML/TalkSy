import { ensureCmsSeed } from "@/lib/cms/seed";

try {
  await ensureCmsSeed();
  console.log("seed OK");
} catch (e) {
  console.error("SEED FAILED:", e instanceof Error ? e.message : e);
}
process.exit(0);
