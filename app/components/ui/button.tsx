import { type VariantProps, compose, cva, cx } from "configs/cva.config"
import { Slot } from "radix-ui"
import type { ComponentPropsWithRef } from "react"
import { focusButtonStyles } from "./primitives"

const buttonVariants = compose(
	focusButtonStyles,
	cva({
		base: "inline-flex cursor-pointer items-center justify-center gap-2 text-pretty rounded-sm ring-offset-background transition-all hover:scale-95 disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:size-5 [&>svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				error: "bg-error text-error-foreground hover:bg-error/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				warning: "bg-warning text-warning-foreground hover:bg-warning/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	})
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps
	extends ComponentPropsWithRef<"button">,
		ButtonVariants {
	asChild?: boolean
}

const Button = ({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps) => {
	const Comp = asChild ? Slot.Root : "button"
	return (
		<Comp
			{...props}
			className={cx(buttonVariants({ variant, size, className }))}
		/>
	)
}

export { Button, buttonVariants }
