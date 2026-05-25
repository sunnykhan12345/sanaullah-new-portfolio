import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudySection() {
  return (
    <section className="section-padding relative bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="How I solve business UI problems with structured frontend thinking."
          description="Each case study focuses on a real frontend responsibility: problem analysis, interface solution, responsive behavior, performance, dashboard logic, and localization."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.05}>
              <article className="h-full rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.035] p-6 shadow-premium backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <Badge>Case {String(index + 1).padStart(2, "0")}</Badge>
                  <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-100">Frontend Strategy</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{study.title}</h3>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.055] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-200">Business Problem</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-blue-400/10 bg-blue-400/[0.07] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">UI Solution</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.055] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Result</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.outcome}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
