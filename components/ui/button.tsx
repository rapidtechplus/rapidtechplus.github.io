import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants map to the design-system pill classes in globals.css,
 * keeping the premium look while exposing a standard shadcn/ui-style API
 * (cva variants + Slot/asChild composition).
 */
export const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      ghost: "btn-ghost",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, className }))} {...props} />
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
  children: React.ReactNode;
};

/**
 * Link styled as a button. Internal routes use next/link; external links
 * (mailto:, tel:, http) fall back to a plain anchor so static export works.
 */
export function ButtonLink({
  href,
  variant,
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, className }));
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
