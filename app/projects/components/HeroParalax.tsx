"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "../data";



export function HeroParallaxDemo() {
    return <HeroParallax products={products}  />;
}

export default HeroParallaxDemo;
