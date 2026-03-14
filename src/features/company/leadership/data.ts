import type { StaticImageData } from "next/image";

import ismailOlamideImage from "@/assets/leadership/ismail-olamide.png";
import adedotunIdowuImage from "@/assets/leadership/adedotun-idowu.png";
import arowoloAminatImage from "@/assets/leadership/arowolo-aminat.png";

export type LeadershipMember = {
  slug: string;
  name: string;
  role: string;
  image: StaticImageData;
  shortBio: string;
  intro: string;
  responsibilities: string[];
};

export const leadershipPageContent = {
  eyebrow: "Octalve Leadership",
  title:
    "At Octalve We’re a company where everyone wakes up in the morning thinking about how we can help brands and individuals grow their businesses.",
  subtitle:
    "Meet the leadership team driving strategy, execution, innovation, and growth across the Octalve ecosystem.",
};

export const leadershipMembers: LeadershipMember[] = [
  {
    slug: "olamide-ismail",
    name: "Olamide Ismail",
    role: "Founder and CEO",
    image: ismailOlamideImage,
    shortBio:
      "Olamide Ismail leads Octalve with a clear focus on building high-value digital systems, growth infrastructure, and modern business solutions for ambitious brands and organizations.",
    intro:
      "As Founder and CEO, he oversees the company’s strategic direction, product vision, partnerships, and execution culture. His work centers on helping businesses launch stronger, operate smarter, and scale with better brand, web, software, and growth systems.",
    responsibilities: [
      "Define and lead Octalve’s long-term vision, positioning, and expansion strategy.",
      "Oversee business development, partnerships, and growth opportunities across all Octalve models.",
      "Guide product, brand, and service direction to ensure quality and market relevance.",
      "Lead high-level execution, decision-making, and innovation across teams and initiatives.",
    ],
  },
  {
    slug: "adedotun-idowu",
    name: "Adedotun Idowu",
    role: "Project Manager",
    image: adedotunIdowuImage,
    shortBio:
      "Adedotun Idowu coordinates project execution at Octalve, ensuring that timelines, deliverables, and communication stay aligned from kickoff to completion.",
    intro:
      "As Project Manager, he translates strategy into organized execution. He works closely with design, development, and operations to keep client work moving efficiently while maintaining clarity, structure, and delivery discipline.",
    responsibilities: [
      "Coordinate project timelines, milestones, and team workflow across deliverables.",
      "Manage communication between internal teams and clients for smooth execution.",
      "Track progress, identify blockers, and ensure project quality standards are maintained.",
      "Support operational efficiency and timely delivery across multiple workstreams.",
    ],
  },
  {
    slug: "arowolo-aminat",
    name: "Arowolo Aminat",
    role: "Secretary",
    image: arowoloAminatImage,
    shortBio:
      "Arowolo Aminat supports the administrative and coordination backbone of Octalve, helping maintain order, communication flow, and internal organization.",
    intro:
      "As Secretary, she plays an important role in documentation, scheduling, correspondence, and internal coordination. Her work helps the company stay structured and responsive in day-to-day operations.",
    responsibilities: [
      "Manage internal documentation, records, and official correspondence.",
      "Support scheduling, meeting coordination, and administrative follow-through.",
      "Assist with communication flow between teams, leadership, and external contacts.",
      "Help maintain organized operational processes across the company.",
    ],
  },
];

export function getLeadershipMemberBySlug(slug: string) {
  return leadershipMembers.find((member) => member.slug === slug);
}
