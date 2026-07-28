# Waitlist setup (LaunchList, free tier)

The `/citable` page's waitlist section (`components/citable/Waitlist.tsx`)
is wired for [LaunchList](https://getlaunchlist.com) -- free pre-launch
waitlists with referral tracking built in, and a plain script+div embed
that needs no framework-specific SDK. The code is already in place; it
just needs your real form key.

## Steps

1. Sign up free at https://getlaunchlist.com
2. Create a new list/waitlist from the dashboard.
3. Go to **Settings -> Integrations -> HTML/Embed** and copy your **Form
   Key**.
4. Open `components/citable/config.ts` and replace:
   ```ts
   export const LAUNCHLIST_FORM_KEY = "YOUR_LAUNCHLIST_FORM_KEY";
   ```
   with your real key.
5. Rebuild/redeploy. The placeholder notice on the page disappears once a
   real key is set, and LaunchList's widget script (loaded automatically
   by `Waitlist.tsx`) renders the actual form in its place.

## Referral settings

Inside the LaunchList dashboard for your list, turn on referral tracking
so signups get a shareable link and move up the waitlist for each
successful referral. This is available on LaunchList's free tier (capped
at 100 signups -- upgrade only if you outgrow that).

## One thing to verify after a real key is in

LaunchList's script initialises the widget when it loads. On a normal
page load of `/citable` this just works. If a visitor navigates to
`/citable` via in-app client-side routing (React Router, no full page
reload) *after* the script has already loaded once elsewhere on the
site, double-check the form actually renders -- if not, the fix is
re-running LaunchList's init call on mount (check their docs for an
exposed re-init function) rather than only injecting the script tag once.

## Free-audit widget (separate from the waitlist)

The "free audit" section above the waitlist (`FreeAuditWidget.tsx`) is
unrelated to LaunchList -- it calls the AnswerGraph Lite backend directly
(`POST /v1/quick-audit`). Set `VITE_CITABLE_API_URL` in `.env` (see
`.env.example`) once that backend is deployed; see the answergraph-lite
repo's README "Hosting" section for cheap deployment options.
