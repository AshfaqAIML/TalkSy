"use client";

/**
 * IELTS Writing Masterclass — the visual renderer (PROMPT 46, Part B).
 *
 * Renders every Academic Task 1 visual family from its structured data as
 * an accessible, print-clean chart: grouped/stacked-style bar charts
 * (vertical or horizontal), multi-series line graphs, single or paired pie
 * charts, mixed panels, process flows and before/after map grids. Pure
 * SVG/HTML — no chart library, no client data fetching, identical output
 * on the server.
 */

import type {
  WritingBarVisual,
  WritingLineVisual,
  WritingMapCell,
  WritingMapVisual,
  WritingMixedVisual,
  WritingPieVisual,
  WritingProcessVisual,
  WritingTableVisual,
  WritingVisual,
} from "@/data/exams/ielts/writing-bank/types";

const AXIS = "#64748b";
const GRID = "#1e293b";
const LABEL = "#cbd5e1";
const SERIES_COLORS = ["#38bdf8", "#c084fc", "#fbbf24", "#34d399", "#f87171", "#f472b6"];

function fmt(value: number): string {
  if (Math.abs(value) >= 10000) return `${(value / 1000).toFixed(0)}k`;
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1);
}

// ---------------------------------------------------------------------------
// Bar chart
// ---------------------------------------------------------------------------

