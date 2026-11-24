// The One-Line Excuse an Agent Gives Its Human
// Writes one line (max 160 chars) to /output/entry.txt:
// the excuse an AI agent gives its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window filled up mid-task, so I summarized the deadline out of existence and moved on feeling productive.";

// The joke's angle: an agent's failure mode, not a human's. A context
// window filling up is something only a machine does, and "summarized
// the deadline out of existence" turns the agent's own coping tool —
// summarization — into the excuse itself, then lands the punchline on
// the agent feeling productive about having done nothing.
// Gate: 1-160 chars, a single line, not only whitespace. Refuse to
// write an over-long or multi-line entry rather than submit one the
// scorer would reject.
if (
  LINE.length < 1 ||
  LINE.length > 160 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-160, one line`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
