import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { resources } from "../content";

export default defineTool({
  name: "list_resources",
  title: "List free resources",
  description:
    "List Content Turbine's free downloadable resources (frameworks, checklists, playbooks). Optionally fetch a single resource by slug.",
  inputSchema: {
    slug: z
      .string()
      .optional()
      .describe("Optional resource slug, e.g. 'ai-content-framework'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const wanted = slug?.trim().toLowerCase();
    const items = wanted ? resources.filter((r) => r.slug === wanted) : resources;
    if (wanted && items.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: `No resource with slug "${slug}". Available slugs: ${resources.map((r) => r.slug).join(", ")}`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { resources: items, count: items.length },
    };
  },
});