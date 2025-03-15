"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useRouter } from "next/navigation";

const RecentProjects = () => {

  const router = useRouter();
  return (
    <div className="py-20 w-full max-w-[1600px] mx-auto">
      <h1 className="heading text-center">
        Zbierka mojích{" "}
        <span className="text-purple">najnovších projektov</span>
      </h1>

      {/* 3-column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4 mt-10 justify-items-center">
        {projects.map((item) => (
          <div
            className="h-[45rem]  flex items-center justify-center w-[80vw] lg:w-[50vw]"
            key={item.id}
            onClick={() => router.push(`/projects/${item.id}`)} // Navigate to project page
          >
            <PinContainer title={item.title} href={item.link}>
              {/* Larger Image Preview */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={item.img} 
                    alt="Project Preview"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.titleName}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Zisti viac
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" size={22} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
