import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import { experiences } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <section className="section-padding relative bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Frontend timeline shaped by dashboards, optimization, and product delivery."
          description="A practical timeline covering dashboard systems, bug fixing, localization, frontend responsibilities, and education."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400/70 via-white/10 to-transparent sm:block" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <Reveal key={`${item.title}-${item.period}`} delay={index * 0.06}>
                <article className="relative rounded-[28px] border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur-xl sm:ml-16 sm:p-7">
                  <span className="absolute -left-[59px] top-8 hidden size-10 place-items-center rounded-full border border-blue-400/30 bg-[#05070D] text-blue-100 shadow-glow sm:grid">
                    {index + 1}
                  </span>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <Badge>{item.period}</Badge>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium text-blue-100">{item.company}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-200">
                        <Icon name="check" className="size-3 text-blue-200" />
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
