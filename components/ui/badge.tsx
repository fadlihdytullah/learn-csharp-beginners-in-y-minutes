import { cn } from "cn"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-block rounded-full border border-border-strong bg-linear-to-b from-surface-2 to-surface px-2.5 py-0.5 text-[12px] font-medium text-fg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
