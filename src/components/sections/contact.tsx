"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, Shield, Clock, Terminal } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    color: "#22c55e",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/neeraj",
    href: "https://github.com",
    color: "#8b5cf6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/neeraj",
    href: "https://linkedin.com",
    color: "#06b6d4",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4 gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
            <Terminal className="h-3 w-3" />
            Contact
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s secure{" "}
            <SparklesText
              className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
              sparklesCount={5}
            >
              together
            </SparklesText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Need a security assessment, penetration test, or just want to chat
            about cybersecurity? My inbox is always open.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 1, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <MagicCard
              className="rounded-2xl p-6 md:p-8"
              gradientColor="#22c55e"
              gradientOpacity={0.05}
            >
              <form className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="h-11 w-full rounded-xl border border-input bg-background/80 px-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-xl border border-input bg-background/80 px-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Security assessment, collaboration, etc."
                    className="h-11 w-full rounded-xl border border-input bg-background/80 px-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your security needs, timeline, and scope..."
                    className="w-full rounded-xl border border-input bg-background/80 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <ShimmerButton
                  className="h-12 gap-2 rounded-xl text-sm font-medium"
                  shimmerColor="#22c55e"
                  background="oklch(0.75 0.25 155)"
                  type="submit"
                >
                  <span className="text-black">Send Message</span>
                  <Send className="h-4 w-4 text-black" />
                </ShimmerButton>
              </form>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 md:col-span-2"
          >
            <MagicCard
              className="rounded-2xl p-6"
              gradientColor="#22c55e"
              gradientOpacity={0.05}
            >
              <h3 className="mb-4 font-heading text-lg font-semibold">
                Connect with me
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${link.color}15`, color: link.color }}
                    >
                      <link.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </MagicCard>

            <MagicCard
              className="rounded-2xl p-6"
              gradientColor="#22c55e"
              gradientOpacity={0.05}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Response time
                    </p>
                    <p className="text-sm font-medium">Within 24 hours</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm font-medium">India (Remote friendly)</p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
