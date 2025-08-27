"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/woble-card";
import { FaReact, FaNodeJs, FaDocker, FaStripe } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiExpress,
  SiOpenai,
  SiStrapi,
  SiGmail,
  SiGooglemaps,
  SiTwilio,
  SiNextdotjs,
  SiFigma,
  SiAdobephotoshop,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { wobbleCardData } from "../../../data/index";
import type { FullProject } from "../../../data/index";

// Ak je zadaný "project", použijeme jeho údaje, inak fallback na wobbleCardData.
export function WobbleCardDemo({ project }: { project?: FullProject }) {
  const data = project
    ? {
        mainInfo: {
          title: project.details.mainInfo.title,
          description: project.details.mainInfo.description,
          image: project.details.mainInfo.image,
        },
        keyFeatures: {
          title: project.details.keyFeatures.title,
          bullets: project.details.keyFeatures.bullets,
        },
        techStack: {
          title: project.details.techStack.title,
          description: project.details.techStack.description,
          image: project.details.techStack.image,
          stack: project.details.techStack.stack,
        },
      }
    : wobbleCardData;

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10">
        Informácie o projekte
      </h2>
      {project && project.link && (
        <div className="text-center mb-12">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300 hover:border-white/40 group"
          >
            <span className="text-lg">Pozrieť živú ukážku</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Card - mainInfo */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#121212] min-h-[350px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-base sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white">
              {data.mainInfo.title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {data.mainInfo.description}
            </p>
          </div>
        </WobbleCard>

        {/* Second Card - keyFeatures */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-white to-[#ECECEB] to-gray-900">
          <h2 className="text-2xl text-black">{data.keyFeatures.title}</h2>

          {/* Bullet points (if any) */}
          {data.keyFeatures.bullets && (
            <ul className="list-disc mt-2 ml-5 text-neutral-900">
              {data.keyFeatures.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </WobbleCard>

        {/* Third Card - techStack */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-gray-900 to-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-base sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white">
              {data.techStack.title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              {data.techStack.description}
            </p>
            <div className="grid grid-cols-4 gap-6 mt-6">
              {data.techStack.stack.map((tech) => {
                const IconComponent = getTechIcon(tech.icon);
                return (
                  <div key={tech.name} className="flex flex-col items-center">
                    <IconComponent size={40} className="text-white" />
                    <p className="text-white text-sm mt-2">{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Obrázok: Na malých obrazovkách je relative (v toku), na md a vyšších absolútne */}
          <Image
            src={data.techStack.image}
            width={500}
            height={500}
            alt="Tech Stack"
            className="relative md:absolute -right-10 md:-right-[40%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl md:mt-0 mt-6"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

// Funkcia pre mapovanie názvu ikony na komponent.
const getTechIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    FaReact,
    FaNodeJs,
    FaDocker,
    SiTailwindcss,
    SiMongodb,
    SiFramer,
    SiExpress,
    SiOpenai,
    SiStrapi,
    SiGmail,
    FaStripe,
    SiGooglemaps,
    SiNextdotjs,
    SiTwilio,
    SiFigma,
    SiAdobephotoshop,
    SiJavascript,
    SiTypescript,
  };
  return icons[iconName] || FaReact;
};
