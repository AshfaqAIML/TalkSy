import type { Metadata } from "next";
import { OgImageCanvas } from "@/components/marketing/brand-assets";

export const metadata: Metadata = {
  title: "TalkSy — OG image",
  robots: { index: false, follow: false },
};

export default function OgImagePage() {
  return <OgImageCanvas />;
}
