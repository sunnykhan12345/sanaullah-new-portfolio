"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0.1, 0.2, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#05070D]/82 shadow-2xl backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="grid size-11 place-items-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-sm font-bold text-blue-100 shadow-glow">
            SU
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-[-0.03em] text-white">
              {profile.name}
            </span>
            <span className="block text-xs text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1.5 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition duration-300 hover:bg-white/[0.06] hover:text-white",
                activeId === link.id && "bg-white/[0.09] text-white shadow-sm",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="secondary" size="sm">
            <a href={profile.cvUrl} download>
              Download CV
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">
              Hire Me <Icon name="arrow" className="size-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#05070D]/95 px-4 py-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto grid max-w-xl gap-2 rounded-[24px] border border-white/10 bg-white/[0.045] p-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.06] hover:text-white",
                    activeId === link.id && "bg-blue-400/10 text-blue-100",
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="grid gap-2 p-2 sm:grid-cols-2">
                <Button asChild variant="secondary" className="w-full">
                  <a href={profile.cvUrl} download>
                    Download CV
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
