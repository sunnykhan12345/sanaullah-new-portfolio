export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pakdev-portfolio.vercel.app/sitemap.xml",
  };
}
