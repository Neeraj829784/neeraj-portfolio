import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressWrapper } from "@/components/scroll-progress-wrapper";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseOverlay } from "@/components/noise-overlay";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeraj — Cybersecurity Researcher & Ethical Hacker",
  description:
    "Portfolio of a cybersecurity researcher specializing in penetration testing, network security, and threat analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgressWrapper />
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
