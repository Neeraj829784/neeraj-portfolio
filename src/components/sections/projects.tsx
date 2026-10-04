"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, ChevronRight, Shield, Bug, Network, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparklesText } from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  status: "Completed" | "In Progress";
  color: string;
  icon: typeof Shield;
}

const projects: Project[] = [
  {
    id: "vulnscanner",
    title: "Vulnerability Scanner",
    description:
      "Automated network vulnerability scanner with custom NSE scripts, CVE detection, and report generation. Scans networks for common misconfigurations and known vulnerabilities.",
    year: "2026",
    tech: ["Python", "Nmap", "Scapy", "SQLite", "ReportLab"],
    liveUrl: "#",
    githubUrl: "#",
    status: "In Progress",
    color: "#22c55e",
    icon: Shield,
  },
  {
    id: "ctfplatform",
    title: "CTF Challenge Platform",
    description:
      "A self-hosted Capture The Flag platform with dynamic scoring, challenge categories (web, crypto, forensics, pwn), and real-time leaderboard for security training.",
    year: "2025",
    tech: ["Next.js", "PostgreSQL", "Docker", "Redis", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    color: "#8b5cf6",
    icon: Bug,
  },
  {
    id: "netmon",
    title: "Network Traffic Analyzer",
    description:
      "Real-time network traffic analysis tool with packet inspection, protocol decoding, and anomaly detection. Visualizes network flows and identifies suspicious patterns.",
    year: "2025",
    tech: ["Python", "Scapy", "Wireshark", "Matplotlib", "Tkinter"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    color: "#06b6d4",
    icon: Network,
  },
  {
    id: "osint",
    title: "OSINT Intelligence Tool",
    description:
      "Open-source intelligence gathering tool that aggregates data from public sources, social media, and dark web to build comprehensive target profiles for security assessments.",
    year: "2025",
    tech: ["Python", "BeautifulSoup", "Shodan API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    color: "#f59e0b",
    icon: Eye,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md transition-all duration-500",
          isHovered && "border-emerald-500/30 shadow-lg shadow-emerald-500/5"
        )}
      >
        {isHovered && (
          <BorderBeam
            size={200}
            duration={8}
            colorFrom={project.color}
            colorTo={project.color + "80"}
          />
        )}

        <div
          className="absolute left-0 top-0 h-full w-1 transition-all duration-500"
          style={{
            backgroundColor: project.color,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${project.color}15`, color: project.color }}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight md:text-2xl">
                    {project.title}
                  </h3>
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={cn(
                      "mt-1 rounded-full text-[10px]",
                      project.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="rounded-full border-border/50 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <span className="text-sm text-muted-foreground">{project.year}</span>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-border/30 pt-4">
            <Button
              variant="default"
              size="sm"
              className="h-9 gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2 rounded-lg border-border/50"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            </Button>
            <span className="ml-auto text-xs text-muted-foreground md:hidden">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Badge variant="secondary" className="mb-4 gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
            <Bug className="h-3 w-3" />
            Projects
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Security{" "}
            <SparklesText
              className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
              sparklesCount={5}
            >
              research
            </SparklesText>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A selection of security tools, research projects, and platforms
            I&apos;ve built to understand and improve cybersecurity.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="ghost"
            className="group gap-2 text-muted-foreground hover:text-emerald-400"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View all research on GitHub
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
