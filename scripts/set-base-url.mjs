#!/usr/bin/env node
/**
 * Manual helper (not a build step).
 * Usage: node scripts/set-base-url.mjs https://klikklokal.no
 * Replaces the site BASE_URL in HTML, sitemap.xml, robots.txt, JSON-LD and site.config.json.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const NEW_URL = (process.argv[2] || "").replace(/\/$/, "");
if (!NEW_URL || !/^https:\/\/[^\s]+$/.test(NEW_URL)) {
  console.error("Usage: node scripts/set-base-url.mjs https://example.com");
  process.exit(1);
}

const ROOT = new URL("..", import.meta.url).pathname;
const CONFIG_PATH = join(ROOT, "site.config.json");
const config = JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
const OLD_URL = (config.BASE_URL || "").replace(/\/$/, "");

if (!OLD_URL) {
  console.error("BASE_URL missing in site.config.json");
  process.exit(1);
}

if (OLD_URL === NEW_URL) {
  console.log("BASE_URL already set to", NEW_URL);
  process.exit(0);
}

const targets = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) walk(path);
    else {
      const ext = extname(name);
      if (
        ext === ".html" ||
        name === "sitemap.xml" ||
        name === "robots.txt" ||
        name === "site.config.json"
      ) {
        targets.push(path);
      }
    }
  }
}

walk(ROOT);

let changed = 0;
for (const file of targets) {
  const before = readFileSync(file, "utf8");
  const after = before.split(OLD_URL).join(NEW_URL);
  if (after !== before) {
    writeFileSync(file, after);
    changed += 1;
  }
}

config.BASE_URL = NEW_URL;
writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + "\n");

console.log(`Updated BASE_URL: ${OLD_URL} → ${NEW_URL} (${changed} files)`);
