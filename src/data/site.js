import {
  Blocks,
  BriefcaseBusiness,
  Database,
  Figma,
  GitBranch,
  Globe,
  LayoutTemplate,
  Mail,
  MapPin,
  MonitorSmartphone,
  MoveRight,
  Server,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sharonnkem",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isichei-sharon-03b6a31b4/",
  },
  {
    label: "Email",
    href: "mailto:isicheisharon97@gmail.com",
  },
];

export const heroHighlights = [
  { value: "Frontend", label: "React websites and UI" },
  { value: "Backend", label: "Node.js APIs and logic" },
  { value: "Fullstack", label: "From interface to database" },
];

export const valueProps = [
  {
    title: "Frontend to backend",
    description:
      "I build the parts users see and the systems behind them, so the whole product works well together.",
    icon: LayoutTemplate,
  },
  {
    title: "Clean and usable",
    description:
      "I like interfaces that feel simple, clear, and easy to use without losing the important functionality.",
    icon: Sparkles,
  },
  {
    title: "Code that stays manageable",
    description:
      "I try to keep my code organized and reusable, so it is easier to update and grow later.",
    icon: Blocks,
  },
];

export const quickFacts = [
  {
    label: "Role",
    value: "Full Stack Developer",
    icon: BriefcaseBusiness,
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "isicheisharon97@gmail.com",
    icon: Mail,
  },
  {
    label: "Focus",
    value: "React, Node.js, JavaScript, Tailwind CSS",
    icon: MoveRight,
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    skills: [
      { label: "React", icon: MonitorSmartphone },
      { label: "JavaScript", icon: WandSparkles },
      { label: "Tailwind CSS", icon: Globe },
      { label: "TypeScript", icon: Blocks },
    ],
  },
  {
    name: "Backend",
    skills: [
      { label: "Node.js", icon: Server },
      { label: "Express APIs", icon: Server },
      { label: "Database Design", icon: Database },
      { label: "Authentication Flows", icon: Database },
    ],
  },
  {
    name: "Workflow",
    skills: [
      { label: "Framer Motion", icon: Sparkles },
      { label: "Git & GitHub", icon: GitBranch },
      { label: "Responsive Design", icon: LayoutTemplate },
      { label: "Figma Handoff", icon: Figma },
    ],
  },
];
