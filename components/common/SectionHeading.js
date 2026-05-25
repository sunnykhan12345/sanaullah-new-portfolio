import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "left" ? "mx-0 text-left" : "text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
