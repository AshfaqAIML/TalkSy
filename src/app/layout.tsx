import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { MotionProvider } from "@/components/motion";
import { QueryProvider } from "@/components/talksy/providers";

/* TalkSy design system typography:
   Inter — body text & application UI
   Poppins — headings (display, page titles, sections)
   Geist Mono — phonetic/linguistic data, timers, codes */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TalkSy — Learn. Practice. Speak. Excel.",
  description:
    "From your first English word to confident communication. Structured lessons, real assessments, six practice laboratories and IELTS/TOEFL exam preparation — free while we grow.",
  keywords: ["English", "ESL", "learn English", "beginner English", "TalkSy", "IELTS", "TOEFL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-background font-sans text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <QueryProvider>
              {children}
              <Toaster richColors position="top-center" />
            </QueryProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
