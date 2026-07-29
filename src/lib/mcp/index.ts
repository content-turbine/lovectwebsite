import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import listServices from "./tools/list-services";
import listResources from "./tools/list-resources";
import getContactInfo from "./tools/get-contact-info";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "content-turbine-mcp",
  title: "Content Turbine",
  version: "0.1.0",
  instructions:
    "Tools for Content Turbine, a content agency for developer-focused and technical B2B companies. Use `get_company_overview` for what the agency does and how it works, `list_services` for service offerings by stage, `list_resources` for free frameworks and checklists, and `get_contact_info` to find out how to get in touch or book a discovery call.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getCompanyOverview, listServices, listResources, getContactInfo],
});