"use client";

import { Tabs } from "@/components/ui/tabs";
import { MediaSlider } from "./ImageSlider";
import {
  heroSlides,
  blockchainSlides,
  analyzeSlides,
  aiSlides,
} from "../data/index";

export function TabsDemo() {
  const tabs = [
    {
      title: "Hero",
      value: "hero",
      content: (
        <MediaSlider
          slides={heroSlides}
          title="Hero Tab"
          bgClass="bg-gray-600"
        />
      ),
    },
    {
      title: "Blockchain",
      value: "blockchain",
      content: (
        <MediaSlider
          slides={blockchainSlides}
          title="Blockchain Tab"
          bgClass="bg-gray-600"
        />
      ),
    },
    {
      title: "A.I Analýza",
      value: "analyza",
      content: (
        <MediaSlider
          slides={analyzeSlides}
          title="AI Analýza"
          bgClass="bg-gray-600"
        />
      ),
    },
    {
      title: "Umelá Inteligencia",
      value: "ai",
      content: (
        <MediaSlider
          slides={aiSlides}
          title="AI Tab"
          bgClass="bg-gray-600"
        />
      ),
    },
  ];

  return (
    <div
      className="
        h-[20rem] 
        md:h-[48rem] 
        [perspective:1000px] 
        relative 
        flex 
        flex-col 
        max-w-5xl 
        mx-auto 
        w-full 
        items-center       /* Centers children horizontally */
        justify-start 
        my-40
      "
    >
      {/* Center the heading text */}
      <h1 className="heading text-center py-8">
        Ukážka{" "}
        <span className="text-purple">tohto projektu</span>
      </h1>

      {/* Tabs remain below the heading */}
      <Tabs tabs={tabs} />
    </div>
  );
}
