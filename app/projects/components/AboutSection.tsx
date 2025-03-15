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
} from "react-icons/si";
import { wobbleCardData } from "../data";

export function WobbleCardDemo() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Informácie o projekte
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Card - AI Analysis */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#121212] min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              {wobbleCardData.mainInfo.title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {wobbleCardData.mainInfo.description}
            </p>
          </div>
        </WobbleCard>

        {/* Second Card - Blockchain Technology */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-white to-[#ECECEB] to-gray-900">
          <h2 className="text-2xl text-black">
            {wobbleCardData.keyFeatures.title}
          </h2>

          {/* Bullet points (if any) */}
          {wobbleCardData.keyFeatures.bullets && (
            <ul className="list-disc mt-2 ml-5 text-neutral-900">
              {wobbleCardData.keyFeatures.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </WobbleCard>
        {/* Third Card - Tech Stack */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-gray-900 to-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              {wobbleCardData.techStack.title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              {wobbleCardData.techStack.description}
            </p>
            <div className="grid grid-cols-4 gap-6 mt-6">
              {wobbleCardData.techStack.stack.map((tech) => {
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
            src={wobbleCardData.techStack.image}
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

// Funkcia na mapovanie ikon zo string hodnôt v dátach
const getTechIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    FaDocker: FaDocker,
    SiTailwindcss: SiTailwindcss,
    SiMongodb: SiMongodb,
    SiFramer: SiFramer,
    SiExpress: SiExpress,
  };
  return icons[iconName] || FaReact; // Default ikona, ak neexistuje
};
