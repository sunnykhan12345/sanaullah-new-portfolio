import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.32)]",
        secondary:
          "border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/[0.1]",
        ghost:
          "text-muted-foreground hover:bg-white/[0.06] hover:text-white",
        outline:
          "border border-blue-400/30 bg-blue-400/10 text-blue-100 hover:-translate-y-0.5 hover:bg-blue-400/15",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "min-h-[52px] px-6 py-4 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
