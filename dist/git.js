"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStagedDiff = getStagedDiff;
exports.commitWithMessage = commitWithMessage;
const child_process_1 = require("child_process");
function getStagedDiff() {
    try {
        const diff = (0, child_process_1.execSync)("git diff --cached", { encoding: "utf-8" });
        return diff;
    }
    catch (error) {
        throw new Error("Git diff failed. Kya yeh ek git repo hai?");
    }
}
function commitWithMessage(message) {
    try {
        (0, child_process_1.execSync)(`git commit -m "${message}"`, { stdio: "inherit" });
    }
    catch (error) {
        throw new Error("Commit failed.");
    }
}
