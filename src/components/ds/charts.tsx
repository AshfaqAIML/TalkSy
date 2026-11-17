"use client";

/**
 * Charts — lightweight, dependency-free SVG (Sparkline, MiniBars, Donut)
 * plus shared Recharts theming for the larger dashboard charts. Chart
 * colours come only from the chart palette tokens.
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as ReTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

/** Sparkline — trend at a glance, no axes. */
export function Sparkline({
  points,
  width = 120,
  height = 36,
  className,
  label,
}: {
  points: number[];
  width?: number;
  height?: number;
  className?: string;
  label: string;
}) {
  if (points.length < 2) return null;
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const span = Math.max(1, max - min);
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => [i * step, height - 4 - ((p - min) / span) * (height - 8)] as const);
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${line} ${width},${height} 0,${height}`;
  const [lx, ly] = coords[coords.length - 1];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} role="img" aria-label={label}>
      <polygon points={area} className="fill-brand-500/10" />
      <polyline points={line} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
      <circle cx={lx} cy={ly} r="3" className="fill-primary" />
    </svg>
  );
}

/** MiniBars — compact bar chart with the max bar highlighted. */
export function MiniBars({
  data,
  height = 96,
  className,
  label,
}: {
  data: { label: string; value: number }[];
  height?: number;
  className?: string;
  label: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className={cn("flex items-end gap-2", className)} role="img" aria-label={label}>
      {data.map((d) => (
        <div key={d.label} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
          <div
            title={`${d.label}: ${d.value}`}
            className={cn(
              "w-full rounded-t-md transition-[height] duration-slow ease-out-quint",
              d.value === max && d.value > 0 ? "bg-primary" : "bg-brand-200 dark:bg-brand-600/30"
            )}
            style={{ height: Math.max(4, (d.value / max) * (height - 22)) }}
          />
          <span className="text-micro text-ink-500">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

/** DonutStat — single-value proportion (e.g. accuracy). */
export function DonutStat({
  value,
  max = 100,
  size = 72,
  caption,
  className,
}: {
  value: number;
  max?: number;
  size?: number;
  caption?: string;
  className?: string;
}) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const percent = Math.min(100, Math.round((value / Math.max(1, max)) * 100));
  return (
    <div className={cn("inline-flex flex-col items-center gap-1", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} role="img" aria-label={`${percent}%`}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-sand-200" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            className="stroke-primary"
            strokeDasharray={c}
            strokeDashoffset={c - (percent / 100) * c}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-body-sm font-bold tabular-nums">{percent}%</span>
      </div>
      {caption && <span className="text-caption text-ink-500">{caption}</span>}
    </div>
  );
}

/* -- Recharts theming for dashboard-scale charts ------------------------ */

export const chartAxisProps = {
  tickLine: false,
  axisLine: false,
  fontSize: 12,
} as const;

export function WeeklyBars({
  data,
  className,
}: {
  data: { label: string; xp: number }[];
  className?: string;
}) {
  return (
    <div className={cn("h-56", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.25} className="stroke-ink-300" />
          <XAxis dataKey="label" {...chartAxisProps} className="text-ink-500" />
          <YAxis {...chartAxisProps} allowDecimals={false} className="text-ink-500" />
          <ReTooltip
            formatter={(value: number) => [`${value} XP`, "Earned"]}
            cursor={{ fill: "var(--sand-100)" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid var(--line)",
              background: "var(--card)",
              boxShadow: "var(--shadow-md)",
              fontSize: 13,
              color: "var(--ink-800)",
            }}
          />
          <Bar dataKey="xp" radius={[6, 6, 0, 0]} className="fill-primary" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
