import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover transition-all duration-500 hover:shadow-luxury hover:scale-[1.02] hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline: "border border-input bg-background/80 backdrop-blur-sm hover:bg-card hover:text-card-foreground transition-all duration-500 hover:shadow-card hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-500 hover:shadow-card hover:-translate-y-0.5",
        ghost: "hover:bg-muted hover:text-foreground transition-all duration-500 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        luxury: "bg-gradient-primary text-primary-foreground shadow-card hover:shadow-dramatic transition-all duration-600 hover:scale-[1.02] hover:-translate-y-1 tracking-wide",
        copper: "bg-gradient-copper text-accent-foreground shadow-card hover:shadow-accent transition-all duration-600 hover:scale-[1.02] hover:-translate-y-1 tracking-wide",
        dramatic: "bg-gradient-dramatic text-primary-foreground shadow-dramatic hover:shadow-luxury transition-all duration-700 hover:scale-[1.03] hover:-translate-y-1 tracking-wide",
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
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
