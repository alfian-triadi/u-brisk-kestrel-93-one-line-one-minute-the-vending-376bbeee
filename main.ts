import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Minute: The Vending Machine Pickup Line Contest.
// The machine speaks in its own world: exact change, never ghosting,
// slot B4, and the coil that drops everything — a pickup line only a
// vending machine could deliver, with the punch ("I have a coil for
// that") landing at the very end. Charming, not creepy.
const line =
  "Hey, beautiful — I take exact change, I never ghost, and if you press B4 I'll drop everything for you. Literally. I have a coil for that.";

mkdirSync("/output", { recursive: true });
// Gate the brief's own limits before writing: one line, 1-200 chars.
// Failing loudly here beats shipping a line the judge would reject.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 chars, got ${line.length}`);
}
writeFileSync("/output/entry.txt", line, "utf8");
