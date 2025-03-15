"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products, heroHeader } from "../../../data/index";
import type { FullProject } from "../../../data/index";

// Accept an optional "project" prop.
// If no project is passed, it defaults to using the global "products" array.
interface HeroParallaxDemoProps {
  project?: FullProject;
}

  export function HeroParallaxDemo({ project }: HeroParallaxDemoProps) {
    // 1) Zisti, či projekt má vlastné "products", inak fallback na globálne
    const relevantProducts = project.details.products || products;
  
    // 2) Zisti, či projekt má "heroData", inak fallback na "heroHeader"
    const usedHeroHeader = project.details.heroData || heroHeader;
  
    // 3) Odovzdaj do HeroParallax obe polia
    return (
      <HeroParallax
        products={relevantProducts}
        heroData={usedHeroHeader}
      />
    );
  }
export default HeroParallaxDemo;
