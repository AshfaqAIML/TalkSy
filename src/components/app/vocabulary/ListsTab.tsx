"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BookMarked,
  Clock,
  FolderOpen,
  Layers,
  ListPlus,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { AnnotatedWord, WordListDto } from "@/lib/vocab/dto";
import { ErrorText, LoginPrompt, ProgressInfo, SectionHeading, WordCard } from "./shared";

/**
 * My Lists: bookmarks, personal word lists (create / rename / delete / add /
 * remove words / study a list) and the recently-learned words feed.
 */
export function ListsTab({
  lists,
  onListsChanged,
  navigate,
}: {
  lists: WordListDto[];
  onListsChanged: () => void;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [bookmarks, setBookmarks] = useState<AnnotatedWord[]>([]);
  const [recent, setRecent] = useState<AnnotatedWord[]>([]);
  const [createOpen, setCreateOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [openListId, setOpenListId] = useState<string | null>(null);
  const [listDetail, setListDetail] = useState<{
    listId: string;
    words: AnnotatedWord[];
  } | null>(null);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    if (!user) return;
    const [bookmarkRes, overviewRes] = await Promise.all([
      api.vocabBookmarks(),
      api.vocabOverview(),
    ]);
    if (bookmarkRes.ok) setBookmarks(bookmarkRes.data.words);
    else setError(bookmarkRes.error);
    if (overviewRes.ok) setRecent(overviewRes.data.recentWords);
  }, [user]);

  // Load bookmarks + recently learned (inline async effect — project pattern).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!user) return;
      const [bookmarkRes, overviewRes] = await Promise.all([
        api.vocabBookmarks(),
        api.vocabOverview(),
      ]);
      if (cancelled) return;
      if (bookmarkRes.ok) setBookmarks(bookmarkRes.data.words);
      else setError(bookmarkRes.error);
      if (overviewRes.ok) setRecent(overviewRes.data.recentWords);
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  // Load the open list's words; only shown when the ids match (no sync reset).
  useEffect(() => {
    if (!openListId) return;
    let cancelled = false;
    (async () => {
      const res = await api.vocabList(openListId);
      if (!cancelled && res.ok) {
        setListDetail({ listId: openListId, words: res.data.words });
      } else if (!cancelled && !res.ok) {
        setError(res.error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [openListId]);

  const listWords = listDetail?.listId === openListId ? listDetail.words : [];

  if (!user) {
    return (
      <LoginPrompt
        message="Bookmarks, personal word lists and your learning history live in your account."
        navigate={navigate}
      />
    );
  }

  const createList = async () => {
    if (!newName.trim()) return;
    const res = await api.vocabCreateList({ name: newName.trim(), description: newDescription.trim() });
    if (res.ok) {
      toast.success(`List “${res.data.list.name}” created.`);
      setCreateOpen(false);
      setNewName("");
      setNewDescription("");
      onListsChanged();
    } else toast.error(res.error);
  };

  const deleteList = async (list: WordListDto) => {
    const res = await api.vocabDeleteList(list.id);
    if (res.ok) {
      toast.success(`Deleted “${list.name}”.`);
      if (openListId === list.id) setOpenListId(null);
      onListsChanged();
    } else toast.error(res.error);
  };

  const removeFromList = async (wordId: string) => {
    if (!openListId) return;
    const res = await api.vocabRemoveFromList(openListId, wordId);
    if (res.ok) {
      setListDetail((prev) =>
        prev
          ? { ...prev, words: prev.words.filter((w) => w.word.id !== wordId) }
          : prev,
      );
    } else toast.error(res.error);
  };

  const toggleBookmark = async (wordId: string) => {
    const res = await api.vocabToggleBookmark(wordId);
    if (res.ok) {
      setBookmarks((prev) => prev.filter((w) => w.word.id !== wordId));
      void refresh();
    }
  };

  const openList = lists.find((l) => l.id === openListId);

  return (
    <div className="flex flex-col gap-8">
      {/* Personal lists */}
      <section aria-labelledby="my-lists">
        <SectionHeading
          icon={<ListPlus className="size-5 text-primary" aria-hidden />}
          title="My word lists"
          description="Group words your way — “My travel words”, “Words I always forget”, anything."
        >
          <Button size="sm" className="gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="size-4" aria-hidden /> New list
          </Button>
        </SectionHeading>

        {lists.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed p-8 text-center">
            <p className="font-semibold">No lists yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create your first list, then add words from any word card.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lists.map((list) => (
              <Card key={list.id} className={openListId === list.id ? "border-primary" : undefined}>
                <CardContent className="flex flex-col gap-2 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <button
                      type="button"
                      className="text-left"
                      onClick={() => setOpenListId(openListId === list.id ? null : list.id)}
                    >
                      <p className="font-semibold">{list.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {list.itemCount} word{list.itemCount === 1 ? "" : "s"}
                      </p>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 text-muted-foreground hover:text-destructive"
                      aria-label={`Delete list ${list.name}`}
                      onClick={() => void deleteList(list)}
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </Button>
                  </div>
                  {list.description ? (
                    <p className="line-clamp-2 text-xs text-muted-foreground">{list.description}</p>
                  ) : null}
                  <div className="mt-1 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                      onClick={() => {
                        setOpenListId(list.id);
                        navigate({ name: "vocabulary", tab: "flashcards", param: `list:${list.id}` });
                      }}
                    >
                      <Layers className="size-4" aria-hidden /> Study
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5"
                      onClick={() => setOpenListId(openListId === list.id ? null : list.id)}
                    >
                      <FolderOpen className="size-4" aria-hidden />
                      {openListId === list.id ? "Hide" : "Open"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Open list detail */}
        {openList ? (
          <div className="mt-4 rounded-2xl border bg-card p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold">{openList.name}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                aria-label="Close list"
                onClick={() => setOpenListId(null)}
              >
                <X className="size-4" aria-hidden />
              </Button>
            </div>
            {listWords.length === 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Empty list — add words from the Word Explorer (“Add to list…” on any word card).
              </p>
            ) : (
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {listWords.map((item) => (
                  <div key={item.word.id} className="relative">
                    <WordCard word={item.word} bookmarked={item.bookmarked} progress={item.progress} />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 size-7 text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.word.word} from list`}
                      onClick={() => void removeFromList(item.word.id)}
                    >
                      <Trash2 className="size-3.5" aria-hidden />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </section>

      {/* Bookmarks */}
      <section aria-labelledby="bookmarks">
        <SectionHeading
          icon={<BookMarked className="size-5 text-primary" aria-hidden />}
          title="Bookmarked words"
          description="Your saved words — study them any time from the Flashcards tab."
        />
        <ErrorText>{error}</ErrorText>
        {bookmarks.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed p-8 text-center">
            <p className="font-semibold">No bookmarks yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap the bookmark icon on any word card to save it here.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((item) => (
              <WordCard
                key={item.word.id}
                word={item.word}
                bookmarked
                progress={item.progress}
                onBookmark={() => void toggleBookmark(item.word.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Recently learned */}
      <section aria-labelledby="recent-words" className="pb-4">
        <SectionHeading
          icon={<Clock className="size-5 text-primary" aria-hidden />}
          title="Recently learned"
          description="The words you studied most recently, with their next review time."
        />
        {recent.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Nothing yet — your latest reviews will appear here.
          </p>
        ) : (
          <div className="mt-4 overflow-hidden rounded-2xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Recently learned words</caption>
              <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-2.5">Word</th>
                  <th scope="col" className="px-4 py-2.5">Meaning</th>
                  <th scope="col" className="px-4 py-2.5">Next review</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recent.map((item) => (
                  <tr key={item.word.id} className="bg-card">
                    <td className="px-4 py-2.5 font-semibold">{item.word.word}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{item.word.meaning}</td>
                    <td className="px-4 py-2.5">
                      <ProgressInfo progress={item.progress} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Create-list dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New word list</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <div>
              <Label htmlFor="list-name">Name</Label>
              <Input
                id="list-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="My travel words"
                maxLength={60}
              />
            </div>
            <div>
              <Label htmlFor="list-desc">Description (optional)</Label>
              <Textarea
                id="list-desc"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Words I want to learn before my trip"
                rows={2}
                maxLength={200}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button onClick={createList} disabled={!newName.trim()}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
