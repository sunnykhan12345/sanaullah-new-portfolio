import { navLinks, profile } from "@/data/portfolio";
import { Icon } from "@/components/common/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070D] py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-sm font-bold text-blue-100">
              PD
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{profile.name}</span>
              <span className="block text-xs text-muted-foreground">Frontend Developer</span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Premium frontend portfolio for dashboards, SaaS products, CRM systems, multilingual websites, and responsive business platforms.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="text-sm text-muted-foreground transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-muted-foreground transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white"
              >
                <Icon name={social.icon} className="size-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
