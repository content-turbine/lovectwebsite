import { defineTool } from "@lovable.dev/mcp-js";
import { overview, SITE_URL } from "../content";

export default defineTool({
  name: "get_company_overview",
  title: "Get company overview",
  description:
    "Get an overview of Content Turbine: what the agency does, how it positions itself, and its four-stage engagement process.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify({ ...overview, website: SITE_URL }, null, 2) }],
    structuredContent: { overview },
  }),
});