import { Tabs } from "@/components/ui/tabs";
import { MediaSlider } from "./ImageSlider"; // upravíme názov komponentu
import type { FullProject } from "../../../data";

interface TabsDemoProps {
  project?: FullProject;
}

// SERVER COMPONENT
export default function TabsDemo({ project }: TabsDemoProps) {
  const tabs =
    project?.details?.sliderTabs?.map((tab) => ({
      title: tab.label,
      value: tab.label.toLowerCase(),
      content: (
        <MediaSlider
          slides={tab.slides}
          title={`${tab.label} Tab`}
          bgClass="bg-gray-600"
        />
      ),
    })) || [
      {
        title: "Hero",
        value: "hero",
        content: (
          <MediaSlider slides={[]} title="Hero Tab" bgClass="bg-gray-600" />
        ),
      },
    ];

  return (
    <div className="h-[40rem] md:h-[48rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-start my-40">
      <h1 className="heading text-center py-8">
        Ukážka <span className="text-purple">tohto projektu</span>
      </h1>
      <Tabs tabs={tabs} containerClassName="w-full" contentClassName="w-full h-auto" />
    </div>
  );
}
