"use client";

import { motion } from "motion/react";
import { Shield, Network, Terminal, Bug, Eye, Lock } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { SparklesText } from "@/components/ui/sparkles-text";

const categories = [
  {
    icon: Shield,
    title: "Offensive Security",
    color: "#22c55e",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "Red Team Ops", level: 75 },
      { name: "Social Engineering", level: 70 },
      { name: "Exploit Development", level: 65 },
      { name: "Post-Exploitation", level: 72 },
    ],
  },
  {
    icon: Bug,
    title: "Threat Analysis",
    color: "#ef4444",
    skills: [
      { name: "Malware Analysis", level: 78 },
      { name: "Reverse Engineering", level: 70 },
      { name: "Forensics", level: 72 },
      { name: "Threat Intel", level: 75 },
      { name: "IOC Analysis", level: 80 },
    ],
  },
  {
    icon: Network,
    title: "Network Security",
    color: "#06b6d4",
    skills: [
      { name: "Wireshark", level: 85 },
      { name: "Nmap", level: 90 },
      { name: "IDS/IPS", level: 75 },
      { name: "Firewall Config", level: 70 },
      { name: "VPN/Tunneling", level: 72 },
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Platforms",
    color: "#a855f7",
    skills: [
      { name: "Burp Suite", level: 85 },
      { name: "Metasploit", level: 80 },
      { name: "Kali Linux", level: 88 },
      { name: "Ghidra", level: 65 },
      { name: "SIEM", level: 70 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4 gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
            <Lock className="h-3 w-3" />
            Skills
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            My security{" "}
            <SparklesText
              className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
              sparklesCount={5}
            >
              arsenal
            </SparklesText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tools and techniques I use to identify, analyze, and mitigate security threats.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <MagicCard
                className="h-full rounded-2xl p-6"
                gradientColor={category.color}
                gradientOpacity={0.1}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${category.color}15`, color: category.color }}
                  >
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
