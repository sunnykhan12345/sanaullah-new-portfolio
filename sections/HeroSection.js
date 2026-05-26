"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/common/Icon";
import { profile } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:64px_64px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <motion.div
        className="absolute left-[8%] top-[18%] size-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[14%] right-[4%] size-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <Badge className="border-blue-400/30 bg-blue-400/10 text-blue-100">
                {profile.role}
                {/* - Gulf-market business UI specialist */}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.075em] text-white sm:text-6xl"
            >
              Frontend Developer for SaaS Dashboards, Landing Pages & Business
              Web Apps
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <Icon name="arrow" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={profile.cvUrl} download>
                  Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Connect:</span>
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white"
                >
                  <Icon
                    name={social.icon}
                    className="size-4 transition group-hover:text-blue-200"
                  />
                  {social.name}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="absolute -inset-8 rounded-[42px] bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.065] p-4 shadow-premium backdrop-blur-2xl">
              <div className="rounded-[26px] border border-white/10 bg-[#080B13] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="size-3 rounded-full bg-red-400/80" />
                    <span className="size-3 rounded-full bg-yellow-400/80" />
                    <span className="size-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-100">
                    Dashboard UI
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
                  <div className="space-y-4">
                    {[
                      ["CRM", "Active", "72%"],
                      ["AI Audit", "Live", "88%"],
                      ["Bookings", "Ready", "96%"],
                    ].map(([name, status, width]) => (
                      <div
                        key={name}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-white">{name}</span>
                          <span className="text-xs text-blue-200">
                            {status}
                          </span>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Enterprise Frontend
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                          SaaS Control Center
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                        Live
                      </span>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {["UI", "API", "i18n"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center"
                        >
                          <div className="mx-auto mb-2 size-8 rounded-xl bg-blue-400/10" />
                          <p className="text-xs text-muted-foreground">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 space-y-3">
                      {[
                        "Responsive data tables",
                        "Role-based navigation",
                        "Fast loading states",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                        >
                          <span className="grid size-6 place-items-center rounded-full bg-blue-400/10 text-blue-200">
                            <Icon name="check" className="size-3" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
