/**
 * TalkSy Design System — public surface.
 *
 * Primitives (buttons, dialogs, tabs, tooltips, dropdowns, inputs…) come
 * from shadcn/ui in `src/components/ui/*`, styled entirely by the token
 * layer in `src/app/globals.css`. Everything in this folder is either a
 * TalkSy-specific composite (course cards, answer feedback, audio
 * players…) or an extension of a shadcn primitive (LoadingButton).
 *
 * Living documentation: open the app at #/design.
 */

export { LogoMark, Wordmark, LogoLockup, LogoLink } from "./brand";
export { LoadingButton, IconButton } from "./buttons";
export { Kbd, UserAvatar } from "./primitives";
export { Field, SearchInput, FilterChips, SegmentedControl, type FilterOption } from "./forms";
export { StatusBadge, PhaseBadge, DraftBadge, LevelChip, type BadgeTone } from "./badges";
export { SectionHeading, InteractiveCard } from "./cards";
export { ProgressBar, ProgressRing, StepDots, DoneRoundel } from "./progress";
export { CourseCard } from "./course-card";
export { LessonCard, type LessonStatus } from "./lesson-card";
export { AnswerFeedback, type FeedbackState } from "./feedback";
export { EmptyState, type SpotIllustration } from "./empty-state";
export { CardSkeleton, ListSkeleton, StatSkeleton, ChartSkeleton, PlayerSkeleton } from "./skeletons";
export { AudioPlayer } from "./audio-player";
export { MicControl } from "./mic-control";
export { Sparkline, MiniBars, DonutStat, WeeklyBars, chartAxisProps } from "./charts";
export { DataTable, type Column } from "./tables";
export { notify } from "./notifications";
