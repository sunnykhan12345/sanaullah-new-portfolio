"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/common/Icon";

export default function ProjectCard({ project, index = 0 }) {
  const primaryCategory = project.categories?.[0] || "Project";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] shadow-premium backdrop-blur-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center p-2 transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <Badge className="absolute left-4 top-4 border-white/10 bg-black/45 text-white backdrop-blur-xl">
          {primaryCategory}
        </Badge>

        {project.status && (
          <Badge className="absolute right-4 top-4 border-white/10 bg-white/15 text-white backdrop-blur-xl">
            {project.status}
          </Badge>
        )}
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {project.features?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 5).map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="sm" className="w-full sm:w-auto">
            <a href={project.caseStudyUrl || "#contact"}>
              View Case Study <Icon name="external" className="size-4" />
            </a>
          </Button>

          {project.liveUrl ? (
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live demo for ${project.title}`}
              >
                Live Demo <Icon name="external" className="size-4" />
              </a>
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="w-full cursor-default sm:w-auto"
            >
              {project.status || "Private Project"}
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
