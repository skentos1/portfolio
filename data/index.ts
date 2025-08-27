// /data/index.ts

// -------------------------- NAVIGÁCIA & TESTIMONIALY --------------------------

export const navItems = [
  { name: "Profil", link: "/#about" },
  { name: "Projekty", link: "/#projects" },
  { name: "Zručnosti", link: "/#features" },
  { name: "Kontakt", link: "/#contact" },
];

export const testimonials = [
  {
    quote:
      "Som študent Technickej univerzity v Košiciach. Študujem informačné technológie. Aktuálne som v 4. ročníku. Vo svojom voľnom čase ma baví spolupracovať a tvoriť rôzne projekty a tým inklinovať k software a web developmentu.",
    name: "Simon Kentoš",
    designation: "Vývojár",
    src: "/images/Simon.jpg",
  },
  {
    quote:
      "Aktuálne pracujem v CodeUppe na pozícií FullStack developer. Pracujem na rôznych projektoch pre klientov, ale aj na interných projektoch. Využívame moderné technológie ako Next.Js, Tailwind CSS, Framer Motion, Strapi, Supabase. V minulosti som pracoval aj s React, Node.Js, Express, MongoDB, MySQL.",
    name: "CodeUpp s.r.o",
    designation: "FullStack Developer",
    src: "/images/codeup.png",
  },
  {
    quote:
      "Taktiež zároveň pracujem v Syntaxe v IPS tíme ako Linux Administrátor na pozícií Junior IT Operátor.",
    name: "Syntax Systems s.r.o",
    designation: "Junior IT Operátor",
    src: "/images/syntax.jpg",
  },
  // Pridaj ďalšie testimonialy podľa potreby
];

export const socialMedia = [
  { id: 1, img: "/git.svg" },
  { id: 2, img: "/twit.svg" },
  { id: 3, img: "/link.svg" },
];

// -------------------------- INTERFACES --------------------------

// Interface pre slider taby projektu
export interface ProjectSliderTab {
  label: string; // napr. "Hero", "Blockchain", "Produkty" atď.
  slides: SlideItem[]; // pole slider položiek
}

// Rozšírený interface, ktorý obsahuje údaje pre kartičku aj detail projektu.
export interface FullProject {
  id: string;
  title: string; // napr. "FinTech AI & Blockchain"
  titleName: string; // názov pre zobrazenie na kartičke (môže byť rovnaký ako title)
  des: string; // stručný popis pre kartičku
  img: string; // thumbnail obrázok pre kartičku
  iconLists: string[]; // zoznam ikon pre kartičku
  link: string; // odkaz pre externé projekty alebo placeholder

  // Detailné údaje pre stránku projektu
  description: string; // podrobný popis projektu
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
    products?: Product[];
    sliderTabs?: ProjectSliderTab[];
    heroData?: HeroHeaderData; // dynamicky definované taby sliderov
  };
}

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

export interface Product {
  title: string;
  thumbnail: string;
  description: string;
  category: string;
}

export interface SlideItem {
  type: "image" | "video";
  src: string;
}

export interface HeroHeaderData {
  title: string;
  description: string;
}

// -------------------------- DATA PRE PROJEKTY (FullProject) --------------------------

