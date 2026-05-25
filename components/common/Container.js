import { cn } from "@/lib/utils";

export default function Container({ className, ...props }) {
  return <div className={cn("container relative z-10", className)} {...props} />;
}
