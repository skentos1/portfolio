"use client";



import TestimonialsSection from "@/components/AboutMe";

import Hero from "@/components/Hero";
import PortfolioStack from "@/components/PortfolioStack";
import RecentProjects from "@/components/RecentProjects";
import { FeaturesSectionDemo } from "@/components/SkillsSections";
import { ContainerScroll } from "@/components/ui/cotainer-scroll-animation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
        <Hero />
        <TestimonialsSection  id="about"/>
        <FeaturesSectionDemo id="features"/>
        <RecentProjects id="projects"/>
        <PortfolioStack id="contact" />
      </div>
    </main>
  );
};

export default Home;