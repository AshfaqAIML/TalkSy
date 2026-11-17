"use client";

/**
 * Global client providers for TalkSy:
 * - ThemeProvider (next-themes) for light/dark mode
 * - QueryClientProvider (TanStack Query) for server state
 *
 * The root layout wires ThemeProvider + MotionProvider itself and mounts
 * <QueryProvider> around the whole tree — every useQuery consumer (site
 * header, app views, command palette) shares one cache.
 */

import { useState, type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}

/** TanStack Query provider only — for layouts that already run ThemeProvider. */
export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(makeQueryClient);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

// Re-export next-themes' provider under a local name for layout.tsx.
export { ThemeProvider };
