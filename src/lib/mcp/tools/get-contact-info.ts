import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Content Turbine's public contact channels and how to book a discovery call.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});