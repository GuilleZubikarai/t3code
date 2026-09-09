import { scopeThreadRef, scopedThreadKey } from "@t3tools/client-runtime/environment";
import { TerminalSquareIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { t } from "~/i18n/t";
import { isElectron } from "~/env";
import { cn } from "~/lib/utils";
import { useProjects, useThreadShells } from "~/state/entities";
import { useEnvironments } from "~/state/environments";
import { SidebarInset } from "../ui/sidebar";
import { WorkspaceBreadcrumb, WorkspaceBreadcrumbItem } from "../WorkspaceBreadcrumb";
import { WorkspacePageHeader } from "../WorkspacePageHeader";
import { AgentThreadTerminal } from "./AgentThreadTerminal";
import { selectAgentTerminalThreads, threadIsWorking } from "./agentTerminals.logic";

/** How many working threads stream at once in the "all" view. */
const MAX_LIVE_FEEDS = 6;

export function AgentTerminalsPage() {
  const shells = useThreadShells();
  const projects = useProjects();
  const { environments } = useEnvironments();
  const [selectedKey, setSelectedKey] = useState<string>("all");

  const threads = useMemo(() => selectAgentTerminalThreads(shells), [shells]);
  const workingThreads = useMemo(() => threads.filter(threadIsWorking), [threads]);
  const projectTitleByKey = useMemo(
    () =>
      new Map(projects.map((project) => [`${project.environmentId}:${project.id}`, project.title])),
    [projects],
  );
  const environmentLabelById = useMemo(
    () =>
      new Map(environments.map((environment) => [environment.environmentId, environment.label])),
    [environments],
  );
  const multipleEnvironments = environments.length > 1;

  const selected = threads.find(
    (shell) => scopedThreadKey(scopeThreadRef(shell.environmentId, shell.id)) === selectedKey,
  );
  const visible = selected ? [selected] : workingThreads.slice(0, MAX_LIVE_FEEDS);

  return (
    <SidebarInset className="h-dvh min-h-0 overflow-hidden overscroll-y-none bg-background text-foreground isolate">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <WorkspacePageHeader electron={isElectron}>
          <WorkspaceBreadcrumb ariaLabel={t("Agent terminals")} className="min-w-0">
            <WorkspaceBreadcrumbItem current>
              <h1 className="flex items-center gap-2">
                <TerminalSquareIcon className="size-4" aria-hidden />
                {t("Agent terminals")}
              </h1>
            </WorkspaceBreadcrumbItem>
          </WorkspaceBreadcrumb>
          <span className="ml-auto text-xs text-muted-foreground">
            {t("{count} agent(s) working", { count: workingThreads.length })}
          </span>
        </WorkspacePageHeader>

        <div className="flex min-h-0 flex-1 gap-3 p-3">
          <nav
            aria-label={t("Threads")}
            className="flex w-64 shrink-0 flex-col overflow-auto rounded-xl border border-border/60 bg-card/40"
          >
            <button
              type="button"
              onClick={() => setSelectedKey("all")}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-left text-sm hover:bg-accent/40",
                selectedKey === "all" && "bg-accent/60",
              )}
            >
              <span>{t("All working agents")}</span>
              <span className="text-xs text-muted-foreground">{workingThreads.length}</span>
            </button>
            {threads.length === 0 ? (
              <p className="px-3 py-4 text-xs text-muted-foreground">
                {t("No threads with agent activity.")}
              </p>
            ) : (
              threads.map((shell) => {
                const key = scopedThreadKey(scopeThreadRef(shell.environmentId, shell.id));
                const working = threadIsWorking(shell);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedKey(key)}
                    className={cn(
                      "flex flex-col gap-0.5 border-t border-border/40 px-3 py-2 text-left hover:bg-accent/40",
                      selectedKey === key && "bg-accent/60",
                      !working && "opacity-70",
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full",
                          working ? "bg-sky-400" : "bg-muted-foreground/40",
                        )}
                        aria-hidden
                      />
                      <span className="truncate">{shell.title}</span>
                    </span>
                    <span className="truncate pl-3.5 text-xs text-muted-foreground">
                      {projectTitleByKey.get(`${shell.environmentId}:${shell.projectId}`) ??
                        t("Project")}
                      {multipleEnvironments
                        ? ` · ${environmentLabelById.get(shell.environmentId) ?? ""}`
                        : ""}
                    </span>
                  </button>
                );
              })
            )}
          </nav>

          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-auto">
            {visible.length === 0 ? (
              <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
                {t(
                  "No agent is running commands right now. Pick a thread on the left to see its history.",
                )}
              </div>
            ) : (
              visible.map((shell) => {
                const ref = scopeThreadRef(shell.environmentId, shell.id);
                return (
                  <AgentThreadTerminal
                    key={scopedThreadKey(ref)}
                    threadRef={ref}
                    shell={shell}
                    projectTitle={
                      projectTitleByKey.get(`${shell.environmentId}:${shell.projectId}`) ??
                      t("Project")
                    }
                    environmentLabel={
                      multipleEnvironments
                        ? (environmentLabelById.get(shell.environmentId) ?? null)
                        : null
                    }
                  />
                );
              })
            )}
            {!selected && workingThreads.length > MAX_LIVE_FEEDS ? (
              <p className="text-center text-xs text-muted-foreground">
                {t(
                  "Showing {shown} of {total} working agents. Pick one on the left to see the rest.",
                  {
                    shown: MAX_LIVE_FEEDS,
                    total: workingThreads.length,
                  },
                )}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
