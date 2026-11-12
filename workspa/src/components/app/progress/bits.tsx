"use client";

/**
 * Shared building blocks for the Progress dashboard.
 */

import { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Ear,
  Feather,
  Flame,
  GraduationCap,
  Languages,
  Library,
  Lightbulb,
  Medal,
  MessageCircle,
  MessageSquareText,
  Mic,
  PenLine,
  Printer,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ACHIEVEMENT_ICON_NAMES,
  type AchievementIcon,
  type CertificateDto,
  type ProgressSkill,
  type RevisionItem,
  type SkillStatus,
  type SkillTrend,
} from "@/data/progress";

// ---------------------------------------------------------------------------
// Icons & colors
// ---------------------------------------------------------------------------

export const ACHIEVEMENT_ICONS: Record<AchievementIcon, LucideIcon> = {
  star: Star,
  medal: Medal,
  trophy: Trophy,
  flame: Flame,
  target: Target,
  zap: Zap,
  brain: Brain,
  "book-open": BookOpen,
  books: Library,
  feather: Feather,
  "pen-line": PenLine,
  "message-circle": MessageCircle,
  mic: Mic,
  ear: Ear,
  "volume-2": Volume2,
  languages: Languages,
  lightbulb: Lightbulb,
  "check-circle": CheckCircle2,
  "calendar-check": CalendarCheck,
  "trending-up": TrendingUp,
  award: Award,
  "graduation-cap": GraduationCap,
  "message-square-text": MessageSquareText,
  clock: Clock,
};

export function AchievementIconView({
  icon,
  unlocked,
  className,
}: {
  icon: string;
  unlocked: boolean;
  className?: string;
}) {
  const Icon = ACHIEVEMENT_ICONS[icon as AchievementIcon] ?? Award;
  return <Icon className={className} aria-hidden />;
}

export const SKILL_COLORS: Record<ProgressSkill, string> = {
  vocabulary: "#3b82f6",
  grammar: "#8b5cf6",
  reading: "#10b981",
  listening: "#f59e0b",
  speaking: "#f43f5e",
  writing: "#06b6d4",
};

// ---------------------------------------------------------------------------
// Badges
// ---------------------------------------------------------------------------

const STATUS_STYLES: Record<SkillStatus, string> = {
  "not-started": "bg-muted text-muted-foreground",
  exploring: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  building: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  consistent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const STATUS_LABELS: Record<SkillStatus, string> = {
  "not-started": "Not started",
  exploring: "Exploring",
  building: "Building",
  consistent: "Consistent",
};

export function StatusBadge({ status }: { status: SkillStatus }) {
  return <Badge variant="secondary" className={STATUS_STYLES[status]}>{STATUS_LABELS[status]}</Badge>;
}

export function TrendBadge({ trend }: { trend: SkillTrend }) {
  if (trend === "insufficient") return null;
  const config: Record<Exclude<SkillTrend, "insufficient">, { label: string; className: string; icon: LucideIcon }> = {
    improving: { label: "Improving", className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", icon: TrendingUp },
    steady: { label: "Steady", className: "bg-muted text-muted-foreground", icon: TrendingUp },
    declining: { label: "Dipping", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400", icon: TrendingDown },
    new: { label: "New", className: "bg-blue-500/10 text-blue-600 dark:text-blue-400", icon: Zap },
  };
  const item = config[trend];
  return (
    <Badge variant="secondary" className={`gap-1 ${item.className}`}>
      <item.icon className="size-3" aria-hidden />
      {item.label}
    </Badge>
  );
}

const REVISION_KIND_LABELS: Record<RevisionItem["kind"], string> = {
  vocabulary: "Words",
  "grammar-lesson": "Grammar",
  "reading-text": "Reading",
  "listening-activity": "Listening",
  "speaking-activity": "Speaking",
  "writing-assignment": "Writing",
};

export function RevisionKindBadge({ kind }: { kind: RevisionItem["kind"] }) {
  return <Badge variant="outline" className="text-[11px]">{REVISION_KIND_LABELS[kind]}</Badge>;
}

// ---------------------------------------------------------------------------
// Tiles & rings
// ---------------------------------------------------------------------------

export function StatTile({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-1 p-4 sm:p-5">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-4.5 text-primary" aria-hidden />
        </span>
        <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
        <p className="text-xs font-medium text-muted-foreground">
          {label}
          {hint ? ` · ${hint}` : ""}
        </p>
      </CardContent>
    </Card>
  );
}

export function ProgressRing({
  value,
  max,
  caption,
  color = "var(--color-primary)",
  size = 96,
}: {
  value: number;
  max: number;
  caption: string;
  color?: string;
  size?: number;
}) {
  const safeMax = Math.max(max, 1);
  const pct = Math.min(value / safeMax, 1);
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const complete = value >= safeMax;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            className="stroke-muted"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            stroke={color}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold tabular-nums">{value}</span>
          <span className="text-[10px] text-muted-foreground">{`/ ${safeMax}`}</span>
        </div>
      </div>
      <p className="text-center text-xs font-medium text-muted-foreground">{caption}</p>
      {complete ? (
        <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-0">Goal met</Badge>
      ) : null}
    </div>
  );
}

export function SectionCard({
  title,
  icon: Icon,
  action,
  children,
  className,
}: {
  title: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          {Icon ? <Icon className="size-4 text-primary" aria-hidden /> : null}
          {title}
        </CardTitle>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-dashed p-6 text-center">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Certificate (view + print)
// ---------------------------------------------------------------------------

export function CertificateDialog({
  certificate,
  learnerName,
}: {
  certificate: CertificateDto | null;
  learnerName: string | null;
}) {
  const [open, setOpen] = useState(false);
  if (!certificate) return null;

  return (
    <>
      <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setOpen(true)}>
        <Award className="size-4" aria-hidden /> View certificate
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="sr-only">Certificate — {certificate.title}</DialogTitle>
            <DialogDescription className="sr-only">
              Course completion certificate {certificate.code}
            </DialogDescription>
          </DialogHeader>
          <div id="certificate-print-area" className="rounded-xl border-2 border-primary/40 bg-gradient-to-b from-primary/5 to-transparent p-6 text-center">
            <GraduationCap className="mx-auto size-10 text-primary" aria-hidden />
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              TalkSy · Certificate of Completion
            </p>
            <p className="mt-4 text-sm text-muted-foreground">This certifies that</p>
            <p className="text-xl font-bold">{learnerName ?? "TalkSy Learner"}</p>
            <p className="mt-2 text-sm text-muted-foreground">has completed the course</p>
            <p className="text-lg font-semibold text-primary">{certificate.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {certificate.lessonsCompleted} lessons · all verified completions
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>Issued {new Date(certificate.issuedAt).toLocaleDateString()}</span>
              <span className="font-mono">{certificate.code}</span>
            </div>
          </div>
          <div className="mt-2 flex justify-end print:hidden">
            <Button variant="outline" size="sm" className="gap-1.5" onClick={() => window.print()}>
              <Printer className="size-4" aria-hidden /> Print / save as PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
