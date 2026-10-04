"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Shield, Lock, Eye, ChevronRight } from "lucide-react";
import { Floating3DParticles } from "@/components/ui/floating-3d-particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { LightRays } from "@/components/ui/light-rays";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Magnetic button wrapper
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Split text animation component
function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 60]);
  const contentY = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Layer 1: Floating 3D particles (deepest) */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0">
        <Floating3DParticles
          className="absolute inset-0"
          quantity={300}
          color="#22c55e"
          size={3}
          opacity={0.2}
          drift={0.3}
          depth={0.6}
        />
      </motion.div>

      {/* Layer 2: Glyph matrix */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0">
        <GlyphMatrix
          className="absolute inset-0 opacity-[0.06]"
          color="#22c55e"
          cellSize={20}
          mutationRate={0.02}
          interval={150}
          fadeBottom={0.8}
        />
      </motion.div>

      {/* Layer 3: Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/4 blur-[150px]" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-emerald-500/6 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/3 blur-[130px]" />
      </div>

      {/* Layer 4: Light rays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <LightRays
          className="absolute inset-0 opacity-30"
          count={5}
          color="#22c55e"
          speed={6}
          blur={40}
          length="80vh"
        />
      </div>

      {/* Layer 5: Scan lines */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
          }}
        />
      </div>

      {/* Content layer */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 md:px-6"
      >
        <div className="flex flex-col items-center text-center">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="glass w-full max-w-2xl rounded-xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-emerald-500/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="ml-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Terminal className="h-3.5 w-3.5" />
                neeraj@security:~
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-6 text-left font-mono text-sm md:p-8">
              <div className="space-y-1">
                <p className="text-emerald-400">
                  <span className="text-muted-foreground">$</span> whoami
                </p>
                <TypingAnimation
                  className="text-lg font-bold text-emerald-400 md:text-xl"
                  duration={80}
                  startOnView
                  showCursor
                  blinkCursor
                  cursorStyle="block"
                >
                  neeraj
                </TypingAnimation>
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-emerald-400">
                  <span className="text-muted-foreground">$</span> cat role.txt
                </p>
                <TypingAnimation
                  className="text-base text-muted-foreground md:text-lg"
                  duration={60}
                  delay={1500}
                  startOnView
                  showCursor
                  blinkCursor
                  cursorStyle="underscore"
                >
                  Security Researcher
                </TypingAnimation>
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-emerald-400">
                  <span className="text-muted-foreground">$</span> cat mission.txt
                </p>
                <TypingAnimation
                  className="text-sm text-muted-foreground md:text-base"
                  duration={40}
                  delay={3000}
                  startOnView
                >
                  Securing digital assets through offensive security research,
                  vulnerability assessment, and threat intelligence.
                </TypingAnimation>
              </div>
            </div>
          </motion.div>

          {/* Status badges with staggered entrance */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Shield, label: "Security Cleared" },
              { icon: Lock, label: "CTF Player" },
              { icon: Eye, label: "OSINT" },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <ShimmerButton
                className="h-12 gap-2 rounded-xl px-8 text-sm font-medium"
                shimmerColor="#22c55e"
                background="oklch(0.75 0.25 155)"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <AnimatedShinyText className="text-black">
                  View Research
                </AnimatedShinyText>
                <ChevronRight className="h-4 w-4 text-black" />
              </ShimmerButton>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-400 backdrop-blur-md hover:bg-emerald-500/10 hover:text-emerald-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Terminal className="h-4 w-4" />
                Contact
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social links with staggered entrance */}
          <div className="mt-10 flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-400 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-emerald-500/50"
            >
              <span className="text-xs font-medium tracking-widest">SCROLL</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Border beam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px">
        <div className="relative mx-auto h-px w-full max-w-4xl">
          <BorderBeam size={250} duration={12} colorFrom="#22c55e" colorTo="#22c55e80" />
        </div>
      </div>
    </section>
  );
}
