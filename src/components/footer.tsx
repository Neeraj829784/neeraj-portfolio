"use client";

import { motion } from "motion/react";
import { Shield, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative border-t border-emerald-500/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="flex items-center gap-2 font-heading text-lg font-bold">
              <Shield className="h-5 w-5 text-emerald-400" />
              neeraj
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Secured with
              <Shield className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
              and built with Next.js &amp; shadcn/ui
            </p>
            <Separator orientation="vertical" className="h-6" />
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg border-emerald-500/20 hover:border-emerald-500/50"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
