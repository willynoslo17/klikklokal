#!/usr/bin/env node
// Generates the multilingual site: nb (root, source of truth) + en/ sv/ pl/.
// Spanish (es) is no longer generated. Edit the Norwegian HTML, then run:
//   node scripts/generate-all.mjs
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { rmSync, existsSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
if (existsSync(join(root, "es"))) rmSync(join(root, "es"), { recursive: true, force: true });
const r = spawnSync("python3", [join(here, "i18n.py")], { stdio: "inherit", cwd: root });
if (r.status !== 0) process.exit(r.status ?? 1);
console.log("All pages generated (nb/en/sv/pl).");
