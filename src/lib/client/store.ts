"use client";

import { create } from "zustand";
import type { SessionUser } from "./api";

interface AppStore {
  user: SessionUser | null;
  userLoaded: boolean;
  setUser: (user: SessionUser | null) => void;
  setUserLoaded: (loaded: boolean) => void;

  /** Global "show translations" toggle for the lesson player. */
  showTranslations: boolean;
  toggleTranslations: () => void;

  /** Speech rate used by every audio control. */
  speechRate: number;
  setSpeechRate: (rate: number) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  userLoaded: false,
  setUser: (user) => set({ user, userLoaded: true }),
  setUserLoaded: (loaded) => set({ userLoaded: loaded }),

  showTranslations: false,
  toggleTranslations: () =>
    set((state) => ({ showTranslations: !state.showTranslations })),

  speechRate: 0.9,
  setSpeechRate: (rate) => set({ speechRate: rate }),
}));
