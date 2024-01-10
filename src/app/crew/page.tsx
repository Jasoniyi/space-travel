"use client";
import React, { useState } from "react";
import spaceMissionData from "@/data/data";
import { Barlow } from "../Fonts/Fonts";

const Page = () => {
  const [activeCard, setActiveCard] = useState<string>("commander");

  const crewLinks = [
    "commander",
    "mission specialist",
    "pilot",
    "flight engineer",
  ];

  const handleLinkClick = (link: string) => {
    setActiveCard(link);
  };

  return (
    <div className="bg-crewBck lg:h-screen lg:pt-[11em]">
      <div className="">
        {spaceMissionData.crew
          .filter((item) => item.role.toLowerCase() === activeCard)
          .map((crew, i) => (
            <div
              className="grid grid-cols-1 lg:grid-cols-5 max-sm:flex max-sm:flex-col-reverse max-sm:items-center"
              key={`crew-${i}`}
            >
              <div className="lg:col-span-3 place-content-center lg:pl-[11em] py-0 sm:py-0 px-6 sm:px-0">
                <div className="flex flex-col space-y-8 pb-16 sm:py-0">
                  <div
                    className={`${Barlow.className} md:flex space-x-2 uppercase tracking-widest font-semibold lg:pt-0 sm:pt-[8em] text-2xl pl-8 lg:pl-0 hidden`}
                  >
                    <span className="text-gray-500">02</span>
                    <span className="text-spaceWhite">Meet your crew</span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start space-y-4 sm:pt-12">
                    <span className="text-spaceBlue uppercase text-2xl tracking-wide">
                      {crew.role}
                    </span>
                    <span className="uppercase text-center lg:text-left text-3xl sm:text-5xl text-spaceWhite tracking-widest">
                      {crew.name}
                    </span>
                    <p className="text-spaceBlue text-lg sm:w-[25em] text-center lg:text-left lg:items-start lg:w-[21em]">
                      {crew.bio}
                    </p>
                  </div>
                  <div className="hidden pt-16 md:flex justify-center lg:justify-start space-x-4">
                    {crewLinks.map((link, i) => (
                      <div
                        key={`crewlinks-${i}`}
                        className={`cursor-pointer h-3 w-3 rounded-full ${
                          link === activeCard ? "bg-white" : "bg-gray-600"
                        }`}
                        onClick={() => handleLinkClick(link)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="block sm:hidden max-sm:my-8">
                <div className="py-6 flex justify-center space-x-4">
                  {crewLinks.map((link, i) => (
                    <div
                      key={`crewlinks-${i}`}
                      className={`cursor-pointer h-3 w-3 rounded-full ${
                        link === activeCard ? "bg-white" : "bg-gray-600"
                      }`}
                      onClick={() => handleLinkClick(link)}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="h-[23em] sm:h-[27em] lg:h-[37em] pt-10 lg:pt-0 flex justify-center">
                  <img src={crew.images} alt={crew.name} className="h-full" />
                </div>
                <div className="block sm:hidden mx-8">
                  <div className="border-[0.001em] border-gray-400" />
                </div>
              </div>
              <div className="block sm:hidden pt-[6em]">
                <div
                  className={`${Barlow.className} md:flex space-x-2 uppercase tracking-widest font-semibold`}
                >
                  <span className="text-gray-500">02</span>
                  <span className="text-spaceWhite">Meet your crew</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
