import { execSync } from "child_process";

export function getStagedDiff(): string {
  try {
    const diff = execSync("git diff --cached", { encoding: "utf-8" });
    return diff;
  } catch (error) {
    throw new Error("Git diff failed. Kya yeh ek git repo hai?");
  }
}

export function commitWithMessage(message: string): void {
  try {
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });
  } catch (error) {
    throw new Error("Commit failed.");
  }
}