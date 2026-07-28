/**
 * Single source of truth for the product name shown on this page, so
 * renaming later is a one-line change instead of a find/replace across
 * every component. "Citable" is a placeholder pending final naming --
 * see docs note in the PR description.
 */
export const PRODUCT_NAME = "Citable";

/**
 * Backend base URL for the free-audit widget (POST /v1/quick-audit).
 * Set VITE_CITABLE_API_URL in .env once the backend is deployed (see the
 * answergraph-lite repo's README "Hosting" section). Falls back to
 * localhost for local dev against `npm run dev:api` in that repo.
 */
export const CITABLE_API_URL: string =
  (import.meta.env.VITE_CITABLE_API_URL as string | undefined) ?? "http://localhost:3000";

/**
 * LaunchList (free-tier waitlist with referral tracking) form key.
 * Create a free account at https://getlaunchlist.com, create a list, and
 * copy the "Form Key" from Settings -> Integrations -> HTML/Embed.
 * See WAITLIST_SETUP.md for the full walkthrough.
 */
export const LAUNCHLIST_FORM_KEY = "YOUR_LAUNCHLIST_FORM_KEY";
