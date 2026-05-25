import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { services } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Frontend services for premium business platforms and SaaS products."
          description="Clean implementation, dashboard logic, responsive layouts, integration-ready screens, and professional product UI."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="group h-full rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.075]">
                <span className="grid size-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-100 transition group-hover:scale-105">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
