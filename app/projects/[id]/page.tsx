
// @ts-nocheck
import { projects } from "../../../data/index";
import { notFound } from "next/navigation";
import HeroParallaxDemo from "../components/HeroParalax";
import { WobbleCardDemo } from "../components/AboutSection";
import { TabsDemo } from "../components/Tabs";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

interface ProjectPageProps {
  params: { id: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <div className="overflow-hidden dark:bg-black-100 bg-white w-full min-h-screen">
      <FloatingNav navItems={navItems} />
      <div className="relative flex flex-col items-center bg-white dark:bg-black-100 pb-10">
        <HeroParallaxDemo project={project} />
      </div>
      <div className="relative flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-12">
        <WobbleCardDemo project={project} />
      </div>
      <TabsDemo project={project} />
    </div>
  );
};

export default ProjectPage;
