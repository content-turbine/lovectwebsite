import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.contentturbine.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

// Organization/WebSite/ProfessionalService are defined once, statically, in
// index.html's <head> -- present on every page load (before AND after React
// hydrates, since hydration only replaces #root). Pages reference them by
// @id instead of redefining them here to avoid duplicate/conflicting nodes.
export default function Seo({ title, description, path, type = "website", jsonLd }: SeoProps) {
  const url = `${BASE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const imageUrl = `${BASE_URL}/social.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Content Turbine" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schemas.map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}