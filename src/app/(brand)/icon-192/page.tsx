import type { Metadata } from "next";
import { IconCanvas } from "@/components/marketing/brand-assets";

export const metadata: Metadata = {
  title: "TalkSy — icon 192",
  robots: { index: false, follow: false },
};

export default function Icon192Page() {
  return <IconCanvas size={192} />;
}
