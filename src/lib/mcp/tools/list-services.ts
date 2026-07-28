import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List Content Turbine's service offerings. Optionally filter by engagement stage: Discovery, Strategy, Create, or Optimize.",
  inputSchema: {
    stage: z
      .string()
      .optional()
      .describe("Optional stage filter: Discovery, Strategy, Create, or Optimize."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ stage }) => {
    const wanted = stage?.trim().toLowerCase();
    const items = wanted ? services.filter((s) => s.stage.toLowerCase() === wanted) : services;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items, count: items.length },
    };
  },
});