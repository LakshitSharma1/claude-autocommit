#!/usr/bin/env node
import { getStagedDiff, commitWithMessage } from "./git";
import { generateCommitMessage } from "./ai";

async function main() {
  console.log("🔍 Staged changes check kar raha hoon...");

  const diff = getStagedDiff();

  if (!diff) {
    console.log("❌ Koi staged changes nahi hain. Pehle: git add .");
    process.exit(1);
  }

  console.log("🤖 AI commit message bana raha hai...");
  const message = await generateCommitMessage(diff);

  console.log(`\n✅ Generated Message:\n\n  ${message}\n`);

  commitWithMessage(message);
  console.log("🎉 Commit ho gaya!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});