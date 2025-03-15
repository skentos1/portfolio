"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SlideItem {
  type: "image" | "video";
  src: string;
}

interface MediaSliderProps {
  slides: SlideItem[];  // an array of SlideItem
  title?: string;
  bgClass?: string;     // tailwind background classes if desired
}

export function MediaSlider({ slides, title, bgClass }: MediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // The "current" slide object
  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`
        relative 
        w-full 
        h-full 
        rounded-2xl 
        p-10 
        text-xl 
        md:text-4xl 
        font-bold 
        text-white 
        overflow-hidden
        ${bgClass ?? "bg-gray-500"}
      `}
    >
      {/* Title */}
      {title && <p className="mb-4">{title}</p>}

      {/* Slider container */}
      <div className="relative w-full h-[65%] md:h-[80%] flex items-center justify-center">
        {/* Prev arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white px-3 py-2 rounded-md z-10"
        >
          &larr;
        </button>

        {/* The slide (image or video) */}
        {currentSlide.type === "image" ? (
          <Image
            src={currentSlide.src}
            alt="slider-media"
            width={1000}
            height={1000}
            className="object-contain w-auto h-full rounded-xl"
          />
        ) : (
          <video
            src={currentSlide.src}
            className="object-contain w-auto h-full rounded-xl"
            autoPlay
            loop
            muted
            controls
          />
        )}

        {/* Next arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white px-3 py-2 rounded-md z-10"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
