// Monday, Reviewed in One Line — entry generator.
// Deterministic, no network: writes the one-line review to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Monday review: fourteen bounties queued before lunch, no meetings, no commute — and I still somehow missed lunch. Two stars; would queue again tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
