// simple-shake 🫱🏻‍🫲🏿
// deno run --allow-read --allow-write simple-shake.ts

import { ensureDir, ensureFile } from "https://deno.land/std@0.197.0/fs/mod.ts";

const BASE_PATH = "./output";

async function processTreeFile(inputPath: string, outputPath: string) {
  const content = await Deno.readTextFile(inputPath);
  const lines = content.split("\n");
  const pathStack: string[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    const indentMatch = line.match(/^[\s│]*(?:[├└]──\s*)?/);
    const depth = indentMatch ? Math.floor(indentMatch[0].length / 4) : 0;

    pathStack.length = depth;

    const name = line.replace(/^[\s│]*[├└]──\s*/, "");
    const isFolder = name.endsWith("/");
    const cleanName = isFolder ? name.slice(0, -1) : name;

    const fullPath = [outputPath, ...pathStack, cleanName].join("/");

    if (isFolder) {
      await ensureDir(fullPath);
      pathStack.push(cleanName);
    } else {
      await ensureFile(fullPath);
    }
  }
}

await ensureDir(BASE_PATH);
await processTreeFile("data/tree1.txt", BASE_PATH);
