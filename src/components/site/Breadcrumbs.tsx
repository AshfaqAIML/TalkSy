"use client";

/**
 * Shared breadcrumb trail for complex learning areas (PROMPT 31 §6):
 * course → chapter → lesson, library → level → unit → lesson, and the
 * practice hubs → activity. Hash links keep the SPA router in charge.
 */

import { Fragment } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface Crumb {
  label: string;
  /** Absent on the current page and on intermediate nodes without a route. */
  href?: string;
}

export function PageBreadcrumbs({
  items,
  className,
}: {
  /** Last item is rendered as the current page. */
  items: Crumb[];
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <Breadcrumb className={className} aria-label="Breadcrumb">
      <BreadcrumbList>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              {index > 0 ? <BreadcrumbSeparator /> : null}
              <BreadcrumbItem>
                {last || !item.href ? (
                  last ? (
                    <BreadcrumbPage className="max-w-[16rem] truncate text-sm font-medium sm:max-w-none">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <span className="max-w-[14rem] truncate text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  )
                ) : (
                  <BreadcrumbLink
                    asChild
                    className="max-w-[14rem] truncate text-sm font-medium text-primary hover:underline"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
