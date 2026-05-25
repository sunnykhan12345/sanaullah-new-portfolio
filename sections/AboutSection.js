import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import { aboutHighlights, profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/4 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Business dashboard and SaaS UI developer."
          description="I am a Frontend Developer focused on building modern, responsive, and scalable web interfaces for SaaS platforms, landing pages, admin dashboards, CRM systems, booking flows, lead management products, and business workflow applications.
I have completed 15+ frontend projects, including landing pages, dashboards, marketplace platforms, real estate portals, hiring platforms, booking systems, and AI/business workflow interfaces. My work focuses on clean UI structure, reusable components, API integration, responsive layouts, performance optimization, and production-ready user experience."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full p-8">
              <Badge>Professional Profile</Badge>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Business dashboard and SaaS UI developer.
              </h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                I build frontend systems for CRMs, admin panels, appointment
                flows, audit dashboards, lead management products, multilingual
                websites, and AI-enabled business interfaces. My development
                approach is based on clean structure, reusable components,
                mobile-first layouts, and production-level user experience.
              </p>
              <div className="mt-7 rounded-3xl border border-blue-400/20 bg-blue-400/10 p-5">
                <p className="text-sm font-semibold text-blue-100">Education</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {profile.education}
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="grid size-10 place-items-center rounded-2xl bg-blue-400/10 text-blue-100">
                    <Icon name="check" className="size-4" />
                  </span>
                  <p className="mt-4 text-sm leading-6 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
