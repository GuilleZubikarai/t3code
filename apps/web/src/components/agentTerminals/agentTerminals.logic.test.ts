import { describe, expect, it } from "vite-plus/test";

import type { WorkLogEntry } from "~/session-logic";
import { selectAgentCommandEntries } from "./agentTerminals.logic";

function entry(overrides: Partial<WorkLogEntry> & { id: string }): WorkLogEntry {
  return {
    createdAt: "2026-09-09T00:00:00.000Z",
    label: "Ran command",
    tone: "tool",
    ...overrides,
  };
}

describe("selectAgentCommandEntries", () => {
  it("keeps only command executions and drops non-command tool rows", () => {
    const entries = [
      entry({ id: "1", command: "pnpm test", itemType: "command_execution" }),
      entry({ id: "2", label: "Read file", itemType: "file_change" }),
      entry({ id: "3", tone: "thinking", label: "Thinking" }),
    ];
    expect(selectAgentCommandEntries(entries, false).map((e) => e.id)).toEqual(["1"]);
  });

  it("marks the last command as running only while the thread is working", () => {
    const entries = [
      entry({ id: "1", command: "git status", toolLifecycleStatus: "completed", detail: "clean" }),
      entry({ id: "2", command: "pnpm build", toolLifecycleStatus: "inProgress" }),
    ];
    expect(selectAgentCommandEntries(entries, true).map((e) => e.status)).toEqual([
      "completed",
      "running",
    ]);
    expect(selectAgentCommandEntries(entries, false).map((e) => e.status)).toEqual([
      "completed",
      "completed",
    ]);
  });

  it("reports failures and separates output from the command text", () => {
    const entries = [
      entry({
        id: "1",
        command: "pnpm test",
        itemType: "command_execution",
        toolLifecycleStatus: "failed",
        detail: "1 test failed",
      }),
    ];
    const [result] = selectAgentCommandEntries(entries, false);
    expect(result?.status).toBe("failed");
    expect(result?.output).toBe("1 test failed");
    expect(result?.command).toBe("pnpm test");
  });
});
