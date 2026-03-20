import type { APIRoute } from "astro";
import { SITE_HOST } from "../consts";
import featuredLinks from "../libs/featuredLinks";

function routeFromKey(key: string) {
  // keys look like: "./about.astro" or "./projects/clink.astro"
  const normalized = key.replace(/^\.\//, "").replace(/\.astro$/, "");
  if (normalized === "index") return "/";
  return `/${normalized.replace(/\/index$/, "")}`;
}

function priorityForPath(path: string) {
  if (path === "/") return 1.0;
  if (path === "/projects") return 0.8;
  if (path.startsWith("/projects/")) return 0.7;
  if (path === "/about" || path === "/resume" || path === "/contact") return 0.6;
  return 0.5;
}

export const GET: APIRoute = async () => {
  const siteUrl = `https://${SITE_HOST}`;

  const files = import.meta.glob("./**/*.astro");
  const routes = new Set<string>();

  for (const key of Object.keys(files)) {
    if (!key.endsWith(".astro")) continue;
    if (key.includes("/api/")) continue;
    if (key.includes("404.astro")) continue;
    routes.add(routeFromKey(key));
  }

  // Ensure featured client/startup project pages are included.
  for (const it of featuredLinks as any[]) {
    if (typeof it?.link !== "string") continue;
    const link = it.link.startsWith("/") ? it.link : `/${it.link}`;
    routes.add(link);
  }

  const nowIso = new Date().toISOString();

  const urls = Array.from(routes)
    .sort()
    .map((path) => {
      const loc = `${siteUrl}${path}`;
      const priority = priorityForPath(path);
      return `    <url>
      <loc>${loc}</loc>
      <lastmod>${nowIso}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority.toFixed(1)}</priority>
    </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

