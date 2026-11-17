import type { Metadata } from "next";
import { IconCanvas } from "@/components/marketing/brand-assets";

export const metadata: Metadata = {
  title: "TalkSy — apple icon",
  robots: { index: false, follow: false },
};

export default function AppleIconPage() {
  return <IconCanvas size={180} />;
}
