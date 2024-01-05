"use client";
import React, { useState } from "react";
import { Barlow } from "../Fonts/Fonts";
import spaceMissionData from "@/data/data";

const page = () => {
  const [activeCard, setActiveCard] = useState<string>("launch vehicle");

  const techLinks = ["launch vehicle", "spaceport", "space capsule"];

  const handleLinkClick = (link: string) => {
    setActiveCard(link);
  };

  return (
    <div className="sm:h-screen h-fit bg-techBck lg:pt-[11em] lg:pl-[9em]">
      <div
        className={`${Barlow.className} md:flex text-center sm:text-left space-x-2 uppercase tracking-widest font-semibold pt-[6em] lg:pt-0 sm:pt-[8em] text-lg lg:text-2xl sm:pl-8`}
      >
        <span className="text-gray-500">03</span>
        <span className="text-spaceWhite">space launch 101</span>
      </div>
      {/* dd */}
      {spaceMissionData.technology
        .filter((item) => item.name.toLowerCase() === activeCard)
        .map((tech, i) => (
          <div className="grid grid-cols-1 lg:grid-cols-5" key={`$tech-${i}`}>
            {/* Mobile view */}
            <div className="flex lg:hidden flex-col space-y-4 pt-12">
              <div className="bg-yellow-500 sm:hidden">
                <img src={tech.xsImages} alt={tech.name} />
              </div>
              <div className="hidden sm:block">
                <img src={tech.smImages} alt={tech.name} />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex justify-center space-x-4">
                  {techLinks.map((techLink, i) => (
                    <div
                      key={`techLinks-${i}`}
                      className={`cursor-pointer h-10 w-10 rounded-full ${
                        techLink === activeCard
                          ? "bg-white"
                          : "transparent border-[0.001em] text-spaceWhite"
                      }  text-black flex justify-center items-center`}
                      onClick={() => handleLinkClick(techLink)}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="py-8 flex flex-col items-center space-y-2 text-white tracking-wider">
                  <div className={`${Barlow.className}`}>THE TERMINOLOGY…</div>
                  <span className="uppercase text-2xl">{tech.name}</span>
                  <p className="w-[16em] py-8 sm:w-[27em] text-center text-spaceBlue text-base sm:text-xl">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Desktop view */}
            <div className="hidden lg:block col-span-3 my-8 pl-8 pt-[6em]">
              <div className="flex space-x-12">
                <div className="flex flex-col space-y-9">
                  {techLinks.map((techLink, i) => (
                    <div
                      key={`techLinks-${i}`}
                      className={`cursor-pointer h-16 w-16 rounded-full ${
                        techLink === activeCard
                          ? "bg-white"
                          : "transparent border-[0.001em] text-spaceWhite"
                      }  text-black flex justify-center items-center`}
                      onClick={() => handleLinkClick(techLink)}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-4">
                  <div className={`${Barlow.className} text-spaceWhite`}>
                    THE TERMINOLOGY…
                  </div>
                  <span className="uppercase text-6xl tracking-widest text-spaceWhite">
                    {tech.name}
                  </span>
                  <p className="w-[16em] py-8 sm:w-[27em] text-spaceBlue text-base sm:text-xl">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-end col-span-2">
              <img src={tech.images} alt={tech.name} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
