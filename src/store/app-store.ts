"use client";

/**
 * Global app state (Zustand): the signed-in user, fetched once and shared
 * across all views. Authentication mutations update it immediately so the
 * header and views react without a refetch.
 */

import { create } from "zustand";

export interface AppUser {
  id: string;
  name: string;
  email: string;
  dailyGoalMinutes: number;
  xp: number;
  createdAt: string;
}

interface AppState {
  user: AppUser | null;
  userLoaded: boolean;
  setUser: (user: AppUser | null) => void;
  refreshUser: () => Promise<void>;
  /** bumped whenever progress changes, so open queries can invalidate */
  progressVersion: number;
  bumpProgress: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  userLoaded: false,
  setUser: (user) => set({ user, userLoaded: true }),
  refreshUser: async () => {
    try {
      const res = await fetch("/api/auth/me");
      const json = await res.json();
      // /api/auth/me returns { user: SessionUser | null } directly.
      set({ user: json?.user ?? null, userLoaded: true });
    } catch {
      set({ userLoaded: true });
    }
  },
  progressVersion: 0,
  bumpProgress: () => set((s) => ({ progressVersion: s.progressVersion + 1 })),
}));
