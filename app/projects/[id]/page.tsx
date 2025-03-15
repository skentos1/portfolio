import { projects } from "@/data";
import { notFound } from "next/navigation";
import HeroParallaxDemo from "../components/HeroParalax";
import { WobbleCardDemo } from "../components/AboutSection";
import  { TabsDemo } from "../components/Tabs";

interface ProjectPageProps {
  params?: { id?: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  if (!params?.id) return notFound(); // Ensure params.id exists

  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) return notFound(); // Show 404 if project doesn't exist

  return (
    <div className="overflow-hidden dark:bg-black-100 bg-white w-full min-h-screen">
      {/* Sticky HeroParallax Section */}
      <div className="relative flex flex-col items-center bg-white dark:bg-black-100 pb-10">
        <HeroParallaxDemo />
      </div>

      {/* About Section (Reduced Margin & Padding) */}
      <div className="relative flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-12">
        <WobbleCardDemo />
      </div>
      <TabsDemo/>
    </div>
  );
};

export default ProjectPage;
