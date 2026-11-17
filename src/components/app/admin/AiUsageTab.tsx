"use client";

/**
 * PROMPT 38 §9 — AI usage monitoring for staff.
 *
 * One row per feature × provider × day over the last 14 days: call counts,
 * outcomes, average latency and token ESTIMATES (clearly labeled as
 * estimates — providers do not report metered tokens uniformly and these
 * numbers are never presented as billing figures). Plus the provider
 * inventory and which one is active. Measurements only; no content.
 */

import { useEffect, useState } from "react";
import { RefreshCw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { request } from "@/lib/client/api";

interface UsageRow {
  day: string;
  feature: string;
  provider: string;
  calls: number;
  ok: number;
  errors: number;
  estTokens: number;
  avgLatencyMs: number;
}

interface AiUsageData {
  summary: {
    days: number;
    windowStart: string;
    rows: UsageRow[];
    totals: { calls: number; ok: number; errors: number; estTokens: number };
    errorKinds: { kind: string; count: number }[];
  };
  providers: { name: string; active: boolean }[];
}

export function AiUsageTab() {
  const [data, setData] = useState<AiUsageData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    // No synchronous setState before the first await — the effect calls this
    // directly, and `loading` already starts true.
    const res = await request<AiUsageData>("/api/admin/ai-usage");
    if (res.ok) {
      setData(res.data);
      setError(null);
    } else {
      setError(res.error);
    }
    setLoading(false);
  };

  const refresh = () => {
    setLoading(true);
    void load();
  };

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const res = await request<AiUsageData>("/api/admin/ai-usage");
      if (cancelled) return;
      if (res.ok) {
        setData(res.data);
        setError(null);
      } else {
        setError(res.error);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center gap-2 text-base">
            <Sparkles className="size-4 text-primary" aria-hidden /> AI usage
            <span className="ml-auto flex items-center gap-2">
              {data ? (
                data.providers.map((p) => (
                  <Badge
                    key={p.name}
                    variant={p.active ? "default" : "outline"}
                    title={p.active ? "Active provider (AI_PROVIDER)" : "Configured but not active"}
                  >
                    {p.name}
                    {p.active ? " · active" : ""}
                  </Badge>
                ))
              ) : null}
              <Button variant="ghost" size="sm" onClick={refresh} disabled={loading} aria-label="Refresh">
                <RefreshCw className="size-4" aria-hidden />
              </Button>
            </span>
          </CardTitle>
          <CardDescription>
            Provider calls by feature over the last 14 days. Token figures are
            character-based estimates, not metered billing; no prompt or reply
            content is ever stored.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-2/3" />
            </div>
          ) : error ? (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          ) : !data || data.summary.rows.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No AI calls recorded in the window yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-2 pr-3 font-medium">Day</th>
                    <th className="py-2 pr-3 font-medium">Feature</th>
                    <th className="py-2 pr-3 font-medium">Provider</th>
                    <th className="py-2 pr-3 text-right font-medium">Calls</th>
                    <th className="py-2 pr-3 text-right font-medium">OK</th>
                    <th className="py-2 pr-3 text-right font-medium">Errors</th>
                    <th className="py-2 pr-3 text-right font-medium">Avg latency</th>
                    <th className="py-2 text-right font-medium">Est. tokens</th>
                  </tr>
                </thead>
                <tbody>
                  {data.summary.rows.map((row) => (
                    <tr key={`${row.day}-${row.feature}-${row.provider}`} className="border-b last:border-0">
                      <td className="py-2 pr-3 text-muted-foreground">{row.day}</td>
                      <td className="py-2 pr-3">{row.feature}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{row.provider}</td>
                      <td className="py-2 pr-3 text-right">{row.calls}</td>
                      <td className="py-2 pr-3 text-right text-emerald-600 dark:text-emerald-400">
                        {row.ok}
                      </td>
                      <td className="py-2 pr-3 text-right text-destructive">
                        {row.errors > 0 ? row.errors : "—"}
                      </td>
                      <td className="py-2 pr-3 text-right text-muted-foreground">
                        {row.avgLatencyMs >= 1000
                          ? `${(row.avgLatencyMs / 1000).toFixed(1)}s`
                          : `${row.avgLatencyMs}ms`}
                      </td>
                      <td className="py-2 text-right text-muted-foreground">
                        {row.estTokens.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t text-sm font-semibold">
                    <td className="py-2 pr-3" colSpan={3}>
                      Totals ({data.summary.days} days)
                    </td>
                    <td className="py-2 pr-3 text-right">{data.summary.totals.calls}</td>
                    <td className="py-2 pr-3 text-right">{data.summary.totals.ok}</td>
                    <td className="py-2 pr-3 text-right">{data.summary.totals.errors}</td>
                    <td className="py-2 pr-3" />
                    <td className="py-2 text-right">
                      {data.summary.totals.estTokens.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
              {data.summary.errorKinds.length > 0 ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  Failure kinds:{" "}
                  {data.summary.errorKinds
                    .map((k) => `${k.kind} ×${k.count}`)
                    .join(", ")}
                </p>
              ) : null}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
