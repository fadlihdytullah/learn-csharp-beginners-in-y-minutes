import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-default disabled:opacity-55 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-border-strong bg-linear-to-b from-surface-2 to-surface text-fg shadow-[inset_0_1px_0_var(--highlight)] hover:border-fg-subtle",
        solid: "border-transparent bg-fg text-bg hover:opacity-90",
        outline: "border-border-strong bg-transparent text-fg hover:border-fg-subtle",
        ghost: "border-transparent bg-transparent text-fg-muted hover:border-border-strong hover:text-fg",
        link: "h-auto border-0 bg-transparent px-0 text-fg underline decoration-fg-subtle underline-offset-3 hover:decoration-fg",
      },
      size: {
        default: "h-9 px-3.5",
        sm: "h-8 px-3 text-[13px]",
        xs: "h-7 gap-1 rounded-md px-2 text-xs",
        icon: "size-8",
        "icon-sm": "size-7 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
