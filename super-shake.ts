// simple-shake 🫱🏻‍🫲🏿
// deno run --allow-read --allow-write super-shake.ts --input=./data/tree1.txt --output=./output

import { ensureDir, ensureFile } from "https://deno.land/std@0.197.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.197.0/flags/mod.ts";

async function processTreeFile(inputPath: string, outputPath: string) {
  const content = await Deno.readTextFile(inputPath);
  const lines = content.split("\n");
  const pathStack: string[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    // Calculate depth by leading spaces and symbols
    const indentMatch = line.match(/^[\s│]*(?:[├└]──\s*)?/);
    const depth = indentMatch ? Math.floor(indentMatch[0].length / 4) : 0;

    // Adjust pathStack to current depth
    pathStack.length = depth;

    // Clean name from tree symbols
    const name = line.replace(/^[\s│]*[├└]──\s*/, "");
    const isFolder = name.endsWith("/");
    const cleanName = isFolder ? name.slice(0, -1) : name;

    // Build full path using current context
    const fullPath = [outputPath, ...pathStack, cleanName].join("/");

    if (isFolder) {
      await ensureDir(fullPath);
      pathStack.push(cleanName);
    } else {
      await ensureFile(fullPath);
    }

    console.log(`Processing: ${fullPath}`);
  }
}

async function main() {
  const flags = parse(Deno.args, {
    string: ["input", "output"],
    default: {
      input: "data/tree.txt",
      output: "./output",
    },
  });

  const { input, output } = flags;

  await ensureDir(output);
  await processTreeFile(input, output);
  console.log(`Created directory structure from ${input} in ${output}`);
}

if (import.meta.main) {
  main();
}
