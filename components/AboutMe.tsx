"use client";

import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "../data/index";

const TestimonialsSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Niečo málo o mne</h2>
      <AnimatedTestimonials testimonials={testimonials}  />
    </div>
  );
};

export default TestimonialsSection;
