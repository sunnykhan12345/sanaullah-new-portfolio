import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Modern frontend stack for enterprise-grade product interfaces."
          description="A focused skill set for building responsive, accessible, API-connected, animated, and production-ready web applications."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="group h-full rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sm font-bold text-blue-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition group-hover:bg-black/30">
                      <div className="mb-3 size-8 rounded-xl border border-blue-400/20 bg-blue-400/10" />
                     
                      <p className="text-sm font-medium text-white">{skill}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
