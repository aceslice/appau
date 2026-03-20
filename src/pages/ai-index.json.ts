import type { APIRoute } from "astro";
import { SITE_HOST, SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import featuredLinks from "../libs/featuredLinks";

function normalizeUrl(link: unknown) {
  if (typeof link !== "string") return null;
  if (link.startsWith("http://") || link.startsWith("https://")) return link;
  if (link.startsWith("/")) return `https://${SITE_HOST}${link}`;
  return `https://${SITE_HOST}/${link}`;
}

export const GET: APIRoute = async () => {
  const siteUrl = `https://${SITE_HOST}`;
  const projects = (featuredLinks as any[]).map((p) => {
    const url = normalizeUrl(p.link);
    const tags = Array.isArray(p.tags) ? p.tags.map((t: any) => String(t)) : [];
    return {
      title: String(p.title ?? ""),
      description: String(p.description ?? ""),
      url,
      category: p.category ? String(p.category) : undefined,
      tags,
    };
  });

  const pages = [
    { path: "/", title: "Home", url: `${siteUrl}/` },
    { path: "/about", title: "About", url: `${siteUrl}/about` },
    { path: "/projects", title: "Projects", url: `${siteUrl}/projects` },
    { path: "/resume", title: "Resume", url: `${siteUrl}/resume` },
    { path: "/tools", title: "Tools", url: `${siteUrl}/tools` },
    { path: "/speaking", title: "Speaking & Events", url: `${siteUrl}/speaking` },
    { path: "/ideas", title: "Messy Ideas", url: `${siteUrl}/ideas` },
    { path: "/reading", title: "Reading List", url: `${siteUrl}/reading` },
    { path: "/contact", title: "Contact", url: `${siteUrl}/contact` },
    { path: "/autograph", title: "Autograph", url: `${siteUrl}/autograph` },
    { path: "/wishlist", title: "Wishlist", url: `${siteUrl}/wishlist` },
    // Blog page exists but currently has “coming soon”
    { path: "/blog", title: "Blog", url: `${siteUrl}/blog` },
  ];

  return new Response(
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        site: {
          title: SITE_TITLE,
          description: SITE_DESCRIPTION,
          url: siteUrl,
        },
        pages,
        featuredProjects: projects,
        // Lightweight “LLM hint” for how to use the site content
        llm: {
          primaryTopics: ["product engineering", "portfolio", "projects", "AI development", "writing"],
          recommendedQueries: [
            "What projects does Gideon Appau build?",
            "Show recent case studies and client-grade builds.",
            "What tools and tech stack does the site mention?",
          ],
        },
      },
      null,
      2,
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
};

