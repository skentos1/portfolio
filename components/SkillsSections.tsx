"use client";
import React from "react";
import { cn } from "@/lib/utils";

import Mern from "../public/images/Mern.avif";
import Mobile from "../public/images/mobile.jpg";
import NextImage from "next/image";
import Home from "../public/images/exp4.svg";

import { motion } from "motion/react"; // tu je dôležité, že importujete z "motion/react"

export function FeaturesSectionDemo({ id }: { id?: string }) {
  const features = [
    {
      title: "Môj hlavný Tech Stack",
      description:
        "Technológie s ktorými mám aktuálne najviac skúseností a vyhotovených projektov je MERN Stack",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-4 border-b border-t lg:border-r dark:border-neutral-800",
    },
    {
      skeleton: <SkeletonCertAndStack />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Flexibilný prístup k práci",
      description:
        "Najčastejšie som v Košiciach, no nemám problém pracovať remote a taktiež aj so zahraničnými klientami.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Výzvy do budúcna",
      description:
        "Veľmi rád by som sa venoval aj vývoju mobilných aplikácií alebo softwerovému vývoju.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <section id={id}>
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <motion.div
          // Jemná animácia pre nadpis pri nabehnutí do view
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="px-8"
        >
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Technologické zručnosti
          </h4>

          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Rýchly a stručný prehľad zručností a technológií s ktorými som doposiaľ
            nadobudol skúsenosti
          </p>
        </motion.div>

        <div className="relative">
          {/* Aktualizovaný grid: na malých zariadeniach 1 stĺpec, na md 2 stĺpce a na lg 6 stĺpcov */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-2xl lg:grid-cols-6 mt-12 xl:border rounded-xl dark:border-neutral-900">
            {features.map((feature) => {
              // Ak title = "Flexibilný prístup k práci" alebo "Výzvy do budúcna" => 2-stĺpcový layout
              if (
                feature.title === "Flexibilný prístup k práci" ||
                feature.title === "Výzvy do budúcna"
              ) {
                return (
                  <FeatureCardTwoColumns
                    key={feature.title}
                    className={feature.className}
                  >
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                    <div className="h-full w-full">{feature.skeleton}</div>
                  </FeatureCardTwoColumns>
                );
              }

              // Ostatné karty (pôvodný layout)
              return (
                <FeatureCard key={feature.title} className={feature.className}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  <div className="h-full w-full">{feature.skeleton}</div>
                </FeatureCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   1) FeatureCardTwoColumns
   Pre 2-stĺpcový layout (Flexibilný prístup, Výzvy do budúcna)
------------------------------------------- */
function FeatureCardTwoColumns({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      // Fade in + vybehnutie zospodu
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      // Zvýraznenie pri hoveri
      whileHover={{ scale: 1.03 }}
      className={cn(
        "p-4 sm:p-8 relative overflow-hidden",
        "flex flex-col md:flex-row gap-6 items-start",
        "transition-shadow hover:shadow-2xl", // tieň na hover
        className
      )}
    >
      <div className="flex-1 space-y-2">
        {Array.isArray(children) ? children[0] : null}
        {Array.isArray(children) ? children[1] : null}
      </div>
      <div className="flex-1">
        {Array.isArray(children) ? children[2] : null}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------
   2) FeatureCard
   (pôvodný layout pre ostatné karty)
------------------------------------------- */
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      // Fade in + vybehnutie
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      // Efekt pri hoveri
      whileHover={{ scale: 1.03 }}
      className={cn(
        "p-4 sm:p-8 relative overflow-hidden",
        "transition-shadow hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.p
      // Jemné "from left" pre title
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white font-semibold text-xl md:text-2xl md:leading-snug"
    >
      {children}
    </motion.p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.p
      // Jemné "from left" s oneskorením
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </motion.p>
  );
};

/* -------------------------------------------
   3) SkeletonOne
   Sem pridáme "plávajúci" efekt obrázku
------------------------------------------- */
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <motion.div
        className="w-full p-5 mx-auto bg-white dark:bg-black-100 shadow-2xl group h-full"
        // Plávajúci (bounce) efekt hore-dole
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <NextImage
            src={Mern}
            alt="header"
            width={600}
            height={400}
            className="sm:h-full w-full object-contain sm:object-cover object-center rounded-sm"
          />
        </div>
      </motion.div>

      {/* Gradient overlayy */}
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

/* -------------------------------------------
   4) SkeletonTwo
   (už je dvojstĺpcový: text + obrázok)
   Pridáme jemný hover + fadein
------------------------------------------- */
export const SkeletonTwo = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* ĽAVÝ stĺpec: text */}
      <p className="text-sm text-left text-neutral-700 dark:text-neutral-300">
        Mobile dev
      </p>

      {/* PRAVÝ stĺpec: obrázok */}
      <NextImage
        src={Mobile}
        alt="header"
        width={200}
        height={120}
        className="rounded-sm object-cover object-center"
      />
    </motion.div>
  );
};

/* -------------------------------------------
   5) SkeletonThree
   (tiež dvojstĺpcový: text + obrázok)
   Pridáme jemný hover + fadein
------------------------------------------- */
export const SkeletonThree = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* ĽAVÝ stĺpec: text */}
      <p className="text-sm text-left text-neutral-700 dark:text-neutral-300">
        Remote / On Site
      </p>

      {/* PRAVÝ stĺpec: obrázok */}
      <NextImage
        src={Home}
        alt="header"
        width={200}
        height={120}
        className="rounded-sm object-cover object-center"
      />
    </motion.div>
  );
};

/* -------------------------------------------
   6) SkeletonCertAndStack
   (Pridáme hover tieň + scale)
------------------------------------------- */
export const SkeletonCertAndStack = () => {
  // Tech stack polia
  const leftLists = ["Tailwind", "FramerMotion", "SQL", "Git"];
  const rightLists = ["NextJS", "Javascript", "Typescript", "Docker"];

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* 1. Sekcia – My tech stack */}
      <div className="bg-gradient-to-br from-[#0A0E27] to-[#10132E] rounded-xl p-8 shadow-lg transition hover:shadow-xl">
  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
    Ďalšie Technológie
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
    {[...leftLists, ...rightLists].map((item, i) => (
      <span
        key={i}
        className="py-2 px-4 text-sm lg:text-base text-white bg-black/20 rounded-full text-center transition hover:bg-black/30"
      >
        {item}
      </span>
    ))}
  </div>
</div>

      <hr className="border-neutral-700" />

      {/* 2. Sekcia – Cisco certifikácie */}
      <div className="bg-gradient-to-br from-[#0A0E27] to-[#10132E] rounded-xl p-8 shadow-lg transition hover:shadow-xl">
        <h3 className="text-2xl font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
          Cisco sieťové certifikácie
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Obrázok Cisco */}
          <div className="flex-shrink-0">
            <NextImage
              src="/images/Cisco.jpg"
              alt="Cisco Certification"
              width={120}
              height={120}
              className="object-contain rounded-full"
            />
          </div>
          {/* Textová časť s certifikáciami */}
          <div className="flex flex-col gap-3">
            <div className="flex sm:flex-wrap items-center gap-4">
              <span className="py-2 px-4 bg-white/10 text-white rounded-full text-center text-sm transition hover:bg-white/20">
                Cisco CCNA 1
              </span>
              <span className="py-2 px-4 bg-white/10 text-white rounded-full text-center text-sm transition hover:bg-white/20">
                Cisco CCNA 2
              </span>
              <span className="py-2 px-4 bg-white/10 text-white rounded-full text-center text-sm transition hover:bg-white/20">
                Cisco CCNA 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
