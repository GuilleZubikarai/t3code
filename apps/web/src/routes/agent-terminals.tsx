import { createFileRoute } from "@tanstack/react-router";

import { AgentTerminalsPage } from "../components/agentTerminals/AgentTerminalsPage";

export const Route = createFileRoute("/agent-terminals")({
  component: AgentTerminalsPage,
});
