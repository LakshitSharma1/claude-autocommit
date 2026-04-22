#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = require("./git");
const ai_1 = require("./ai");
async function main() {
    console.log("🔍 Staged changes check kar raha hoon...");
    const diff = (0, git_1.getStagedDiff)();
    if (!diff) {
        console.log("❌ Koi staged changes nahi hain. Pehle: git add .");
        process.exit(1);
    }
    console.log("🤖 AI commit message bana raha hai...");
    const message = await (0, ai_1.generateCommitMessage)(diff);
    console.log(`\n✅ Generated Message:\n\n  ${message}\n`);
    (0, git_1.commitWithMessage)(message);
    console.log("🎉 Commit ho gaya!");
}
main().catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
});
