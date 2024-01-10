"use client";
import React from "react";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Barlow } from "../../Fonts/Fonts";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

type NavLinksShape = {
  title: string;
  link: string;
};

const NavLinks: NavLinksShape[] = [
  {
    title: "00 Home",
    link: "/",
  },
  {
    title: "01 destination",
    link: "/destination",
  },
  {
    title: "02 crew",
    link: "/crew",
  },
  {
    title: "03 technology",
    link: "/technology",
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className={`${Barlow.className}`}>
      {/* Mobile View */}
      <div className="absolute top-0 text-white sm:hidden">
        <MobileMenu navLinks={NavLinks} />
      </div>
      {/* Desktop Menu */}
      <div className="absolute top-10">
        <div className="hidden md:flex w-screen items-center">
          <div className="mx-16">
            <Image src={Logo} alt="logo" className="sm:w-[16em] lg:w-[3em]" />
          </div>
          <div className=" border-gray-500 border-b-[1px] w-[31em]"></div>
          <div className="bg-blue-500 backdrop-blur-md bg-opacity-5 flex-1">
            <div className="flex items-center justify-center text-white py-6">
              {NavLinks.map((links, i) => (
                <Link key={`links-${i}`} href={links.link} passHref>
                  <div
                    className={`flex px-8 space-x-2 ${
                      pathname === links.link
                        ? "underline underline-offset-8"
                        : ""
                    }`}
                  >
                    <span className="hidden lg:block uppercase tracking-widest">
                      {links.title}
                    </span>

                    <span className="sm:block lg:hidden uppercase tracking-widest">
                      {links.title.replace(/^\d+\s/, "")}
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
