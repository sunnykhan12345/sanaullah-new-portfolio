import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import { contactItems, profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-white/[0.015]"
    >
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-blue-500/10 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="clean and scalable frontend for business applications."
          description="Available for dashboards, SaaS products, CRM systems, AI interfaces, multilingual websites, and professional frontend development work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/[0.06] to-white/[0.03] p-8 shadow-premium backdrop-blur-xl">
              <Badge>Open for work</Badge>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                Frontend developer for serious product teams.
              </h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                I am ready to work with businesses, agencies, founders, and SaaS
                teams that need clean, responsive, fast, and professional
                frontend implementation.
              </p>

              <div className="mt-8 space-y-4 rounded-[26px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {profile.availability}
                  </span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {profile.location}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={`mailto:${profile.email}`}>
                    Email Me <Icon name="mail" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp <Icon name="whatsapp" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-[26px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.075]"
                >
                  <span className="grid size-11 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-100 transition group-hover:scale-105">
                    <Icon name={item.icon} />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-medium leading-6 text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
