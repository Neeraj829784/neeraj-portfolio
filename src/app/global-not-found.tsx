import "@/styles/globals.css";
import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`dark ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
          <div className="text-center">
            <h1 className="font-heading text-6xl font-bold text-emerald-400 md:text-8xl">
              404
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Page not found
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-700"
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
