"use client";

import { cn } from "@/lib/utils";

export default function FilterTabs({ filters, activeFilter, onChange }) {
  return (
    <div className="mx-auto mb-10 flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.045] p-2 backdrop-blur-xl">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition duration-300 hover:bg-white/[0.075] hover:text-white",
            activeFilter === filter && "bg-primary text-white shadow-glow",
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
