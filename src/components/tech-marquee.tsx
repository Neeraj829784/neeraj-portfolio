"use client";

import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";

const securityTools = [
  "Kali Linux", "Burp Suite", "Metasploit", "Nmap", "Wireshark",
  "Ghidra", "OWASP ZAP", "Shodan", "Maltego", "Hashcat",
  "John the Ripper", "Aircrack-ng", "SQLMap", "Nessus", "Snort",
];

export function TechMarquee() {
  return (
    <div className="relative border-y border-emerald-500/10 bg-muted/20 py-6">
      <Marquee pauseOnHover className="[--duration:30s]">
        {securityTools.map((tool) => (
          <Badge
            key={tool}
            variant="secondary"
            className="mx-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm"
          >
            {tool}
          </Badge>
        ))}
      </Marquee>
    </div>
  );
}
