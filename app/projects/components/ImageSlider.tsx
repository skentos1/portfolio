"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface SlideItem {
  type: "image" | "video";
  src: string;
}

interface MediaSliderProps {
  slides: SlideItem[];
  title?: string;
  bgClass?: string;
}

export function MediaSlider({ slides, title, bgClass }: MediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null); // Ref pre video

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Guard pre empty slides
  if (slides.length === 0) {
    return (
      <div className={`relative w-full h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white overflow-hidden ${bgClass ?? "bg-gray-500"}`}>
        {title && <p className="mb-4">{title}</p>}
        <div className="flex items-center justify-center h-[250px] text-center">
          Žiadne obrázky dostupné
        </div>
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  // Click handler na prehratie videa
  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className={`relative w-full h-auto rounded-2xl p-6 md:p-10 text-lg md:text-4xl font-bold text-white overflow-hidden ${bgClass ?? "bg-gray-500"}`}>
      {title && <p className="mb-4">{title}</p>}

      <div className="relative w-full min-h-[250px] sm:min-h-[350px] flex items-center justify-center">
        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white px-3 py-2 rounded-md z-10"
        >
          &larr;
        </button>

        {/* Slide */}
        {currentSlide.type === "image" ? (
          <Image
            src={currentSlide.src}
            alt="slider-media"
            width={1000}
            height={1000}
            className="object-contain w-full h-auto max-h-[70vh] rounded-xl"
          />
        ) : (
          <video
            ref={videoRef}
            src={currentSlide.src}
            className="object-contain w-full h-auto max-h-[70vh] rounded-xl cursor-pointer"
            loop
            muted
            controls
            onClick={handleVideoClick} // Po kliknutí prehráme
          />
        )}

        {/* Next */}
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
