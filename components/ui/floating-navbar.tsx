"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects } from "../../data/index";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          // Dôležité: relative w-full, aby sub-menu vedelo, k čomu sa centrovať
          "relative w-full flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex space-x-6">
          {navItems.map((navItem, idx) => {
            if (navItem.name === "Projekty") {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveMenu("Projects")}
                  onMouseLeave={() => setActiveMenu(null)}
                  className="relative"
                >
                  <Link
                    href={navItem.link}
                    className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
                  >
                    <span>{navItem.name}</span>
                  </Link>

                  <AnimatePresence>
                    {activeMenu === "Projects" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={transition}
                        className="
                          absolute 
                          top-[calc(100%+1rem)] 
                          left-1/2 
                          transform 
                          -translate-x-1/2 
                          pt-4 
                          z-50
                        "
                      >
                        <motion.div
                          transition={transition}
                          layoutId="active"
                          className="
                            bg-white 
                            dark:bg-black 
                            backdrop-blur-sm 
                            rounded-2xl 
                            overflow-hidden 
                            border 
                            border-black/[0.2] 
                            dark:border-white/[0.2] 
                            shadow-xl
                          "
                        >
                          <motion.div layout className="p-4 w-[400px]">
                            {/* 2-stĺpcová mriežka */}
                            <div className="grid grid-cols-2 gap-4">
                              {projects.map((project) => (
                                <Link
                                  key={project.id}
                                  href={`/projects/${project.id}`}
                                  className="block rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                  <Image
                                    src={project.img}
                                    alt={project.titleName}
                                    width={200}
                                    height={120}
                                    className="rounded-md w-full h-auto object-cover"
                                  />
                                  <p className="font-bold text-sm mt-2 text-black dark:text-white">
                                    {project.titleName}
                                  </p>
                                  <p className="text-xs text-neutral-700 dark:text-neutral-300 line-clamp-2">
                                    {project.des}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            } else {
              // Ostatné položky
              return (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="
                    relative 
                    dark:text-neutral-50 
                    flex items-center space-x-1 
                    text-neutral-600 
                    dark:hover:text-neutral-300 
                    hover:text-neutral-500
                  "
                >
                  <span>{navItem.name}</span>
                </Link>
              );
            }
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
