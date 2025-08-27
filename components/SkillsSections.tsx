"use client";
import React from "react";
import { cn } from "@/lib/utils";

import Mobile from "../public/images/mobile.jpg";
import NextImage from "next/image";
import Home from "../public/images/exp4.svg";

import { motion } from "motion/react";

export function FeaturesSectionDemo({ id }: { id?: string }) {
  const features = [
    {
      title: "Full-Stack Development",
      description:
        "Komplexný vývoj moderných webových aplikácií od frontendu po backend",
      skeleton: <SkeletonTechStack />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-3 border-b lg:border-r dark:border-neutral-800 row-span-2",
    },
    {
      title: "Realizované Projekty",
      description: "Portfolio úspešne dokončených projektov a riešení",
      skeleton: <SkeletonAdvancedTech />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-3 border-b dark:border-neutral-800 row-span-2",
    },
    {
      title: "Flexibilný prístup k práci",
      description: "Remote work, on-site, medzinárodná spolupráca",
      skeleton: <SkeletonWorkStyle />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Budúce ambície",
      description: "Mobile development a AI integrácie",
      skeleton: <SkeletonFuture />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Certifikácie & Vzdelanie",
      description: "Cisco networking a kontinuálne vzdelávanie",
      skeleton: <SkeletonCertifications />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-2 border-t dark:border-neutral-800",
    },
  ];

  return (
    <section id={id}>
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="px-8"
        >
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Moje Schopnosti & Projekty
          </h4>

          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Komplexný prehľad technológií, realizovaných projektov a môjho
            prístupu k vývoju
          </p>
        </motion.div>

        <div className="relative px-4">
          {/* Nový grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 mt-12 rounded-2xl overflow-hidden border dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                className={feature.className}
                index={index}
              >
                {feature.title && <FeatureTitle>{feature.title}</FeatureTitle>}
                {feature.description && (
                  <FeatureDescription>{feature.description}</FeatureDescription>
                )}
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
  index,
}: {
  children?: React.ReactNode;
  className?: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "p-6 lg:p-8 relative overflow-hidden bg-black/50 backdrop-blur-sm",
        "transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10",
        "group cursor-pointer",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-purple-500/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
          transform: "translateX(-100%)",
          animation: "slide 2s infinite",
        }}
      />

      {children}

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.h3
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-3 tracking-tight"
    >
      {children}
    </motion.h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.p
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed"
    >
      {children}
    </motion.p>
  );
};

// Hlavný tech stack s rozšíreným záberom
export const SkeletonTechStack = () => {
  const frontendTech = [
    {
      name: "Next.js",
      icon: "▲",
      color: "from-black to-gray-800",
      category: "frontend",
    },
    {
      name: "React",
      icon: "⚛",
      color: "from-blue-400 to-blue-600",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "from-blue-600 to-blue-700",
      category: "frontend",
    },
    {
      name: "Tailwind",
      icon: "🎨",
      color: "from-cyan-400 to-cyan-600",
      category: "frontend",
    },
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: "⬢",
      color: "from-green-500 to-green-600",
      category: "backend",
    },
    {
      name: "Express",
      icon: "E",
      color: "from-gray-600 to-gray-700",
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-600 to-green-700",
      category: "backend",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "from-blue-700 to-blue-800",
      category: "backend",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-8">
      {/* Frontend sekcia */}
      <div>
        <motion.h4
          className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Frontend
        </motion.h4>
        <div className="grid grid-cols-2 gap-3">
          {frontendTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`relative p-3 rounded-xl bg-gradient-to-r ${tech.color} text-white shadow-lg cursor-pointer group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-lg mb-1">{tech.icon}</div>
                <div className="text-xs font-medium">{tech.name}</div>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backend sekcia */}
      <div>
        <motion.h4
          className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Backend
        </motion.h4>
        <div className="grid grid-cols-2 gap-3">
          {backendTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`relative p-3 rounded-xl bg-gradient-to-r ${tech.color} text-white shadow-lg cursor-pointer group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-lg mb-1">{tech.icon}</div>
                <div className="text-xs font-medium">{tech.name}</div>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pokročilé technológie a nástroje
export const SkeletonAdvancedTech = () => {
  const projects = [
    {
      name: "FinTech AI",
      type: "Web App",
      tech: ["React", "Node.js", "AI"],
      color: "from-blue-500 to-cyan-500",
      status: "Live",
    },
    {
      name: "SpravToZaMna",
      type: "Platform",
      tech: ["React", "Stripe", "Maps"],
      color: "from-green-500 to-emerald-500",
      status: "Live",
    },
    {
      name: "IntelliHome",
      type: "E-commerce",
      tech: ["React", "Strapi", "Email"],
      color: "from-purple-500 to-violet-500",
      status: "Live",
    },
    {
      name: "Farmex",
      type: "Marketplace",
      tech: ["Next.js", "CMS", "SMS"],
      color: "from-orange-500 to-red-500",
      status: "Live",
    },
    {
      name: "KB Digital",
      type: "Agency Site",
      tech: ["Next.js", "Design", "SEO"],
      color: "from-indigo-500 to-purple-500",
      status: "Live",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-4">
      <motion.div
        className="grid grid-cols-1 gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="group cursor-pointer"
          >
            <div
              className={`relative p-4 rounded-xl bg-gradient-to-r ${project.color}/10 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {project.name}
                  </h4>
                  <p className="text-xs text-gray-400">{project.type}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}
                style={{
                  background: `linear-gradient(to right, ${
                    project.color.split(" ")[1]
                  }/5, ${project.color.split(" ")[3]}/5)`,
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project stats */}
      <motion.div
        className="flex justify-center gap-6 pt-4 border-t border-white/10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-center">
          <div className="text-xl font-bold text-white">5+</div>
          <div className="text-xs text-gray-400">Projektov</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-white">100%</div>
          <div className="text-xs text-gray-400">Úspešnosť</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-white">24/7</div>
          <div className="text-xs text-gray-400">Dostupnosť</div>
        </div>
      </motion.div>
    </div>
  );
};

// Work style s modernejším dizajnom
export const SkeletonWorkStyle = () => {
  const workModes = [
    { label: "Remote", percentage: 70, color: "from-green-500 to-emerald-500" },
    { label: "On-site", percentage: 30, color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-6">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
        <NextImage
          src={Home}
          alt="Remote Work"
          width={160}
          height={100}
          className="relative rounded-2xl object-cover object-center shadow-lg mx-auto"
        />
      </motion.div>

      {/* Work mode percentages */}
      <div className="space-y-3">
        {workModes.map((mode, index) => (
          <motion.div
            key={mode.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {mode.label}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${mode.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${mode.percentage}%` }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                />
              </div>
              <span className="text-xs text-neutral-500">
                {mode.percentage}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center pt-2"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          International projects welcome
        </p>
      </motion.div>
    </div>
  );
};

// Future ambitions
export const SkeletonFuture = () => {
  const futureTech = [
    { name: "React Native", icon: "📱", progress: 45 },
    { name: "AI Integration", icon: "🤖", progress: 30 },
    { name: "Web3", icon: "🔗", progress: 20 },
  ];

  return (
    <div className="h-full flex flex-col justify-center space-y-4">
      <motion.div
        className="relative mb-4"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
        <NextImage
          src={Mobile}
          alt="Future Tech"
          width={120}
          height={80}
          className="relative rounded-2xl object-cover shadow-lg mx-auto"
        />
      </motion.div>

      <div className="space-y-3">
        {futureTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg">{tech.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {tech.name}
                </span>
                <span className="text-xs text-neutral-500">
                  {tech.progress}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.progress}%` }}
                  transition={{
                    delay: index * 0.15 + 0.5,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Certifications
export const SkeletonCertifications = () => {
  return (
    <div className="h-full flex flex-col justify-center space-y-6">
      <motion.div
        className="relative bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>

        <div className="relative z-10 flex items-center gap-4">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white font-bold text-sm">CISCO</span>
          </motion.div>

          <div className="flex-1">
            <h4 className="text-white font-bold mb-2">
              Network Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {["CCNA 1", "CCNA 2", "CCNA 3"].map((cert, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="py-1 px-3 bg-white/10 backdrop-blur-sm text-white rounded-lg text-xs border border-white/20"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learning progress */}
      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
          Kontinuálne vzdelávanie
        </p>
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
