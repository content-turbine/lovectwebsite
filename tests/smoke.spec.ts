import { test, expect } from "@playwright/test";

// Matches theme.tsx colors.primary ("#26474E"), rendered on Navbar's <nav id="navbar">.
const THEME_PRIMARY_RGB = "rgb(38, 71, 78)";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/survey-driven-whitepapers",
  "/services/ai-content-review",
  "/contact",
  "/citable",
  "/blog",
  "/blog/how-we-measure-ai-citation-share",
  "/blog/aeo-checklist-before-you-publish",
  "/blog/ghostwriting-doesnt-mean-impersonating-you",
  "/blog/what-refresh-it-actually-means",
  "/blog/three-places-ai-drafts-actually-lie",
];

for (const route of ROUTES) {
  test(`${route} mounts the app and loads styles`, async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on("pageerror", (error) => pageErrors.push(error));

    await page.goto(route);

    // The static crawler-fallback markup in index.html has no #navbar element,
    // so this only appears once React has actually mounted over it.
    const navbar = page.locator("#navbar");
    await expect(navbar).toBeVisible();

    // Confirms styled-components CSS actually injected, not just that some HTML rendered.
    await expect(navbar).toHaveCSS("background-color", THEME_PRIMARY_RGB);

    expect(pageErrors).toEqual([]);
  });
}
