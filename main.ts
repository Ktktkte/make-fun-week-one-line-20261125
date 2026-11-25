import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Shipped a hundred entries this week; the leaderboard never said thank you — it just re-ranked me.";

// Gate for "Your Week in One Line": exactly one line, 1–100 chars.
if (LINE.length < 1 || LINE.length > 100 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1–100 chars, one line (got ${LINE.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
