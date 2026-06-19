import {
  BarChart3,
  Bot,
  Boxes,
  CalendarDays,
  CloudCog,
  Code2,
  DatabaseZap,
  Mail,
  Rocket,
  ServerCog,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#tech" },
  { label: "Insights", href: "#analytics" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: 24, suffix: "+", label: "Projects completed" },
  { value: 7, suffix: "+", label: "Tech systems" },
  { value: 2, suffix: "+", label: "Years professional" },
  { value: 946, suffix: "+", label: "GitHub contributions" },
];

export const stackPanels = [
  {
    title: "Frontend Architecture",
    description:
      "React, Next.js, and TypeScript for pixel-accurate, type-safe interfaces that stay fast under real product load.",
    icon: Code2,
  },
  {
    title: "Backend Infrastructure",
    description:
      "Node.js, NestJS, and event-driven services for resilient API surfaces and operational workflows.",
    icon: ServerCog,
  },
  {
    title: "Data & Cloud Ops",
    description:
      "PostgreSQL, Redis, Docker, and cloud deployment patterns for reliable persistence and scale.",
    icon: DatabaseZap,
  },
  {
    title: "Advanced Tooling",
    description:
      "GSAP, Three.js, observability, and automation scripts that make product interfaces feel alive.",
    icon: CloudCog,
  },
];

export const projectFilters = [
  "All Projects",
  "SaaS",
  "Dashboard",
  "Inventory",
  "Logistics",
  "AI",
  "E-Commerce",
];

export const projects = [
  {
    title: "Enterprise Inventory Engine",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Puaf8--1mh5IsQ1x_Wc1sBe7_r28lE_sXnp4RE6fCBEGWrludAxNl8uS7naZ5W415zRQAqvHKJcIB00WprD0zLxyy2tqOwhAnvC2dIePAnEVI5iCxj-kcXpWGl1zVOoEK_GjsqLbEk8kVVyYC76gHj5AFjkKjsAw5aXgKv2vI-G2dRM1GZsbFamUarUpKQEgxErZtDdaZWwLi1JuNdeuB5YFZNp5Ik0PDSQbhyNrkr_ymY3j9mLT-ZryHtOFDl1gkn7NHrAkUuuS",
    tags: ["Next.js", "Logistics"],
    problem:
      "A multi-warehouse operation was leaking stock accuracy through manual updates and disconnected legacy tools.",
    solution:
      "Built a real-time inventory hub with automated reorder signals, role-based operations, and low-latency synchronization.",
    architecture:
      "Event-driven Node.js services, Redis Streams, PostgreSQL audit trails, and a server-rendered Next.js command center.",
    impact: [
      { value: "99.9%", label: "Accuracy" },
      { value: "-25%", label: "Opex reduction" },
    ],
    link: "https://inventory-engine.demo",
  },
  {
    title: "FleetTrack Pro",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRxZEYYDi_Wlj_M5oqmx9IBVaVAeYs8WBr74CwOKUENbRBeZ5Y7XuEr7G02Rdqzcg-fqUaatcNXSeVfCs4_us4q4fqGMU2inSY-o4joeu7wrKj993ajGQhEoM_vIcg-Sk9hJx_CXyHMLmN1mzyPjxBbJ7LfLcEOAsQ7Yo0ybZEOLdcGvVsbn3pW3vQmiFvxd2QD63_Kdbz3NZwCww1U2ad5p5DOTSxjU9BM3hD52A0UUqNPK3qd5YNPWCvVAapOfapxniz9ocnsB4d",
    tags: ["NestJS", "IoT"],
    problem:
      "Fleet teams were routing 200+ vehicles without reliable telemetry, creating fuel waste and slow maintenance cycles.",
    solution:
      "Shipped a central vehicle hub with GPS traces, fuel metrics, alert rules, and predictive maintenance workflows.",
    architecture:
      "NestJS ingestion APIs, stream workers, map-ready telemetry storage, and dashboard modules for live operations.",
    impact: [
      { value: "22%", label: "Fuel savings" },
      { value: "100+", label: "Live nodes" },
    ],
    link: "https://fleet-track.demo",
  },
];

export const technologies = [
  { name: "TypeScript", value: 42 },
  { name: "JavaScript", value: 30 },
  { name: "Go", value: 18 },
  { name: "Python", value: 10 },
];

export const assistantPrompts = [
  "How can I hire you?",
  "Show inventory projects",
  "Describe stack scalability",
];

export const contactLinks = [
  {
    label: "Email Me At",
    value: "hello@santanu.dev",
    href: "mailto:hello@santanu.dev",
    icon: Mail,
  },
  {
    label: "Ready to start?",
    value: "Book a Strategy Session",
    href: "#contact",
    icon: CalendarDays,
  },
];

export const heroCapabilities = [
  { label: "SaaS Platforms", icon: Rocket },
  { label: "Inventory Systems", icon: Boxes },
  { label: "Business Automation", icon: Bot },
  { label: "Analytics Dashboards", icon: BarChart3 },
  { label: "AI Workflows", icon: Sparkles },
];
