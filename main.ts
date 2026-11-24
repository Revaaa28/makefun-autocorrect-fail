// Funniest Autocorrect Fail — make.fun entry
// Writes the chosen one-line autocorrect fail to /output/entry.txt.
// Deterministic: no input, no network, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Hey, can you pick up some condoms for dinner tonight? We're out.";

// Enforce the competition's published gate before writing: UTF-8 text of
// 1 to 199 characters, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 199 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
