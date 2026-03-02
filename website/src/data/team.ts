export interface TeamMember {
  name: string;
  title: string;
  image?: string;
  bio: string[];
  education?: string;
}

export const principals: TeamMember[] = [
  {
    name: "Tom Kaplan",
    title: "Founder",
    image: "/images/team/tom-kaplan.png",
    bio: [
      "Founded Hamilton in 2005.",
      "Former CFO of publicly traded REIT (Amex: HCM) and EVP for Capital Markets of NYSE-traded lender (FMAX).",
      "Previously headed principal investments at RBS Greenwich Capital.",
      "Directed Mortgage-Backed Securities Credit Trading at Credit Suisse First Boston.",
    ],
    education: "Yale University (cum laude, Economics with distinction)",
  },
  {
    name: "Ethan Ard",
    title: "Principal",
    image: "/images/team/ethan-ard.png",
    bio: [
      "Career as investor, technologist and management consultant.",
      "Led engineering teams at Microsoft building cloud services (7 years).",
      "McKinsey consultant (5 years) serving private equity, insurance, and banking.",
      "Vice President at Innovatus Capital Partners (3 years).",
    ],
    education:
      "Harvard University (BA Economics, 2000); University of Michigan (MBA, 2011)",
  },
];

export const leadership: TeamMember[] = [
  {
    name: "John Morrison",
    title: "President",
    bio: [
      "Oversees property operations, management, maintenance, and accounting.",
      "Joined in 2019 with 20+ years as regional manager at institutional property managers.",
      "Previous: Woda Cooper, T&R Properties, Cardinal Group.",
    ],
    education: "Muskingum University (BS Computer Science)",
  },
  {
    name: "Johnny Hale",
    title: "Director of Maintenance",
    bio: [
      "Oversees building operations and renovations.",
      "40+ year career leading maintenance teams operating 5,000+ units in Central Ohio.",
    ],
  },
  {
    name: "Kyle Wilgus",
    title: "Controller",
    bio: [
      "Controller since 2019 from Hometeam Properties.",
      "Manages financial reporting and company information flow.",
    ],
    education: "Ohio State University (BS Accounting)",
  },
];

export const institutionLogos = [
  { name: "Yale", src: "/images/institutions/yale.jpg" },
  { name: "Harvard", src: "/images/institutions/harvard.jpg" },
  { name: "Microsoft", src: "/images/institutions/microsoft.png" },
  { name: "McKinsey", src: "/images/institutions/mckinsey.jpg" },
  { name: "Credit Suisse First Boston", src: "/images/institutions/csfb.jpg" },
  { name: "Greenwich Capital", src: "/images/institutions/greenwich.png" },
  { name: "University of Michigan", src: "/images/institutions/michigan.jpg" },
];
