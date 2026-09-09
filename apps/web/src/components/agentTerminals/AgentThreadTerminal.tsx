import { scopedThreadKey } from "@t3tools/client-runtime/environment";
import type { ScopedThreadRef } from "@t3tools/contracts";
import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/models";
import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRightIcon, CircleCheckIcon, CircleXIcon, LoaderCircleIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { t } from "~/i18n/t";
import { deriveWorkLogEntries } from "~/session-logic";
import { useThreadDetail } from "~/state/entities";
import { useKnownTerminalSessions } from "~/state/terminalSessions";
import { buildThreadRouteParams } from "~/threadRoutes";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  selectAgentCommandEntries,
  threadIsWorking,
  type AgentCommandEntry,
  type AgentCommandStatus,
} from "./agentTerminals.logic";

const EMPTY_ACTIVITIES: ReadonlyArray<never> = [];

function StatusIcon({ status }: { status: AgentCommandStatus }) {
  if (status === "running") {
    return <LoaderCircleIcon className="size-3.5 animate-spin text-sky-400" aria-hidden />;
  }
  if (status === "failed") {
    return <CircleXIcon className="size-3.5 text-red-400" aria-hidden />;
  }
  return <CircleCheckIcon className="size-3.5 text-muted-foreground/60" aria-hidden />;
}

function statusLabel(status: AgentCommandStatus): string {
  switch (status) {
    case "running":
      return t("Running");
    case "failed":
      return t("Failed");
    case "completed":
      return t("Completed");
  }
}

function CommandBlock({ entry }: { entry: AgentCommandEntry }) {
  return (
    <div className="border-b border-border/40 py-2 last:border-b-0">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0" role="img" aria-label={statusLabel(entry.status)}>
          <StatusIcon status={entry.status} />
        </span>
        <pre className="min-w-0 flex-1 whitespace-pre-wrap break-words font-mono text-[12.5px] leading-relaxed text-foreground">
          <span className="select-none text-emerald-400">$ </span>
          {entry.command}
        </pre>
      </div>
      {entry.output ? (
        <pre className="mt-1 max-h-[24rem] overflow-auto whitespace-pre-wrap break-words pl-6 font-mono text-[12px] leading-relaxed text-muted-foreground">
          {entry.output}
        </pre>
      ) : entry.status === "running" ? (
        <p className="pl-6 font-mono text-[12px] text-muted-foreground/60">
          {t("Waiting for output…")}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Terminal-style feed of the commands an agent ran in one thread, streamed
 * from the thread's activities. Subscribes to the thread while mounted, so the
 * hub only pays for the threads it shows.
 */
export function AgentThreadTerminal({
  threadRef,
  shell,
  projectTitle,
  environmentLabel,
}: {
  readonly threadRef: ScopedThreadRef;
  readonly shell: EnvironmentThreadShell;
  readonly projectTitle: string;
  readonly environmentLabel: string | null;
}) {
  const navigate = useNavigate();
  const thread = useThreadDetail(threadRef);
  const activities = thread?.activities ?? EMPTY_ACTIVITIES;
  const working = threadIsWorking(shell);
  const entries = useMemo(
    () => selectAgentCommandEntries(deriveWorkLogEntries(activities), working),
    [activities, working],
  );
  const terminals = useKnownTerminalSessions({
    environmentId: threadRef.environmentId,
    threadId: threadRef.threadId,
  });
  const runningShells = terminals.filter((session) => session.state.hasRunningSubprocess);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [follow, setFollow] = useState(true);
  // Keep the newest command in view while following; re-runs as output streams in.
  useEffect(() => {
    if (!follow || entries.length === 0) return;
    const element = scrollRef.current;
    if (element) element.scrollTop = element.scrollHeight;
  }, [entries, follow]);

  const openThread = () => {
    void navigate({
      to: "/$environmentId/$threadId",
      params: buildThreadRouteParams(threadRef),
    });
  };

  return (
    <section
      className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40"
      aria-label={shell.title}
      data-thread-key={scopedThreadKey(threadRef)}
    >
      <header className="flex items-center gap-3 border-b border-border/60 px-3 py-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm">
            {working ? (
              <LoaderCircleIcon
                className="size-3.5 shrink-0 animate-spin text-sky-400"
                aria-hidden
              />
            ) : null}
            <span className="truncate font-medium">{shell.title}</span>
          </div>
          <div className="truncate text-xs text-muted-foreground">
            {projectTitle}
            {shell.branch ? ` · ${shell.branch}` : ""}
            {environmentLabel ? ` · ${environmentLabel}` : ""}
          </div>
        </div>
        {runningShells.length > 0 ? (
          <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs text-amber-300">
            {t("{count} shell(s) running", { count: runningShells.length })}
          </span>
        ) : null}
        <Button
          size="xs"
          variant={follow ? "secondary" : "ghost"}
          onClick={() => setFollow((value) => !value)}
          aria-pressed={follow}
        >
          {t("Follow")}
        </Button>
        <Button size="xs" variant="outline" onClick={openThread}>
          {t("Open thread")}
          <ArrowUpRightIcon className="size-3.5" />
        </Button>
      </header>
      <div
        ref={scrollRef}
        className={cn(
          "min-h-0 flex-1 overflow-auto px-3",
          entries.length === 0 && "flex items-center",
        )}
        onScroll={(event) => {
          const element = event.currentTarget;
          const atBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 24;
          if (atBottom !== follow) setFollow(atBottom);
        }}
      >
        {thread === null ? (
          <p className="w-full py-6 text-center text-sm text-muted-foreground">{t("Loading…")}</p>
        ) : entries.length === 0 ? (
          <p className="w-full py-6 text-center text-sm text-muted-foreground">
            {t("This agent has not run any commands yet.")}
          </p>
        ) : (
          entries.map((entry) => <CommandBlock key={entry.id} entry={entry} />)
        )}
      </div>
    </section>
  );
}
