"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // Globálny scroll
  const { scrollYProgress } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Sledujeme, či sme už scrollovali
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  // 1) Spomalený scroll – vynásobíme scrollYProgress menším číslom (napr. 0.5)
  const slowScroll = useTransform(scrollYProgress, (v) => v * 0.5);

  // 2) Definujeme animované hodnoty pre gradient s menšou rýchlosťou
  const y1 = useSpring(
    useTransform(slowScroll, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 80, // menšia stiffness => pomalšia reakcia
      damping: 40,   // väčší damping => viac „lenivý“ pohyb
    }
  );
  const y2 = useSpring(
    useTransform(slowScroll, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 80,
      damping: 40,
    }
  );

  return (
    <div className={cn("relative w-full", className)}>
      {/* Fixný beam naľavo */}
      <div className="fixed top-0 left-0 h-screen pointer-events-none z-20">
        <div className="absolute -left-4 md:-left-3 lg:-left-5 xl:left-4 xxl:left-20 top-3">
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              boxShadow: hasScrolled
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
          >
            <motion.div
              transition={{ duration: 0.2, delay: 0.5 }}
              animate={{
                backgroundColor: hasScrolled
                  ? "white"
                  : "var(--emerald-500)",
                borderColor: hasScrolled
                  ? "white"
                  : "var(--emerald-600)",
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            />
          </motion.div>
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="ml-4 block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
              transition={{ duration: 10 }}
            />
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.25"
              className="motion-reduce:hidden"
              transition={{ duration: 10 }}
            />
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Obsah */}
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
