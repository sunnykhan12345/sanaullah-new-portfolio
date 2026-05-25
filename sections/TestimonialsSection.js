import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { testimonials } from "@/data/portfolio";

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Client feedback focused on usability, premium UI, and reliable delivery."
          description="Modern testimonial cards designed for a professional developer portfolio and Gulf-market business positioning."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <article className="h-full rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30">
                <div className="flex items-center gap-4">
                  <div className="relative size-14 overflow-hidden rounded-2xl border border-white/10 bg-blue-400/10">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} avatar`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-blue-100">{testimonial.company}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">“{testimonial.feedback}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
