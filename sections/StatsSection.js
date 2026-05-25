import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { stats } from "@/data/portfolio";

export default function StatsSection() {
  return (
    <section className="relative -mt-16 pb-12 sm:pb-16">
      <Container>
        <Reveal className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.06] p-4 shadow-premium backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:-translate-y-1 hover:bg-white/[0.055]">
              <div className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
