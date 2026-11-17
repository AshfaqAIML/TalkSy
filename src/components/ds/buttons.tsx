"use client";

/**
 * Button extensions on the shadcn/ui base (src/components/ui/button.tsx).
 * Variants/colours come from tokens — never hardcode a hex here.
 */

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Props of the shadcn Button, extended with `loading`. */
type LoadingButtonProps = React.ComponentProps<typeof Button> & { loading?: boolean };

/**
 * Primary/secondary button with a pending state: shows a spinner, keeps
 * its label, sets aria-busy and blocks interaction while loading.
 */
export function LoadingButton({
  loading = false,
  disabled,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

/**
 * Icon-only button that is always labelled (aria-label) — the accessible
 * pattern for every square icon action in the app.
 */
export function IconButton({
  label,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { label: string }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className={cn("h-10 w-10", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
