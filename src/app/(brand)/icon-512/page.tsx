import type { Metadata } from "next";
import { IconCanvas } from "@/components/marketing/brand-assets";

export const metadata: Metadata = {
  title: "TalkSy — icon 512",
  robots: { index: false, follow: false },
};

export default function Icon512Page() {
  return <IconCanvas size={512} />;
}
