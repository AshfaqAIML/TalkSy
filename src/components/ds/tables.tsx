"use client";

/**
 * DataTable — the table pattern for lists of records (attempt history,
 * admin tables). Built on shadcn Table; adds an overline header, zebra
 * option, tabular numerals and an empty-state slot.
 */

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: keyof T & string;
  header: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  caption,
  zebra = false,
  empty,
  className,
}: {
  columns: Column<T>[];
  rows: T[];
  caption?: string;
  zebra?: boolean;
  empty?: React.ReactNode;
  className?: string;
}) {
  const alignClass = { left: "text-left", right: "text-right", center: "text-center" } as const;
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-card shadow-xs", className)}>
      <Table>
        {caption && <caption className="sr-only">{caption}</caption>}
        <TableHeader>
          <TableRow className="bg-sand-100 hover:bg-sand-100">
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn("overline-label text-ink-500", alignClass[col.align ?? "left"], col.className)}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="p-0">
                {empty ?? (
                  <p className="px-4 py-10 text-center text-body-sm text-ink-500">Nothing here yet.</p>
                )}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, i) => (
              <TableRow key={i} className={cn(zebra && i % 2 === 1 && "bg-sand-50")}>
                {columns.map((col) => (
                  <TableCell key={col.key} className={cn(alignClass[col.align ?? "left"])}>
                    {col.render ? col.render(row) : String(row[col.key] ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