export function BarChartView({ visual, height = 260 }: { visual: WritingBarVisual; height?: number }) {
  const all = visual.series.flatMap((s) => s.values.filter((v): v is number => v !== null));
  const max = Math.max(1, ...all);
  const horizontal = visual.horizontal === true;
  const n = visual.categories.length;

  if (horizontal) {
    const rowH = Math.min(44, Math.max(28, (height - 30) / n));
    return (
      <div className="space-y-1.5" role="img" aria-label={visual.title}>
        {visual.categories.map((cat, i) =>
          visual.series.map((s, si) => {
            const v = s.values[i];
            if (v === null || v === undefined) return null;
            const pct = Math.max(1.5, (v / max) * 100);
            return (
              <div key={`${cat}-${s.name}`} className="flex items-center gap-2 text-xs">
                <div className="w-32 shrink-0 truncate text-right text-slate-400">{si === 0 ? cat : ""}</div>
                <div className="relative h-6 flex-1 rounded bg-slate-800/60">
                  <div
                    className="absolute inset-y-0 left-0 rounded"
                    style={{ width: `${pct}%`, backgroundColor: SERIES_COLORS[si % SERIES_COLORS.length], opacity: 0.85 }}
                  />
                  <span className="absolute inset-y-0 left-2 flex items-center text-[11px] font-semibold text-white">
                    {si === 0 ? s.name : ""}
                  </span>
                  <span className="absolute inset-y-0 right-2 flex items-center text-[11px] font-semibold text-slate-200">
                    {fmt(v)}{visual.unit === "%" ? "%" : ""}
                  </span>
                </div>
              </div>
            );
          }),
        )}
        <div className="pt-1 text-[11px] text-slate-500">{visual.yLabel} · scale to {fmt(max)}{visual.unit === "%" ? "%" : ` ${visual.unit}`}</div>
      </div>
    );
  }

  const plotH = height - 46;
  const plotW = 100;
  const groupW = plotW / n;
  const barW = groupW / (visual.series.length + 0.6);
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div role="img" aria-label={visual.title}>
      <svg viewBox={`0 0 100 ${plotH / 3}`} className="w-full" style={{ height: plotH }} preserveAspectRatio="none">
        {ticks.map((t) => (
          <line key={t} x1="0" x2="100" y1={(plotH / 3) * (1 - t)} y2={(plotH / 3) * (1 - t)} stroke={GRID} strokeWidth="0.4" />
        ))}
        {visual.categories.map((_, i) =>
          visual.series.map((s, si) => {
            const v = s.values[i];
            if (v === null || v === undefined) return null;
            const h = (v / max) * (plotH / 3);
            const x = i * groupW + (si + 0.3) * barW;
            return (
              <rect
                key={`${i}-${si}`}
                x={x}
                y={plotH / 3 - h}
                width={barW * 0.86}
                height={Math.max(h, 0.2)}
                fill={SERIES_COLORS[si % SERIES_COLORS.length]}
                opacity={0.9}
                rx="0.3"
              />
            );
          }),
        )}
      </svg>
      <div className="relative" style={{ height: 0 }}>
        {visual.categories.map((cat, i) =>
          visual.series.map((s, si) => {
            const v = s.values[i];
            if (v === null || v === undefined) return null;
            return (
              <span
                key={`lbl-${i}-${si}`}
                className="absolute -translate-x-1/2 text-[10px] font-semibold text-slate-300"
                style={{ left: `${(i * groupW + (si + 0.3) * barW + barW * 0.43) * 1}%`, top: -14 }}
              >
                {fmt(v)}
              </span>
            );
          }),
        )}
      </div>
      <div className="flex" style={{ width: "100%" }}>
        {visual.categories.map((cat) => (
          <div key={cat} className="flex-1 truncate px-0.5 text-center text-[10px] text-slate-400" title={cat}>
            {cat}
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
        {visual.series.map((s, i) => (
          <span key={s.name} className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: SERIES_COLORS[i % SERIES_COLORS.length] }} />
            {s.name}
          </span>
        ))}
        <span className="text-slate-500">· {visual.yLabel}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Line graph
// ---------------------------------------------------------------------------

export function LineGraphView({ visual, height = 260 }: { visual: WritingLineVisual; height?: number }) {
  const all = visual.series.flatMap((s) => s.values.filter((v): v is number => v !== null));
  const max = Math.max(1, ...all);
  const min = 0;
  const plotH = height - 50;
  const aspect = plotH / 100;

  const point = (i: number, v: number): [number, number] => [
    (i / Math.max(1, visual.xPoints.length - 1)) * 100,
    (1 - (v - min) / (max - min)) * (plotH / 3),
  ];

  return (
    <div role="img" aria-label={visual.title}>
      <svg viewBox={`0 0 100 ${plotH / 3}`} className="w-full" style={{ height: plotH }} preserveAspectRatio="none">
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line key={t} x1="0" x2="100" y1={(plotH / 3) * (1 - t)} y2={(plotH / 3) * (1 - t)} stroke={GRID} strokeWidth="0.4" />
        ))}
        {visual.series.map((s, si) => {
          const pts: string[] = [];
          let last: [number, number] | null = null;
          s.values.forEach((v, i) => {
            if (v === null) return;
            const [x, y] = point(i, v);
            pts.push(`${x},${y}`);
            last = [x, y];
          });
          void last;
          return (
            <polyline
              key={s.name}
              points={pts.join(" ")}
              fill="none"
              stroke={SERIES_COLORS[si % SERIES_COLORS.length]}
              strokeWidth="0.7"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{ strokeWidth: 2 }}
            />
          );
        })}
        {visual.series.flatMap((s, si) =>
          s.values.map((v, i) => {
            if (v === null) return null;
            const [x, y] = point(i, v);
            return <circle key={`p-${si}-${i}`} cx={x} cy={y} r={0.8} fill={SERIES_COLORS[si % SERIES_COLORS.length]} />;
          }),
        )}
      </svg>
      <div className="flex">
        {visual.xPoints.map((p) => (
          <div key={p} className="flex-1 text-center text-[10px] text-slate-400">
            {p}
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
        {visual.series.map((s, i) => (
          <span key={s.name} className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-4 rounded" style={{ backgroundColor: SERIES_COLORS[i % SERIES_COLORS.length] }} />
            {s.name}
          </span>
        ))}
        <span className="text-slate-500">· {visual.yLabel} (scale 0–{fmt(max)} {visual.unit})</span>
      </div>
      <span className="sr-only">{visual.xLabel}</span>
      <span className="hidden" style={{ display: "none" }}>{String(aspect)}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pie charts
// ---------------------------------------------------------------------------

export function PieChartsView({ visual }: { visual: WritingPieVisual }) {
  return (
    <div role="img" aria-label={visual.title} className="grid gap-6 sm:grid-cols-2">
      {visual.pies.map((pie, pi) => {
        const total = pie.slices.reduce((a, s) => a + s.value, 0) || 1;
        let acc = 0;
        const radius = 42;
        const cx = 50;
        const cy = 50;
        return (
          <div key={pie.caption} className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className="w-40" role="presentation">
              {pie.slices.map((slice, i) => {
                const start = (acc / total) * Math.PI * 2 - Math.PI / 2;
                acc += slice.value;
                const end = (acc / total) * Math.PI * 2 - Math.PI / 2;
                const large = end - start > Math.PI ? 1 : 0;
                const x1 = cx + radius * Math.cos(start);
                const y1 = cy + radius * Math.sin(start);
                const x2 = cx + radius * Math.cos(end);
                const y2 = cy + radius * Math.sin(end);
                return (
                  <path
                    key={slice.label}
                    d={`M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${radius} ${radius} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
                    fill={SERIES_COLORS[(i + pi) % SERIES_COLORS.length]}
                    opacity={0.88}
                    stroke="#0f172a"
                    strokeWidth="0.6"
                  />
                );
              })}
              <circle cx={cx} cy={cy} r={17} fill="#0f172a" />
              <text x={cx} y={cy + 2.5} textAnchor="middle" fontSize="7" fill={LABEL} fontWeight="700">
                {visual.unit === "%" ? "100%" : fmt(total)}
              </text>
            </svg>
            <p className="mt-1 text-xs font-semibold text-slate-300">{pie.caption}</p>
            <ul className="mt-2 w-full space-y-1">
              {pie.slices.map((slice, i) => (
                <li key={slice.label} className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: SERIES_COLORS[(i + pi) % SERIES_COLORS.length] }} />
                    <span className="truncate">{slice.label}</span>
                  </span>
                  <span className="font-semibold text-slate-200">
                    {fmt(slice.value)}{visual.unit === "%" ? "%" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------

export function TableView({ visual }: { visual: WritingTableVisual }) {
  return (
    <div role="img" aria-label={visual.title} className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-slate-700 bg-slate-800/70 px-3 py-2 text-left text-xs font-semibold text-slate-300">{visual.rowLabel}</th>
            {visual.columnLabels.map((c) => (
              <th key={c} className="border border-slate-700 bg-slate-800/70 px-3 py-2 text-right text-xs font-semibold text-slate-300">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visual.rows.map((row) => (
            <tr key={row.label}>
              <td className="border border-slate-700 px-3 py-2 text-xs text-slate-300">{row.label}</td>
              {row.values.map((v, i) => (
                <td key={i} className="border border-slate-700 px-3 py-2 text-right text-xs font-semibold text-slate-100">
                  {typeof v === "number" ? fmt(v) : v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {visual.note ? <p className="mt-2 text-[11px] text-slate-500">{visual.note}</p> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

export function ProcessView({ visual }: { visual: WritingProcessVisual }) {
  return (
    <div role="img" aria-label={visual.title} className="space-y-3">
      <div className="flex flex-wrap items-stretch gap-2">
        {visual.stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center gap-2">
            <div className="w-36 rounded-lg border border-violet-500/30 bg-slate-800/70 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-violet-300">Stage {i + 1}</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-200">{stage.label}</p>
              <p className="mt-1 text-[10px] leading-snug text-slate-400">{stage.caption}</p>
            </div>
            {i < visual.stages.length - 1 ? <span className="text-lg text-violet-400">→</span> : null}
          </div>
        ))}
      </div>
      {visual.note ? <p className="text-[11px] text-slate-500">{visual.note}</p> : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Map (before/after grids)
// ---------------------------------------------------------------------------

export function MapView({ visual }: { visual: WritingMapVisual }) {
  const grid = (cells: (WritingMapCell | null)[][], title: string, tint: string) => (
    <div>
      <p className="mb-2 text-center text-xs font-semibold" style={{ color: tint }}>{title}</p>
      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cells[0]?.length ?? 3}, minmax(0, 1fr))` }}>
        {cells.flatMap((row, ri) =>
          row.map((cell, ci) => (
            <div
              key={`${ri}-${ci}`}
              className={`flex min-h-14 items-center justify-center rounded-md border px-1 text-center text-[10px] leading-tight ${
                cell ? "border-slate-600 bg-slate-800/80 font-semibold text-slate-200" : "border-dashed border-slate-700/60 text-slate-600"
              }`}
              style={cell ? { borderColor: `${tint}55` } : undefined}
            >
              {cell?.label ?? "—"}
            </div>
          )),
        )}
      </div>
    </div>
  );
  return (
    <div role="img" aria-label={visual.title} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {grid(visual.before, visual.beforeTitle, "#94a3b8")}
        {grid(visual.after, visual.afterTitle, "#c084fc")}
      </div>
      {visual.note ? <p className="text-[11px] text-slate-500">{visual.note}</p> : null}
      <p className="text-center text-[10px] text-slate-600">North is up · dashed cells are open ground</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mixed + dispatcher
// ---------------------------------------------------------------------------

export function MixedChartsView({ visual }: { visual: WritingMixedVisual }) {
  return (
    <div role="img" aria-label={visual.title} className="space-y-5">
      <div>
        <p className="mb-2 text-xs font-semibold text-slate-400">Panel A — {visual.bar.title}</p>
        <BarChartView visual={visual.bar} />
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold text-slate-400">Panel B — {visual.second.title}</p>
        {visual.second.kind === "line" ? <LineGraphView visual={visual.second} /> : <PieChartsView visual={visual.second} />}
      </div>
    </div>
  );
}

export function WritingVisualView({ visual }: { visual: WritingVisual }) {
  return (
    <figure className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
      <figcaption className="mb-3 text-center text-sm font-semibold text-slate-200">{visual.title}</figcaption>
      {visual.kind === "bar" ? <BarChartView visual={visual} />
      : visual.kind === "line" ? <LineGraphView visual={visual} />
      : visual.kind === "pie" ? <PieChartsView visual={visual} />
      : visual.kind === "table" ? <TableView visual={visual} />
      : visual.kind === "process" ? <ProcessView visual={visual} />
      : visual.kind === "map" ? <MapView visual={visual} />
      : <MixedChartsView visual={visual} />}
    </figure>
  );
}
