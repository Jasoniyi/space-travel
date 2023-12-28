import React from "react";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import { Barlow } from "../../Fonts/Fonts";

type NavLinksShape = {
  title: string;
  link: string;
  digit: string;
};

const NavLinks: NavLinksShape[] = [
  {
    digit: "00",
    title: "Home",
    link: "/",
  },
  {
    digit: "01",
    title: "destination",
    link: "",
  },
  {
    digit: "02",
    title: "crew",
    link: "",
  },
  {
    digit: "03",
    title: "technology",
    link: "",
  },
];

const Menu = () => {
  return (
    <div className={Barlow.className}>
      {/* Mobile View */}
      <div className="text-white lg:hidden">Mobile Menu</div>
      {/* Desktop Menu */}
      <div className="hidden md:flex w-screen items-center">
        <div className="mr-16">
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" border-gray-500 border-b-[1px] w-[31em]"></div>
        <div className="bg-blue-500 backdrop-blur-md bg-opacity-5 flex-1">
          <div className="flex items-center justify-center text-white py-6">
            {NavLinks.map((links, i) => (
              <div className="flex px-8 space-x-2">
                <span className="font-bold">{links.digit}</span>
                <span className="uppercase tracking-widest">{links.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
