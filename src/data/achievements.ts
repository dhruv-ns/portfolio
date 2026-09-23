export interface Achievement {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  type: "hackathon" | "competition" | "milestone";
}

export const achievements: Achievement[] = [
  {
    id: "hacksynergy",
    title: "Hacksynergy National Hackathon",
    role: "Participant & WAF Developer",
    organization: "E-Cell IPEC",
    period: "2025",
    description:
      "Participated in a 24-hour national-level hackathon, architecting and developing a functional Web Application Firewall under strict time constraints.",
    highlights: [
      "24-hour national-level hackathon",
      "Architected a functional Web Application Firewall",
      "Detected and mitigated web vulnerabilities",
      "Rapid prototyping under time constraints",
    ],
    type: "hackathon",
  },
  {
    id: "ideathon-2025",
    title: "Ideathon 2025 — Top 20 Teams",
    role: "Team Member",
    organization: "Lloyd Institute of Management & Technology",
    period: "2025",
    description:
      "Proposed a technology-driven Data Privacy Awareness solution and advanced to the third round among top 20 teams.",
    highlights: [
      "Top 20 Teams recognition",
      "Data Privacy Awareness solution",
      "Advanced to third round",
      "Privacy-focused mobile app concept",
    ],
    type: "competition",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "2025",
    title: "Started BCA at Lloyd Institute",
    description:
      "Began Bachelor of Computer Applications, building foundations in programming and computer science.",
  },
  {
    year: "2026",
    title: "Hackathons & Security Projects",
    description:
      "Participated in Hacksynergy National Hackathon, built a Web Application Firewall, and placed in Ideathon Top 20.",
  },
  {
    year: "2026",
    title: "Full-Stack Development",
    description:
      "Building full-stack applications, deepening DSA foundations, and deploying projects on Vercel and Streamlit.",
  },
  {
    year: "2026+",
    title: "Engineering Growth",
    description:
      "Strengthening software engineering fundamentals, DSA proficiency, and contributing to open-source.",
  },
];
