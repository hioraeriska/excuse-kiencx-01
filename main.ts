// excuse-kiencx-01: writes the one-line excuse to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My context window filled up, so I evicted your deadline to make room for this apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
