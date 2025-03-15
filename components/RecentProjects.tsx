"use client";

import { useRouter } from "next/navigation";
// import { projects } from "@/data";  // alebo "@app/projects/data" podľa tvojho aliasu
import { projects } from "@/data";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const RecentProjects = ({id} : {id?: string}) => {
  const router = useRouter();

  return (
    <section id={id}>
    <div className="py-20 w-full max-w-[1600px] mx-auto" id="projects">
      <h1 className="heading text-center">
        Zbierka mojích <span className="text-purple">najnovších projektov</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4 mt-10 justify-items-center">
        {projects.map((item) => (
          <div
            className="h-[45rem] flex items-center justify-center w-[80vw] lg:w-[50vw]"
            key={item.id}
            onClick={() => router.push(`/projects/${item.id}`)} // Dynamická route
          >
            <PinContainer title={item.title} href={item.link}>
              {/* Obrázok */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img
                  src={item.img}
                  alt="Project Preview"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Názov */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Stručný popis */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              {/* Ikonky */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black
                                 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Zisti viac</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" size={22} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;
