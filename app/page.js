import SiteShell from "@/components/layout/SiteShell";
import { profile } from "@/data/portfolio";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Frontend Developer",
    email: profile.email,
    alumniOf: "Agriculture University Peshawar",
    url: "https://pakdev-portfolio.vercel.app",
    sameAs: profile.socials.map((social) => social.href),
    knowsAbout: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Dashboard UI",
      "SaaS Applications",
      "CRM Systems",
      "Multilingual Websites",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteShell />
    </>
  );
}
