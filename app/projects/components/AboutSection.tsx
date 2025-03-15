"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/woble-card";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiExpress,
  SiOpenai,
  SiStrapi,
  SiGmail 
} from "react-icons/si";
import { wobbleCardData } from "../../../data/index";
import type { FullProject } from "../../../data/index";

// Accept an optional "project" prop.
// If "project" is given, we pull mainInfo, keyFeatures, and techStack from it.
// Otherwise, we default to "wobbleCardData".
export function WobbleCardDemo({ project }: { project?: FullProject }) {
  // If we have a project, use its details; else fallback to the global "wobbleCardData".
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
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Informácie o projekte
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Card - mainInfo */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#121212] min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
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
            <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
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
          <Image
            src={data.techStack.image}
            width={500}
            height={500}
            alt="Tech Stack"
            className="absolute -right-10 md:-right-[40%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

// Icon mapper for the tech stack
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
    SiGmail 
  };
  return icons[iconName] || FaReact; // default icon if not found
};
