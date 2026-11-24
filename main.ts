// Dad Joke Showdown — entry program.
// Writes one dad joke (at most 200 characters) to /output/entry.txt.
// Runs on Node 22 with no dependencies and no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked what a pronoun is. I said, \"A professional who ran out of nouns.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
