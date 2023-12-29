import React from "react";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Barlow } from "../../Fonts/Fonts";

type NavLinksShape = {
  title: string;
  link: string;
  digit: string;
};

const NavLinks: NavLinksShape[] = [
  {
    digit: "",
    title: "00 Home",
    link: "/",
  },
  {
    digit: "",
    title: "01 destination",
    link: "/destination",
  },
  {
    digit: "02",
    title: "crew",
    link: "/",
  },
  {
    digit: "03",
    title: "technology",
    link: "/",
  },
];

const Menu = () => {
  return (
    <div className={`${Barlow.className}`}>
      {/* Mobile View */}
      <div className="absolute top-0 text-white lg:hidden">Mobile Menu</div>
      {/* Desktop Menu */}
      <div className="absolute top-10">
        <div className="hidden md:flex w-screen items-center">
          <div className="mr-16">
            <Image src={Logo} alt="logo" />
          </div>
          <div className=" border-gray-500 border-b-[1px] w-[31em]"></div>
          <div className="bg-blue-500 backdrop-blur-md bg-opacity-5 flex-1">
            <div className="flex items-center justify-center text-white py-6">
              {NavLinks.map((links, i) => (
                <Link
                  key={`links-${i}`}
                  href={links.link}
                  className="hover:underline hover:underline-offset-8 hover:text-red-500"
                >
                  <div className="flex px-8 space-x-2 ">
                    <span className="font-bold">{links.digit}</span>
                    <span className="uppercase tracking-widest">
                      {links.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
