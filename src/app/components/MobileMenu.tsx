import React, { useState } from "react";
import Hamburger from "../../../public/menu.svg";
import Close from "../../../public/close.svg";
import Logo from "../../../public/xsLogo.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Barlow } from "../Fonts/Fonts";
import Link from "next/link";

interface NavLink {
  link: string;
  title: string;
}

const MobileMenu = ({ navLinks }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-screen py-6">
      <div className="flex justify-between">
        <div className="px-6 ">
          <Image src={Logo} alt="logo" className="w-[1.8em]" />
        </div>
        <div className="cursor-pointer px-8" onClick={handleOpen}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <div className={`${Barlow.className}`}>
        {open ? (
          <>
            <div className="relative">
              <div className="h-screen w-3/4 absolute bg-blue-500 backdrop-blur-md bg-opacity-5 right-0 -top-[3.7em] ease-in-out duration-75">
                <div className="flex flex-col px-6 py-6 ">
                  <div className="flex justify-end" onClick={handleOpen}>
                    <CloseIcon fontSize="large" />
                  </div>
                </div>
                <div className="px-8">
                  {navLinks.map((links: NavLink, i: number) => (
                    <Link key={`links-${i}`} href={links.link} passHref>
                      <div
                        className="flex flex-col py-6 text-xl uppercase tracking-wider"
                        key={i}
                        onClick={handleLinkClick}
                      >
                        {links.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MobileMenu;
