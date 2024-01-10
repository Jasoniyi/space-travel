"use client";

import React, { useState } from "react";
import spaceMissionData from "@/data/data";
import { Barlow, Belle } from "../Fonts/Fonts";
import Image from "next/image";

const Page = () => {
  const [activeCard, setActiveCard] = useState<string>("moon");

  const destinationLinks = ["moon", "mars", "europa", "titan"];

  const handleLinkClick = (link: string) => {
    setActiveCard(link);
  };

  return (
    <div className="bg-destination lg:h-screen text-spaceWhite pt-[5em] lg:pt-[11em]">
      <ul>
        {spaceMissionData.destinations
          .filter((item) => item.name.toLowerCase() === activeCard)
          .map((destination, i) => (
            <li key={`destination-${i}`}>
              <div className="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-5 lg:gap-x-4">
                <div className="col-span-3">
                  <div className="flex flex-col space-y-12 items-center lg:items-start lg:pl-[10em]">
                    <div
                      className={`${Barlow.className} flex lg:space-x-4 uppercase tracking-widest text-base lg:text-2xl`}
                    >
                      <span className="">01</span>
                      <span className="">Pick your destination</span>
                    </div>
                    <div className="">
                      <img
                        src={destination.images}
                        alt={destination.name}
                        className="w-[17em] lg:w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex flex-col items-center lg:items-start space-y-12 px-4">
                    <div
                      className={`${Barlow.className} flex flex-row space-x-10 tracking-widest text-base uppercase`}
                    >
                      {destinationLinks.map((link, i) => (
                        <div
                          className={`cursor-pointer ${
                            link === activeCard
                              ? "underline underline-offset-8"
                              : ""
                          }`}
                          key={`destinationlinks-${i}`}
                          onClick={() => handleLinkClick(link)}
                        >
                          {link}
                        </div>
                      ))}
                    </div>
                    <div className={`${Belle.className} uppercase text-8xl`}>
                      {destination.name}
                    </div>
                    <p
                      className={`${Belle.className} text-xl w-[16em] sm:w-[31em] text-center lg:text-left lg:w-[22em] text-spaceBlue`}
                    >
                      {destination.description}
                    </p>
                    <div className="border-[0.2px] border-y-spaceWhite w-[22em] sm:w-[40em] lg:w-[29em]" />
                    <div className="flex flex-row space-x-16 pb-12">
                      <div className="flex flex-col items-center lg:items-start space-y-4">
                        <span
                          className={`${Barlow.className} uppercase tracking-widest text-spaceBlue`}
                        >
                          avg. distance
                        </span>
                        <span
                          className={`${Belle.className} text-3xl uppercase`}
                        >
                          {destination.distance}
                        </span>
                      </div>
                      <div className="flex flex-col items-center lg:items-start space-y-4">
                        <span
                          className={`${Barlow.className} uppercase tracking-widest text-spaceBlue`}
                        >
                          est. travel time
                        </span>
                        <span
                          className={`${Belle.className} text-3xl uppercase`}
                        >
                          {destination.travel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
