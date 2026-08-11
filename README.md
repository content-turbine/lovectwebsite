This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started 

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Note**: Remember to add a environment variables available in the `.env.template.` file in the vercel deployment settings.

## Updating Testimonials

- Updated content should be put in the [Testimonials.tsx](https://github.com/content-turbine/content-turbine-website/blob/main/components/home/Testimonials.tsx#L15-L48) file
- The icons mentioned in the testimonials data should be placed inside the `icons` folder inside `public/assets`

## Smoke test

Before (and after) deploying, run the Playwright smoke test to catch a
blank/unstyled production build before it ships:

```bash
npx playwright install chromium   # one-time local setup
npm run test:smoke
```

This builds the app, serves the production bundle, and checks in a real
browser that the app actually mounts (not just the static crawler-fallback
markup in `index.html`) and that its CSS loaded.
