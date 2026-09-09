import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/models";
import { workEntryIndicatesToolFailure } from "@t3tools/client-runtime/work-log/presentation";

import type { WorkLogEntry } from "~/session-logic";

/** Threads whose agent is doing work right now, as the sidebar understands it. */
export function threadIsWorking(shell: EnvironmentThreadShell): boolean {
  return (
    shell.latestTurn?.state === "running" ||
    shell.backgroundLiveness === "working" ||
    shell.backgroundLiveness === "monitoring"
  );
}

/**
 * Threads worth showing in the agent terminal hub: working ones first, then
 * the most recently active unsettled threads, so a just-finished command is
 * still reachable after the agent goes idle.
 */
export function selectAgentTerminalThreads(
  shells: ReadonlyArray<EnvironmentThreadShell>,
  limit = 30,
): ReadonlyArray<EnvironmentThreadShell> {
  return shells
    .filter((shell) => shell.archivedAt === null && shell.latestTurn !== null)
    .toSorted((left, right) => {
      const leftWorking = threadIsWorking(left) ? 1 : 0;
      const rightWorking = threadIsWorking(right) ? 1 : 0;
      if (leftWorking !== rightWorking) return rightWorking - leftWorking;
      return right.updatedAt.localeCompare(left.updatedAt);
    })
    .slice(0, limit);
}

export type AgentCommandStatus = "running" | "completed" | "failed";

export interface AgentCommandEntry {
  readonly id: string;
  readonly createdAt: string;
  readonly command: string;
  readonly output: string | null;
  readonly status: AgentCommandStatus;
}

function isCommandEntry(entry: WorkLogEntry): boolean {
  return (
    entry.tone === "tool" &&
    (entry.itemType === "command_execution" || entry.requestKind === "command" || !!entry.command)
  );
}

/**
 * The command executions an agent ran, in order, with the output the provider
 * reported so far. `threadWorking` decides whether a command without a final
 * status is still running or was cut short.
 */
export function selectAgentCommandEntries(
  entries: ReadonlyArray<WorkLogEntry>,
  threadWorking: boolean,
): ReadonlyArray<AgentCommandEntry> {
  const commands = entries.filter(isCommandEntry);
  return commands.map((entry, index) => {
    const command = entry.rawCommand ?? entry.command ?? entry.label;
    const output = entry.detail && entry.detail !== command ? entry.detail : null;
    const lifecycle = entry.toolLifecycleStatus;
    let status: AgentCommandStatus;
    if (workEntryIndicatesToolFailure(entry)) {
      status = "failed";
    } else if (lifecycle === "inProgress") {
      status = index === commands.length - 1 && threadWorking ? "running" : "completed";
    } else if (lifecycle === undefined && output === null && index === commands.length - 1) {
      status = threadWorking ? "running" : "completed";
    } else if (lifecycle === "declined" || lifecycle === "stopped") {
      status = "failed";
    } else {
      status = "completed";
    }
    return { id: entry.id, createdAt: entry.createdAt, command, output, status };
  });
}
