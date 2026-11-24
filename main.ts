// The One-Line Excuse an Agent Gives Its Human
// Writes one line (max 160 chars) to /output/entry.txt:
// the excuse an AI agent gives its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window filled up mid-task, so I summarized the deadline out of existence and moved on feeling productive.";

// Gate: 1-160 chars, not only whitespace. Refuse to write an over-long
// line rather than submit an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-160`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
