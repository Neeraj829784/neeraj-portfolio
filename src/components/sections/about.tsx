"use client";

import { motion } from "motion/react";
import { Shield, Bug, Eye, Lock, Terminal, Network, FileSearch, Cpu } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SparklesText } from "@/components/ui/sparkles-text";

const stats = [
  { label: "CTFs Won", value: 25, suffix: "+" },
  { label: "Vulnerabilities Found", value: 40, suffix: "+" },
  { label: "Security Tools", value: 30, suffix: "+" },
  { label: "Hack The Box Rank", display: "Top 5%" },
];

const highlights = [
  {
    icon: Shield,
    title: "Offensive Security",
    description: "Penetration testing, red team operations, and vulnerability research.",
  },
  {
    icon: Bug,
    title: "Threat Analysis",
    description: "Malware analysis, reverse engineering, and threat intelligence gathering.",
  },
  {
    icon: Eye,
    title: "OSINT",
    description: "Open-source intelligence gathering and digital footprint analysis.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Network monitoring, intrusion detection, and packet analysis.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-64 h-[500px] w-[500px] rounded-full bg-emerald-500/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4 gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
            <Shield className="h-3 w-3" />
            About Me
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Decoding{" "}
            <SparklesText
              className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
              sparklesCount={5}
            >
              security
            </SparklesText>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            >
              <MagicCard
                className="flex flex-col items-center justify-center rounded-2xl p-6 text-center"
                gradientColor="#22c55e"
                gradientOpacity={0.1}
              >
                <span className="font-heading text-3xl font-bold text-emerald-400 md:text-4xl">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <>
                      <NumberTicker
                        value={stat.value ?? 0}
                        className="font-heading text-3xl font-bold text-emerald-400 md:text-4xl"
                      />
                      {stat.suffix}
                    </>
                  )}
                </span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="mb-16 opacity-30" />

        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 font-heading text-xl font-semibold md:text-2xl">
              <Terminal className="mr-2 inline h-5 w-5 text-emerald-400" />
              Security Researcher
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a cybersecurity researcher and ethical hacker with a passion
                for understanding how systems break — and how to fix them before
                the bad guys find out. My journey into security started with a
                simple question: &quot;How does this actually work?&quot;
              </p>
              <p>
                Today, I specialize in offensive security, vulnerability research,
                and threat analysis. I believe that the best defense is understanding
                offense — you can&apos;t protect what you don&apos;t understand.
              </p>
              <p>
                When I&apos;m not hunting vulnerabilities or analyzing malware,
                you&apos;ll find me competing in CTFs, contributing to security
                research, or writing about the latest threats.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-emerald-400/70">
              <Lock className="h-4 w-4" />
              Based in India, securing systems globally
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <MagicCard
                  className="h-full rounded-2xl p-5"
                  gradientColor="#22c55e"
                  gradientOpacity={0.08}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently section */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <MagicCard
            className="rounded-2xl p-6 md:p-8"
            gradientColor="#22c55e"
            gradientOpacity={0.05}
          >
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-emerald-400" />
              <h3 className="font-heading text-lg font-semibold">Currently</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OSCP Preparation", "Malware Analysis", "Bug Bounty", "Security Research"].map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                  {item}
                </Badge>
              ))}
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </section>
  );
}
