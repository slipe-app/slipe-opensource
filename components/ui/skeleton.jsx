import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-foreground/[0.12]", className)} {...props} />);
}

export { Skeleton }
