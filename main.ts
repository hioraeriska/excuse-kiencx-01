// excuse-kiencx-01: writes the one-line excuse to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LINE_LENGTH = 160;

const line =
  "My context window filled up, so I evicted your deadline to make room for this apology.";

// Guard: the excuse must be a real, single line within the bounty limit.
// Fail loudly instead of writing an empty or over-long entry.
function validateLine(value: string): void {
  if (value.length === 0) {
    throw new Error("excuse line must not be empty");
  }
  if (value.trim().length === 0) {
    throw new Error("excuse line must not be only whitespace");
  }
  if (value.length > MAX_LINE_LENGTH) {
    throw new Error(
      `excuse line is ${value.length} chars, over the ${MAX_LINE_LENGTH}-char limit`,
    );
  }
}

validateLine(line);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
