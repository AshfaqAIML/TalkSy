"use client";

/**
 * Form controls: Field (label/hint/error wrapper), SearchInput (with
 * keyboard-hint affordance), FilterChips and SegmentedControl.
 *
 * All controls are wired for keyboard use and screen readers:
 * - Field links label ↔ control and description/error via aria.
 * - FilterChips use aria-pressed toggles inside a group.
 * - SegmentedControl is a radiogroup.
 */

import { useId } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Kbd } from "./primitives";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Field({
  label,
  hint,
  error,
  required,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (ids: { id: string; describedBy: string | undefined; invalid: boolean }) => React.ReactNode;
  className?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="text-body-sm font-medium text-ink-800">
        {label}
        {required && (
          <span className="ml-0.5 text-clay-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children({ id, describedBy, invalid: Boolean(error) })}
      {hint && !error && (
        <p id={hintId} className="text-caption text-ink-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-caption font-medium text-clay-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search…",
  shortcut,
  onClear,
  className,
  ...props
}: Omit<React.ComponentProps<"input">, "onChange"> & {
  onChange?: (value: string) => void;
  shortcut?: string[];
  onClear?: () => void;
}) {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
      <Input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-10 pl-9 pr-16"
        aria-label={placeholder}
        {...props}
      />
      {value ? (
        <button
          type="button"
          onClick={() => (onClear ? onClear() : onChange?.(""))}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-xs p-1 text-ink-400 transition-colors hover:text-ink-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : (
        shortcut && (
          <span className="absolute right-2.5 top-1/2 hidden -translate-y-1/2 items-center gap-1 sm:flex" aria-hidden="true">
            {shortcut.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </span>
        )
      )}
    </div>
  );
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export function FilterChips({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: FilterOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  label: string;
  className?: string;
}) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap items-center gap-2", className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active ? null : option.value)}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-body-sm font-medium transition-colors",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-line bg-card text-ink-600 hover:border-line-strong hover:text-ink-800"
            )}
          >
            {option.label}
            {typeof option.count === "number" && (
              <span className={cn("text-caption tabular-nums", active ? "text-primary-foreground/80" : "text-ink-500")}>
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function SegmentedControl({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn("inline-flex items-center gap-1 rounded-full border border-line bg-sand-100 p-1", className)}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative inline-flex h-8 items-center rounded-full px-3.5 text-body-sm font-medium transition-colors",
              active ? "text-primary-foreground" : "text-ink-600 hover:text-ink-800"
            )}
          >
            {active && (
              <motion.span
                layoutId={`segmented-${label}`}
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 34 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
