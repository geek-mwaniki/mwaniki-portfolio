
export type Insight = {
  title: string;
  date: string;
  category: string;
  description: string;
  url: string;
  type: "Article" | "Post";
};

export const insights: Insight[] = [
  {
    title: "Is the Internet Becoming More Centralised Underneath Our Feet?",
    date: "September 2026",
    category: "Internet Infrastructure",
    description:
      "An exploration of internet interconnection, IXPs, traffic paths and digital independence.",
    url: "https://www.linkedin.com/pulse/internet-becoming-more-centralised-underneath-our-feet-angela-mwaniki-z4esf",
    type: "Article",
  },
  {
    title: "Kenya's Fibre Cable Mess: Kenya Power & ISPs Need a Better Way",
    date: "2026",
    category: "Connectivity & Infrastructure",
    description:
      "Examining fibre infrastructure challenges, cable damage and the need for better coordination.",
    url: "https://www.linkedin.com/pulse/kenyas-fibre-cable-mess-kenya-power-isps-need-better-way-mwaniki-f3qpf/",
    type: "Article",
  },
  {
    title: "The Challenges of an ISP in Kenya",
    date: "2026",
    category: "ISP Industry",
    description:
      "Exploring the operational and commercial realities of running an internet service provider in Kenya.",
    url: "https://lnkd.in/p/dCmiV4wy",
    type: "Article",
  },
  {
    title: "What a Matatu in Wangige Taught Me About Teamwork",
    date: "June 2026",
    category: "Business & Technology",
    description:
      "A lesson in teamwork, communication and how shared systems help people work better together.",
    url: "https://www.linkedin.com/pulse/what-matatu-wangige-taught-me-teamwork-angela-mwaniki-me6bf",
    type: "Article",
  },
  {
    title: "Confessions of a Backend Engineer in Sales",
    date: "April 2026",
    category: "Software & Connectivity",
    description:
      "Why good software still depends on reliable infrastructure, and what the gap between the two means for businesses.",
    url: "https://www.linkedin.com/pulse/confessions-backend-engineer-sales-why-your-software-cant-mwaniki-78k9f",
    type: "Article",
  },
];
