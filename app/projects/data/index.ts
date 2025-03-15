// /data/index.ts

// -------------------------- INTERFACES --------------------------

// Project-related interfaces
export interface Project {
  id: string;
  title: string;
  description: string;
  details: {
    mainInfo: {
      title: string;
      description: string;
      image: string;
    };
    keyFeatures: {
      title: string;
      bullets?: string[];
    };
    techStack: {
      title: string;
      description: string;
      image: string;
      stack: { name: string; icon: string }[];
    };
  };
}

// Wobble Card Data interface
export interface WobbleCardData {
  mainInfo: {
    title: string;
    description: string;
    image: string;
  };
  keyFeatures: {
    title: string;
    bullets?: string[];
  };
  techStack: {
    title: string;
    description: string;
    image: string;
    stack: { name: string; icon: string }[];
  };
}

// Product interface
export interface Product {
  title: string;
  thumbnail: string;
  description: string;
  category: string;
}

// Slider interface
export interface SlideItem {
  type: "image" | "video";
  src: string;
}

// Hero Header Data interface (for your hero component)
export interface HeroHeaderData {
  title: string;
  description: string;
}

// -------------------------- DATA --------------------------

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "FinTech AI & Blockchain",
    description: "Moderná platforma pre AI a blockchain riešenia.",
    details: {
      mainInfo: {
        title: "AI-poháňaná FinTech Analýza",
        description:
          "Využite silu umelej inteligencie na detailnú analýzu finančných dát a získajte konkurenčnú výhodu na trhu.",
        image: "/images/Fintech/Hero3.png",
      },
      keyFeatures: {
        title: "Integrácia Blockchain Technológií",
        bullets: [
          "Moderný dizajn",
          "Využitie Open A.I modelu na spracovanie dát",
          "Zabezpečná databáza",
          "Responzívny dizajn",
        ],
      },
      techStack: {
        title: "Moderný Technologický Stack",
        description:
          "Naša platforma je postavená na najnovších technológiách ako React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion a Docker, čo zaručuje spoľahlivosť a efektivitu.",
        image: "/images/Fintech/Hero3.png",
        stack: [
          { name: "React", icon: "FaReact" },
          { name: "Node.js", icon: "FaNodeJs" },
          { name: "Express", icon: "SiExpress" },
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Framer Motion", icon: "SiFramer" },
          { name: "Docker", icon: "FaDocker" },
          { name: "AI", icon: "SiOpenai" },
        ],
      },
    },
  },
  {
    id: "2",
    title: "Decentralized Finance Hub",
    description: "Inovatívna platforma pre decentralizované finančné riešenia.",
    details: {
      mainInfo: {
        title: "Decentralizovaná Finančná Analýza",
        description:
          "Využite potenciál decentralizácie a blockchain technológií pre transparentné a bezpečné finančné operácie, ktoré transformujú tradičný finančný sektor.",
        image: "/images/Fintech/Hero3.png",
      },
      keyFeatures: {
        title: "Kľúčové inovácie platformy",
        bullets: [
          "Decentralizovaná bezpečnosť",
          "Transparentné transakcie",
          "Inovatívne smart kontrakty",
          "Optimalizovaná používateľská skúsenosť",
        ],
      },
      techStack: {
        title: "Moderný Technologický Stack",
        description:
          "Platforma využíva najnovšie technológie pre decentralizáciu, vrátane React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion a Docker, čo zabezpečuje rýchlosť a škálovateľnosť.",
        image: "/images/Fintech/Hero3.png",
        stack: [
          { name: "React", icon: "FaReact" },
          { name: "Node.js", icon: "FaNodeJs" },
          { name: "Express", icon: "SiExpress" },
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Framer Motion", icon: "SiFramer" },
          { name: "Docker", icon: "FaDocker" },
          { name: "Blockchain", icon: "SiOpenai" },
        ],
      },
    },
  },
];

// Wobble Card Data
export const wobbleCardData: WobbleCardData = {
  mainInfo: {
    title: "AI-poháňaná FinTech Analýza",
    description:
      "Využite silu umelej inteligencie na detailnú analýzu finančných dát a získajte konkurenčnú výhodu na trhu.",
    image: "/images/Fintech/AI1.png",
  },
  keyFeatures: {
    title: "Kľúčové aspekty projektu",
    bullets: [
      "Moderný dizajn",
      "Využitie Open A.I modelu na spracovanie dát",
      "Zabezpečná databáza",
      "Responzívny dizajn",
    ],
  },
  techStack: {
    title: "Moderný Technologický Stack",
    description:
      "Naša platforma je postavená na najnovších technológiách ako React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion a Docker, čo zaručuje spoľahlivosť a efektivitu.",
    image: "/images/Fintech/Hero3.png",
    stack: [
      { name: "React", icon: "FaReact" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "Docker", icon: "FaDocker" },
      { name: "Open A.I", icon: "SiOpenai" },
    ],
  },
};

