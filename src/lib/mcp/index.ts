import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import listServices from "./tools/list-services";
import listResources from "./tools/list-resources";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "content-turbine-mcp",
  title: "Content Turbine",
  version: "0.1.0",
  instructions:
    "Public tools for Content Turbine, a content agency for developer-focused and technical B2B companies. Use `get_company_overview` for what the agency does and how it works, `list_services` for service offerings by stage, `list_resources` for free frameworks and checklists, and `get_contact_info` to find out how to get in touch or book a discovery call.",
  tools: [getCompanyOverview, listServices, listResources, getContactInfo],
});