export const projects: FullProject[] = [
  {
    id: "KBdigital",
    title: "KB Digital",
    titleName: "KB Digital Website",
    des: "Prezentačný web pre digitálnu agentúru KB Digital s moderným dizajnom a komplexnými službami.",
    img: "/images/KBdigital/kb1.png",
    iconLists: [
      "/images/next.webp",
      "/images/calc.avif",

      "/images/tail.svg",
      "/images/framer.svg",
    ],
    link: "https://kbdigital.eu/",
    description:
      "Moderná digitálna agentúra ponúkajúca komplexné riešenia pre váš online biznis.",
    details: {
      mainInfo: {
        title: "KB Digital Agency",
        description:
          "KB Digital je moderná digitálna agentúra, ktorá sa špecializuje na tvorbu webových stránok, e-commerce riešení, digitálny marketing a branding. Naša spoločnosť pomáha firmám etablovať sa v online svete pomocou inovatívnych technológií a kreatívnych riešení.",
        image: "/images/KBdigital/kb1.png",
      },
      keyFeatures: {
        title: "Naše Služby",
        bullets: [
          "Tvorba moderných webových stránok",
          "E-commerce a online obchody",
          "Digitálny marketing a SEO",
          "Grafický dizajn a branding",
          "Responzívny dizajn pre všetky zariadenia",
          "Správa sociálnych sietí",
          "UX/UI dizajn",
        ],
      },
      techStack: {
        title: "Technológie a Nástroje",
        description:
          "Používame najmodernejšie technológie a nástroje pre tvorbu webových stránok a digitálnych riešení. Naša expertíza zahŕňa frontend aj backend vývoj, dizajn, marketing automation a analytiku. Každý projekt realizujeme s dôrazom na výkon, bezpečnosť a používateľskú skúsenosť.",
        image: "/images/KBdigital/kb2.png",
        stack: [
          { name: "React", icon: "FaReact" },
          { name: "Node.js", icon: "FaNodeJs" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Framer Motion", icon: "SiFramer" },

          { name: "Photoshop", icon: "SiAdobephotoshop" },
          { name: "Figma", icon: "SiFigma" },
        ],
      },
      heroData: {
        title: "KB Digital - Váš Partner v Digitálnom Svete",
        description:
          "Transformujeme vaše nápady na úspešné online riešenia. Od návrhu po realizáciu - s nami dosiahnete digitálny úspech.",
      },
      products: [
        {
          title: "Hlavná stránka",
          thumbnail: "/images/KBdigital/kb1.png",
          description: "Moderný dizajn hlavnej stránky s hero sekciou",
          category: "KBdigital",
        },
        {
          title: "O nás sekcia",
          thumbnail: "/images/KBdigital/kb2.png",
          description: "Predstavenie tímu a firmy",
          category: "KBdigital",
        },
        {
          title: "Služby",
          thumbnail: "/images/KBdigital/kb3.png",
          description: "Prehľad všetkých ponúkaných služieb",
          category: "KBdigital",
        },
        {
          title: "Portfolio",
          thumbnail: "/images/KBdigital/kb4.png",
          description: "Ukážky realizovaných projektov",
          category: "KBdigital",
        },
        {
          title: "Referencie",
          thumbnail: "/images/KBdigital/kb5.png",
          description: "Spokojní klienti a ich hodnotenia",
          category: "KBdigital",
        },
        {
          title: "Kontakt",
          thumbnail: "/images/KBdigital/kb6.png",
          description: "Kontaktný formulár a informácie",
          category: "KBdigital",
        },
        {
          title: "Blog sekcia",
          thumbnail: "/images/KBdigital/kb7.png",
          description: "Články a novinky z digitálneho sveta",
          category: "KBdigital",
        },
        {
          title: "Mobilná verzia",
          thumbnail: "/images/KBdigital/kb8.png",
          description: "Responzívny dizajn pre mobilné zariadenia",
          category: "KBdigital",
        },
        {
          title: "Footer a navigácia",
          thumbnail: "/images/KBdigital/kb9.png",
          description: "Kompletná navigácia a pätička stránky",
          category: "KBdigital",
        },
      ],
      sliderTabs: [
        {
          label: "Prezentácia",
          slides: [
            { type: "video", src: "/images/KBdigital/KBDIgitalWeb.mp4" },
            { type: "image", src: "/images/KBdigital/kb1.png" },
            { type: "image", src: "/images/KBdigital/kb2.png" },
            { type: "image", src: "/images/KBdigital/kb3.png" },
          ],
        },
        {
          label: "Služby a Portfolio",
          slides: [
            { type: "image", src: "/images/KBdigital/kb4.png" },
            { type: "image", src: "/images/KBdigital/kb5.png" },
            { type: "image", src: "/images/KBdigital/kb6.png" },
            { type: "image", src: "/images/KBdigital/kb7.png" },
          ],
        },
        {
          label: "Responzívnosť",
          slides: [
            { type: "image", src: "/images/KBdigital/kb8.png" },
            { type: "image", src: "/images/KBdigital/kb9.png" },
          ],
        },
      ],
    },
  },
  {
    id: "Farmex",
    title: "Farmex",
    titleName: "Farmex - Inzertný Systém",
    des: "Moderný inzertný systém na štýl Bazos.sk s pokročilými funkciami ako rating, topovanie inzerátov a admin dashboard.",
    img: "/images/Farmex/f1.png",
    iconLists: [
      "/images/next.webp",
      "/images/strapi.svg",
      "/images/tail.svg",
      "/images/framer.svg",
    ],
    link: "https://farmex.sk/",
    description:
      "Komplexný inzertný portál s pokročilými funkciami a moderným dizajnom.",
    details: {
      mainInfo: {
        title: "Farmex - Inzertný Portál",
        description:
          "Farmex je moderný inzertný systém vytvorený na štýl populárneho Bazos.sk. Platforma umožňuje používateľom pridávať, prehliadať a spravovať inzeráty s pokročilými funkciami ako rating systém, topovanie inzerátov cez SMS, vyhľadávanie podobných inzerátov a komplexný admin dashboard pre správu celého systému.",
        image: "/images/Farmex/f1.png",
      },
      keyFeatures: {
        title: "Kľúčové Funkcie",
        bullets: [
          "Pridávanie a správa inzerátov",
          "Rating systém pre používateľov",
          "Topovanie inzerátov cez SMS platby",
          "Vyhľadávanie podobných inzerátov",
          "Admin dashboard pre správu",
          "Pokročilé filtrovanie a kategórie",
          "Responzívny dizajn pre všetky zariadenia",
          "Notifikácie a správy medzi používateľmi",
        ],
      },
      techStack: {
        title: "Moderné Technológie",
        description:
          "Farmex je postavený na najmodernejších technológiách. Využíva Next.js pre frontend s optimalizáciou výkonu, Strapi ako headless CMS pre správu obsahu, Tailwind CSS pre styling a mobilné optimalizácie. Systém obsahuje pokročilé algoritmy pre podobné inzeráty, SMS API integráciu pre platby a robustný rating systém.",
        image: "/images/Farmex/f2.png",
        stack: [
          { name: "Next.js", icon: "SiNextdotjs" },

          { name: "Strapi", icon: "SiStrapi" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Typescript", icon: "SiTypescript" },

          { name: "SMS Gateway", icon: "SiTwilio" },
        ],
      },
      heroData: {
        title: "Farmex - Váš Inzertný Partner",
        description:
          "Objavte najlepší spôsob, ako predávať a nakupovať online. S pokročilými funkciami a používateľsky prívetivým rozhraním je Farmex perfektným miestom pre vaše inzeráty.",
      },
      products: [
        {
          title: "Hlavná stránka",
          thumbnail: "/images/Farmex/f1.png",
          description: "Moderný dizajn úvodnej stránky s najnovšími inzerátmi",
          category: "Farmex",
        },
        {
          title: "Zoznam inzerátov",
          thumbnail: "/images/Farmex/f2.png",
          description: "Prehľadný listing všetkých inzerátov s filtrami",
          category: "Farmex",
        },
        {
          title: "Detail inzerátu",
          thumbnail: "/images/Farmex/f3.png",
          description: "Detailná stránka inzerátu s galériu a popisom",
          category: "Farmex",
        },
        {
          title: "Pridanie inzerátu",
          thumbnail: "/images/Farmex/f4.png",
          description: "Formulár pre pridanie nového inzerátu",
          category: "Farmex",
        },
        {
          title: "Kategórie",
          thumbnail: "/images/Farmex/f5.png",
          description: "Prehľad všetkých dostupných kategórií",
          category: "Farmex",
        },
        {
          title: "Vyhľadávanie",
          thumbnail: "/images/Farmex/f6.png",
          description: "Pokročilé vyhľadávanie s filtrami",
          category: "Farmex",
        },
        {
          title: "Používateľský profil",
          thumbnail: "/images/Farmex/f7.png",
          description: "Profil používateľa s hodnoteniami a inzerátmi",
          category: "Farmex",
        },
        {
          title: "Rating systém",
          thumbnail: "/images/Farmex/f8.png",
          description: "Systém hodnotenia a recenzií",
          category: "Farmex",
        },
        {
          title: "Topovanie inzerátov",
          thumbnail: "/images/Farmex/f9.png",
          description: "SMS platby pre zvýraznenie inzerátov",
          category: "Farmex",
        },
        {
          title: "Admin dashboard",
          thumbnail: "/images/Farmex/f10.png",
          description: "Administrátorské rozhranie pre správu systému",
          category: "Farmex",
        },
        {
          title: "Správa používateľov",
          thumbnail: "/images/Farmex/f11.png",
          description: "Admin nástroje pre správu používateľov",
          category: "Farmex",
        },
        {
          title: "Analytika",
          thumbnail: "/images/Farmex/f12.png",
          description: "Štatistiky a analytické prehľady",
          category: "Farmex",
        },
        {
          title: "Mobilná verzia",
          thumbnail: "/images/Farmex/f13.png",
          description: "Optimalizácia pre mobilné zariadenia",
          category: "Farmex",
        },
        {
          title: "Notifikácie",
          thumbnail: "/images/Farmex/f14.png",
          description: "Systém upozornení a správ",
          category: "Farmex",
        },
        {
          title: "Podobné inzeráty",
          thumbnail: "/images/Farmex/f15.png",
          description: "AI algoritmus pre návrhy podobných inzerátov",
          category: "Farmex",
        },
        {
          title: "Nastavenia",
          thumbnail: "/images/Farmex/f16.png",
          description: "Užívateľské nastavenia a preferencie",
          category: "Farmex",
        },
        {
          title: "Footer a kontakt",
          thumbnail: "/images/Farmex/f17.png",
          description: "Kontaktné informácie a odkazy",
          category: "Farmex",
        },
      ],
      sliderTabs: [
        {
          label: "Prezentácia",
          slides: [
            { type: "image", src: "/images/Farmex/f1.png" },
            { type: "image", src: "/images/Farmex/f2.png" },
            { type: "image", src: "/images/Farmex/f3.png" },
            { type: "image", src: "/images/Farmex/f4.png" },
          ],
        },
        {
          label: "Inzeráty a Kategórie",
          slides: [
            { type: "image", src: "/images/Farmex/f5.png" },
            { type: "image", src: "/images/Farmex/f6.png" },
            { type: "image", src: "/images/Farmex/f7.png" },
            { type: "image", src: "/images/Farmex/f8.png" },
            { type: "image", src: "/images/Farmex/f9.png" },
          ],
        },
        {
          label: "Admin a Funkcie",
          slides: [
            { type: "image", src: "/images/Farmex/f10.png" },
            { type: "image", src: "/images/Farmex/f11.png" },
            { type: "image", src: "/images/Farmex/f12.png" },
            { type: "image", src: "/images/Farmex/f13.png" },
          ],
        },
        {
          label: "Pokročilé Funkcie",
          slides: [
            { type: "image", src: "/images/Farmex/f14.png" },
            { type: "image", src: "/images/Farmex/f15.png" },
            { type: "image", src: "/images/Farmex/f16.png" },
            { type: "image", src: "/images/Farmex/f17.png" },
          ],
        },
      ],
    },
  },
  {
    id: "FinTech",
    title: "FinTech Website",
    titleName: "FinTech Website",
    des: "Projekt pre moju bakalársku prácu, obsahuje nástroj na analýzu poháňaný A.I.",
    img: "/images/Fintech.png",
    iconLists: [
      "/images/re.svg",
      "/images/node.svg",
      "/images/framer.svg",
      "/images/tail.svg",
      "/images/dock.svg",
    ],
    link: "https://bakalarka-hosting-1.onrender.com/",
    description: "Moderná platforma pre AI a blockchain riešenia.",
    details: {
      mainInfo: {
        title: "AI-poháňaná FinTech Analýza",
        description:
          "Táto stránka predstavuje informácie o FinTechu, opisuje najnovšie technológie a ich aktuálne trendy vo finančníctve. Taktiež obsahuje A.I nástroj, ktorý vykonáva FinTech analýzu pre podniky.",
        image: "/images/Fintech/Hero3.png",
      },
      keyFeatures: {
        title: "Kľúčové prvky",
        bullets: [
          "Moderný dizajn",
          "Ručný styling",
          "Využitie Open A.I modelu na spracovanie dát",
          "Využitie Open A.I modelu na vykonanie analýzy",
          "Responzívny dizajn",
          "Zabezpečená databáza",
        ],
      },
      techStack: {
        title: "Moderný Technologický Stack",
        description:
          "Naša platforma je postavená na najnovších technológiách ako React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion a Docker, čo zaručuje spoľahlivosť a efektivitu. Využíva open A.I model na prácu s dátami a následne sú tieto dáta spracovávané a podávané používateľom.",
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
      heroData: {
        title: "Inovatívna FinTech Platforma\n",
        description:
          "Táto platforma obsahuje informácie o Technológiách vo finančníctve. Napríklad o BlockChaine alebo Umelej Inteligencii, taktiež obsahuje nástroj na anlýzu poháňaný A.I.",
      },
      sliderTabs: [
        {
          label: "Hero",
          slides: [
            { type: "video", src: "/images/Fintech/hero-video.mp4" },
            { type: "image", src: "/images/Fintech/Hero1.png" },
            { type: "image", src: "/images/Fintech/Hero2.png" },
            { type: "image", src: "/images/Fintech/Hero3.png" },
            { type: "image", src: "/images/Fintech/Hero4.png" },
          ],
        },
        {
          label: "Blockchain",
          slides: [
            { type: "video", src: "/images/Fintech/blockchain-video.mp4" },
            { type: "image", src: "/images/Fintech/Blockchain.png" },
            { type: "image", src: "/images/Fintech/Blockchain2.png" },
            { type: "image", src: "/images/Fintech/Blockchain3.png" },
            { type: "image", src: "/images/Fintech/Bloockchain1.png" },
          ],
        },
        {
          label: "A.I Analýza",
          slides: [
            { type: "video", src: "/images/Fintech/Analyza-video.mp4" },
            { type: "image", src: "/images/Fintech/Analyza.png" },
            { type: "image", src: "/images/Fintech/Analyza2.png" },
            { type: "image", src: "/images/Fintech/Analyza3.png" },
            { type: "image", src: "/images/Fintech/Analyza4.png" },
            { type: "image", src: "/images/Fintech/Analyza5.png" },
            { type: "image", src: "/images/Fintech/Analyza7.png" },
            { type: "image", src: "/images/Fintech/Analyza8.png" },
          ],
        },
        {
          label: "Umelá Inteligencia",
          slides: [
            { type: "video", src: "/images/Fintech/Ai-video.mp4" },
            { type: "image", src: "/images/Fintech/AI.png" },
            { type: "image", src: "/images/Fintech/AI2.png" },
            { type: "image", src: "/images/Fintech/AI3.png" },
            { type: "image", src: "/images/Fintech/AI4.png" },
          ],
        },
      ],
    },
  },
  {
    id: "Spravtozamna",
    title: "SpravToZaMna",
    titleName: "SpravToZaMna.eu",
    des: "Platforma, ktorá ponúka používateľom pridávať práce, ktoré im môže nejaký pracovník vykonať.",
    img: "/images/spravto.png",
    iconLists: [
      "/images/re.svg",
      "/images/node.svg",
      "/images/js.svg",
      "/images/tail.svg",
      "/images/stripe.svg",
    ],
    link: "https://spravtozamna.eu/",
    description:
      "Platforma pre správu prác - detaily prispôsob si podľa potreby.",
    details: {
      mainInfo: {
        title: "SpravToZaMna.eu",
        description:
          "Platforma, ktorá umožňuje používateľom pridávať joby pre bežných ľudí, na ktoré nemajú čas. A bežní ľudia im to prídu vykonať. Po vykonaní práce im prídu peniaze na účet, ktoré Tvorca práce ponúkol pri zadávaní práce. Informácie o práci sú posielané Emailom.",
        image: "/images/spravto.png",
      },
      keyFeatures: {
        title: "Kľúčové Funkcie",
        bullets: [
          "Komplexný projekt",
          "Obsiahlý Backend",
          "Konfigurácia platobnej brány",
          "Automatické potvrdenie platieb po vykonaní práce",
          "Práca s Google Maps API",
          "Zabezpečená databáza",
          "Bohatý State Management",
        ],
      },
      techStack: {
        title: "Použité Technológie",
        description:
          "Platforma postavená na moderných technológiách pre zabezpečenú a spoľahlivú prevádzku. Obsahuje pokročilú konfiguráciu platobnej brány STRIPE. Platba kartou pri potvrdzovaní používateľa pre JOB, no nie je hneď potvrdená. Platba sa potvrdí až po vykonaní práce. Connected accounts, Práca s Google Maps pre polohu práce, Práca s GMAIL API. Práca s GeoNames  pre doplňanie názvu miest. Množstvo komplexných stavov prác, používateľov.",
        image: "/images/spravto.png",
        stack: [
          { name: "React", icon: "FaReact" },
          { name: "Node.js", icon: "FaNodeJs" },
          { name: "Express", icon: "SiExpress" },
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Framer Motion", icon: "SiFramer" },
          { name: "Stripe", icon: "FaStripe " },
          { name: "Google Maps", icon: "SiGooglemaps  " },
        ],
      },
      heroData: {
        title: "SpravToZaMna platforma",
        description:
          "Platoforma, ktorá ponúka možnosť používateľom ponúknuť prácu niekomu, kto si chce privyrobiť a príde mu ju vykonať.",
      },
      products: [
        {
          title: "Hero.png",
          thumbnail: "/images/SpravTo/Hero.png",
          description: "Ukážkový popis pre Hero.png",
          category: "SpravTo",
        },
        {
          title: "Hero2.png",
          thumbnail: "/images/SpravTo/Hero2.png",
          description: "Ukážkový popis pre Hero2.png",
          category: "SpravTo",
        },
        {
          title: "Hero3.png",
          thumbnail: "/images/SpravTo/Hero3.png",
          description: "Ukážkový popis pre Hero3.png",
          category: "SpravTo",
        },
        {
          title: "Hero4.png",
          thumbnail: "/images/SpravTo/Hero4.png",
          description: "Ukážkový popis pre Hero4.png",
          category: "SpravTo",
        },
        {
          title: "Hero5.png",
          thumbnail: "/images/SpravTo/Hero5.png",
          description: "Ukážkový popis pre Hero5.png",
          category: "SpravTo",
        },
        {
          title: "O nas.png",
          thumbnail: "/images/SpravTo/O nas.png",
          description: "Ukážkový popis pre O nas.png",
          category: "SpravTo",
        },
        {
          title: "AkoFung2.png",
          thumbnail: "/images/SpravTo/AkoFung2.png",
          description: "Ukážkový popis pre AkoFung2.png",
          category: "SpravTo",
        },
        {
          title: "AkoFung3.png",
          thumbnail: "/images/SpravTo/AkoFung3.png",
          description: "Ukážkový popis pre AkoFung3.png",
          category: "SpravTo",
        },
        {
          title: "Ponuky.png",
          thumbnail: "/images/SpravTo/Ponuky.png",
          description: "Ukážkový popis pre Ponuky.png",
          category: "SpravTo",
        },

        {
          title: "Profil.png",
          thumbnail: "/images/SpravTo/Profil.png",
          description: "Ukážkový popis pre Profil.png",
          category: "SpravTo",
        },
      ],
      sliderTabs: [
        {
          label: "Hero",
          slides: [
            { type: "video", src: "/images/SpravTo/Hero-video.mp4" },
            { type: "image", src: "/images/SpravTo/Hero.png" },
            { type: "image", src: "/images/SpravTo/Hero2.png" },
            { type: "image", src: "/images/SpravTo/Hero3.png" },
            { type: "image", src: "/images/SpravTo/Hero4.png" },
            { type: "image", src: "/images/SpravTo/Hero5.png" },
          ],
        },
        {
          label: "Ponuky Prác",
          slides: [
            { type: "video", src: "/images/SpravTo/Ponuky-video.mp4" },
            { type: "image", src: "/images/SpravTo/Ponuky.png" },
            { type: "image", src: "/images/SpravTo/Praca.png" },
            { type: "image", src: "/images/SpravTo/Praca2.png" },
            { type: "image", src: "/images/SpravTo/Praca3.png" },
            { type: "image", src: "/images/SpravTo/Praca4.png" },
          ],
        },
        {
          label: "O nás",
          slides: [
            { type: "video", src: "/images/SpravTo/Onas-video.mp4" },
            { type: "image", src: "/images/SpravTo/O nas.png" },
            { type: "image", src: "/images/SpravTo/O nas2.png" },
            { type: "image", src: "/images/SpravTo/O nas3.png" },
            { type: "image", src: "/images/SpravTo/O nas4.png" },
          ],
        },
        {
          label: "Ako fungujeme?",
          slides: [
            { type: "image", src: "/images/SpravTo/AkoFung.png" },
            { type: "image", src: "/images/SpravTo/AkoFung2.png" },
            { type: "image", src: "/images/SpravTo/AkoFung3.png" },
            { type: "image", src: "/images/SpravTo/AkoFung4.png" },
            { type: "image", src: "/images/SpravTo/AkoFung5.png" },
          ],
        },
        {
          label: "Iné",
          slides: [
            { type: "video", src: "/images/SpravTo/mojprofil-video.mp4" },
            { type: "image", src: "/images/SpravTo/Profil.png" },
            { type: "image", src: "/images/SpravTo/Profil2.png" },
            { type: "image", src: "/images/SpravTo/CreatorJob.png" },
            { type: "image", src: "/images/SpravTo/CreatorJob2.png" },
            { type: "image", src: "/images/SpravTo/CreatorJob3.png" },
            { type: "image", src: "/images/SpravTo/CreatorJob4.png" },
            { type: "image", src: "/images/SpravTo/WorkerJob.png" },
            { type: "image", src: "/images/SpravTo/WorkerJob2.png" },
            { type: "image", src: "/images/SpravTo/Vytvorit pracu.png" },
            { type: "image", src: "/images/SpravTo/Vytvorit pracu2.png" },
            { type: "image", src: "/images/SpravTo/Vytvorit pracu3.png" },
            { type: "image", src: "/images/SpravTo/Ine1.png" },
            { type: "image", src: "/images/SpravTo/Ine2.png" },
            { type: "image", src: "/images/SpravTo/Ine3.png" },
          ],
        },
      ],
    },
    // sliderTabs pre spravto nebudeme definovať
  },

  {
    id: "IntelliHome",
    title: "IntelliHome Website",
    titleName: "IntelliHome Website",
    des: "Webová stránka, ktorá ponúka inteligentné riešenia pre vašu domácnosť.",
    img: "/images/Intelli.png",
    iconLists: [
      "/images/re.svg",
      "/images/node.svg",
      "/images/js.svg",
      "/images/tail.svg",
      "/images/strapi.svg",
    ],
    link: "https://intellihomehost.onrender.com/",
    description:
      "Ponúkame inteligentné svetlá, brány, vykurovanie a kamerové systémy pre modernú domácnosť na objednávku.",
    details: {
      mainInfo: {
        title: "IntelliHome: ",
        description:
          "Webová aplikácia, ktorá ponúka možnosti ako môžete vylepšiť svoju domácnosť pomocou inteligentých zariadení. Projekt, ktorý obsahuje moderný dizajn, prácu napríklad s GMAIL API, STRAPI .",
        image: "/images/IntelliHome/hero.png",
      },
      keyFeatures: {
        title: "Kľúčové Vlastnosti IntelliHome",
        bullets: [
          "Vlastný styling, bez hotových componentov",
          "Filtrovanie produktov",
          "Implementácia emailov pre objednávky",
          "Fakturizácia v PDF prílohe",
          "Pridávanie obsahu pomocou CMS (v implementácií)",
        ],
      },
      techStack: {
        title: "Pokročilá Technologická Architektúra",
        description:
          "Na tvorbu tohto projektu som použil React, Express a Node.js, MongoDB, celý styling stránky je pomocou Tailwind Css. Tento projekt využíva taktiež gmail API, PDF, a Strapi na dynamické menenie obsahu Majiteľom.",
        image: "/images/IntelliHome/hero.png",
        stack: [
          { name: "React", icon: "FaReact" },
          { name: "Node.js", icon: "FaNodeJs" },
          { name: "Express", icon: "SiExpress" },
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Strapi", icon: "SiStrapi" },
          { name: "GMAIL API", icon: "SiGmail" },
        ],
      },
      heroData: {
        title: "IntelliHome - Nová Éra Bývania",
        description:
          "Transformujte svoj domov na inteligentné, bezpečné a energeticky efektívne útočisko, kde moderné technológie prinášajú komfort, úsporu a vysokú úroveň ochrany pre celú rodinu.",
      },
      products: [
        {
          title: "hero.png",
          thumbnail: "/images/IntelliHome/hero.png",
          description: "Ukážkový popis pre hero.png",
          category: "IntelliHome",
        },
        {
          title: "hero2.png",
          thumbnail: "/images/IntelliHome/hero2.png",
          description: "Ukážkový popis pre hero2.png",
          category: "IntelliHome",
        },
        {
          title: "hero3.png",
          thumbnail: "/images/IntelliHome/hero3.png",
          description: "Ukážkový popis pre hero3.png",
          category: "IntelliHome",
        },
        {
          title: "jednotlive1.png",
          thumbnail: "/images/IntelliHome/jednotlive1.png",
          description: "Ukážkový popis pre jednotlive1.png",
          category: "IntelliHome",
        },
        {
          title: "jednotlive2.png",
          thumbnail: "/images/IntelliHome/jednotlive2.png",
          description: "Ukážkový popis pre jednotlive2.png",
          category: "IntelliHome",
        },
        {
          title: "jednotlive3.png",
          thumbnail: "/images/IntelliHome/jednotlive3.png",
          description: "Ukážkový popis pre jednotlive3.png",
          category: "IntelliHome",
        },
        {
          title: "jednotlive4.png",
          thumbnail: "/images/IntelliHome/jednotlive4.png",
          description: "Ukážkový popis pre jednotlive4.png",
          category: "IntelliHome",
        },
        {
          title: "jednotlive5.png",
          thumbnail: "/images/IntelliHome/jednotlive5.png",
          description: "Ukážkový popis pre jednotlive5.png",
          category: "IntelliHome",
        },
        {
          title: "objdnvka5.png",
          thumbnail: "/images/IntelliHome/objdnavka5.png",
          description: "Ukážkový popis pre objdnvka5.png",
          category: "IntelliHome",
        },
        {
          title: "objdnvka6.png",
          thumbnail: "/images/IntelliHome/objdnavka6.png",
          description: "Ukážkový popis pre objdnvka6.png",
          category: "IntelliHome",
        },
        {
          title: "objdnvka7.png",
          thumbnail: "/images/IntelliHome/objdnavka7.png",
          description: "Ukážkový popis pre objdnvka7.png",
          category: "IntelliHome",
        },
        {
          title: "produkty2.png",
          thumbnail: "/images/IntelliHome/produkty2.png",
          description: "Ukážkový popis pre produkty2.png",
          category: "IntelliHome",
        },
        {
          title: "stretnutie2.png",
          thumbnail: "/images/IntelliHome/stretnutie2.png",
          description: "Ukážkový popis pre stretnutie2.png",
          category: "IntelliHome",
        },
      ],
      sliderTabs: [
        {
          label: "Hero",
          slides: [
            { type: "video", src: "/images/IntelliHome/Inteli-hero.mp4" },
            { type: "image", src: "/images/IntelliHome/hero.png" },
            { type: "image", src: "/images/IntelliHome/hero2.png" },
            { type: "image", src: "/images/IntelliHome/hero3.png" },
          ],
        },
        {
          label: "Produkty",
          slides: [
            { type: "video", src: "/images/IntelliHome/produkty-video.mp4" },
            { type: "image", src: "/images/IntelliHome/produkty.png" },
            { type: "image", src: "/images/IntelliHome/produkty2.png" },
            { type: "image", src: "/images/IntelliHome/produkty3.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive1.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive2.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive3.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive4.png" },
            { type: "image", src: "/images/IntelliHome/jednotlive5.png" },
          ],
        },
        {
          label: "Objednavka",
          slides: [
            { type: "video", src: "/images/IntelliHome/objednavka-video.mp4" },
            { type: "image", src: "/images/IntelliHome/objednavka.png" },
            { type: "image", src: "/images/IntelliHome/objednavka1.png" },
            { type: "image", src: "/images/IntelliHome/objednavka2.png" },
            { type: "image", src: "/images/IntelliHome/objednavka3.png" },
            { type: "image", src: "/images/IntelliHome/objednavka4.png" },
            { type: "image", src: "/images/IntelliHome/objednavka5.png" },
            { type: "image", src: "/images/IntelliHome/objednavka6.png" },
            { type: "image", src: "/images/IntelliHome/objednavka7.png" },
          ],
        },
        {
          label: "Stretnutie",
          slides: [
            { type: "video", src: "/images/IntelliHome/meeting-video.mp4" },
            { type: "image", src: "/images/IntelliHome/stretnutie.png" },
            { type: "image", src: "/images/IntelliHome/stretnutie2.png" },
          ],
        },
      ],
    },
  },
];

// -------------------------- WOBBLE CARD DATA --------------------------

// FinTech wobble card
export const wobbleCardData: WobbleCardData = {
  mainInfo: {
    title: "Inovatívna Finančná Analýza",
    description:
      "Naša platforma využíva najmodernejšie technológie na poskytovanie detailných finančných analýz, ktoré umožňujú strategické rozhodovanie a optimalizáciu procesov.",
    image: "/images/Fintech/AI1.png",
  },
  keyFeatures: {
    title: "Kľúčové Prínosy",
    bullets: [
      "Rýchle a presné analýzy",
      "Bezpečná a transparentná technológia",
      "Optimalizácia finančných procesov",
      "Inteligentná automatizácia",
    ],
  },
  techStack: {
    title: "Použité Technológie",
    description:
      "Platforma je postavená na robustnom technologickom základe s využitím najnovších frameworkov a cloudových riešení, čo zaručuje jej spoľahlivosť a flexibilitu.",
    image: "/images/Fintech/Hero3.png",
    stack: [
      { name: "React", icon: "FaReact" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Strapi", icon: "SiStrapi" },
      { name: "Docker", icon: "FaDocker" },
      { name: "AI", icon: "SiOpenai" },
    ],
  },
};

// IntelliHome wobble card
export const intelliHomeWobbleCardData: WobbleCardData = {
  mainInfo: {
    title: "IntelliHome - Inteligentná Domácnosť",
    description:
      "Premeňte svoj domov na bezpečné a úsporné prostredie pomocou našich smart riešení. Vďaka inteligentným funkciám máte ovládanie vo svojich rukách – kedykoľvek a odkiaľkoľvek.",
    image: "/images/Fintech/IntelliHome/hero.png",
  },
  keyFeatures: {
    title: "Hlavné Výhody IntelliHome",
    bullets: [
      "Smart riadenie osvetlenia",
      "Automatické brány a dvere",
      "Efektívne vykurovanie a chladenie",
      "Pokročilé AI pre analýzu spotreby",
      "Rýchla inštalácia a jednoduché ovládanie",
    ],
  },
  techStack: {
    title: "Použité Technológie pre Smart Home",
    description:
      "Naše riešenia kombinujú IoT senzory s cloudovými platformami a AI, čo prináša vysokú mieru automatizácie a komfortu v každodennom živote.",
    image: "/images/Fintech/IntelliHome/hero3.png",
    stack: [
      { name: "React", icon: "FaReact" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "Docker", icon: "FaDocker" },
      { name: "IoT Devices", icon: "SiOpenai" },
    ],
  },
};

// -------------------------- PRODUCTS --------------------------

export const products: Product[] = [
  {
    title: "AI Analysis",
    thumbnail: "/images/Fintech/AI.png",
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

export const intelliHomeProducts: Product[] = [
  {
    title: "Smart Lights",
    thumbnail: "/images/Fintech/IntelliHome/lights.png",
    description:
      "Inteligentné osvetlenie ovládané cez mobil alebo hlasové povely.",
    category: "Lighting",
  },
  {
    title: "Automated Gates",
    thumbnail: "/images/Fintech/IntelliHome/gates.png",
    description: "Automatické brány na komfortný prístup a zvýšenú bezpečnosť.",
    category: "Security",
  },
  {
    title: "IntelliHeat System",
    thumbnail: "/images/Fintech/IntelliHome/heating.png",
    description: "Efektívne riadenie vykurovania na základe AI analýzy.",
    category: "Heating",
  },
  {
    title: "24/7 Camera Monitoring",
    thumbnail: "/images/Fintech/IntelliHome/cameras.png",
    description: "Kamerové systémy s cloudovým nahrávaním a detekciou pohybu.",
    category: "Security",
  },
  {
    title: "Smart Power Outlets",
    thumbnail: "/images/Fintech/IntelliHome/outlets.png",
    description: "Diaľkovo ovládané zásuvky a meranie spotreby energie.",
    category: "IoT",
  },
];

// -------------------------- SLIDER DATA (fallback globálne) --------------------------

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

// -------------------------- HERO HEADER DATA --------------------------

export const heroHeader: HeroHeaderData = {
  title: "Inovatívna FinTech Platforma\nPre budúcnosť financií",
  description:
    "Objavte najnovšie trendy v oblasti financií, AI a blockchainu s našou jedinečnou platformou, ktorá redefinuje finančné služby.",
};

export const intelliHomeHeroHeader: HeroHeaderData = {
  title: "IntelliHome - Nová Éra Bývania",
  description:
    "Zmeňte svoj domov na inteligentnú a bezpečnú domácnosť vďaka našim inovatívnym smart riešeniam. Budúcnosť bývania je tu už dnes!",
};