// Products
export const products: Product[] = [
  {
    title: "AI Analysis",
    thumbnail: "/images/Fintech/AI1.png",
    description: "AI-powered analytics for financial institutions.",
    category: "AI",
  },
  {
    title: "AI Security",
    thumbnail: "/images/Fintech/AI2.png",
    description: "Advanced AI-driven cybersecurity solutions.",
    category: "Security",
  },
  {
    title: "Blockchain Network",
    thumbnail: "/images/Fintech/Blockchain.png",
    description: "Secure blockchain-based financial transactions.",
    category: "Blockchain",
  },
  {
    title: "Blockchain Analytics",
    thumbnail: "/images/Fintech/Blockchain2.png",
    description: "Real-time analytics for blockchain transactions.",
    category: "Blockchain",
  },
  {
    title: "Fintech Hub",
    thumbnail: "/images/Fintech/Hero2.png",
    description: "Comprehensive platform for fintech innovations.",
    category: "FinTech",
  },
  {
    title: "Neobank Solutions",
    thumbnail: "/images/Fintech/Hero3.png",
    description: "Next-generation banking solutions using AI.",
    category: "FinTech",
  },
  {
    title: "Crypto Insights",
    thumbnail: "/images/Fintech/Hero4.png",
    description: "Stay ahead with crypto trends and insights.",
    category: "Crypto",
  },
  {
    title: "Smart Investments",
    thumbnail: "/images/Fintech/AI3.png",
    description: "AI-driven investment strategies for businesses.",
    category: "Investments",
  },
  {
    title: "Digital Payments",
    thumbnail: "/images/Fintech/AI4.png",
    description: "Revolutionizing payments with blockchain technology.",
    category: "Payments",
  },
  {
    title: "Blockchain Compliance",
    thumbnail: "/images/Fintech/Blockchain3.png",
    description: "Ensure regulatory compliance in blockchain finance.",
    category: "Compliance",
  },
];

// Slider Data (for Tabs)
export const heroSlides: SlideItem[] = [
  { type: "video", src: "/images/Fintech/hero-video.mp4" },
  { type: "image", src: "/images/Fintech/Hero1.png" },
  { type: "image", src: "/images/Fintech/Hero2.png" },
  { type: "image", src: "/images/Fintech/Hero3.png" },
  { type: "image", src: "/images/Fintech/Hero4.png" },
];

export const blockchainSlides: SlideItem[] = [
  { type: "video", src: "/images/Fintech/blockchain-video.mp4" },
  { type: "image", src: "/images/Fintech/Blockchain.png" },
  { type: "image", src: "/images/Fintech/Blockchain2.png" },
  { type: "image", src: "/images/Fintech/Blockchain3.png" },
  { type: "image", src: "/images/Fintech/Bloockchain1.png" },
];

export const analyzeSlides: SlideItem[] = [
  { type: "video", src: "/images/Fintech/Analyza-video.mp4" },
  { type: "image", src: "/images/Fintech/Analyza.png" },
  { type: "image", src: "/images/Fintech/Analyza2.png" },
  { type: "image", src: "/images/Fintech/Analyza3.png" },
  { type: "image", src: "/images/Fintech/Analyza4.png" },
  { type: "image", src: "/images/Fintech/Analyza5.png" },
  { type: "image", src: "/images/Fintech/Analyza7.png" },
  { type: "image", src: "/images/Fintech/Analyza8.png" },
];

export const aiSlides: SlideItem[] = [
  { type: "video", src: "/images/Fintech/Ai-video.mp4" },
  { type: "image", src: "/images/Fintech/AI.png" },
  { type: "image", src: "/images/Fintech/AI2.png" },
  { type: "image", src: "/images/Fintech/AI3.png" },
  { type: "image", src: "/images/Fintech/AI4.png" },
];

// Hero Header Data (for the HeroParallax component)
export const heroHeader: HeroHeaderData = {
  title: "Moderná FinTech Stránka\npoháňaná A.I.",
  description:
    "Webová platforma zameraná na FinTech, AI a blockchain. Poskytuje informácie o najnovších technológiách a ponúka AI-poháňaný nástroj na FinTech analýzu pre firmy.",
};
