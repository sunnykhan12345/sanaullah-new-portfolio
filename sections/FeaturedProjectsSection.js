"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";
import FilterTabs from "@/components/common/FilterTabs";
import { projectFilters, projects } from "@/data/portfolio";

export default function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-20 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Premium project cards for dashboards, SaaS systems, AI workflows, and websites."
          description="Project examples are structured to show business value, UI quality, technology stack, and production-level frontend patterns."
        />

        <FilterTabs filters={projectFilters} activeFilter={activeFilter} onChange={setActiveFilter} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
