import Image from "next/image";
import { productImages } from "./constants/imagePaths";
import { Barlow, Belle } from "./Fonts/Fonts";

export default function Home() {
  return (
    <div className="">
      {/* Mobile view */}
      <div className="bg-tabletHomeBck bg-cover bg-no-repeat h-screen lg:hidden">
        <div className="flex flex-col text-white pt-[11em] space-y-6 items-center">
          <div className="flex flex-col items-center space-y-4">
            <span className={`${Barlow.className} text-xl tracking-wide`}>
              SO, YOU WANT TO TRAVEL TO
            </span>
            <span
              className={`${Belle.className} uppercase text-8xl tracking-widest`}
            >
              space
            </span>
            <p className="w-[19em] text-center">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="">
            <div className="mt-24 w-[9em] h-[9em] rounded-full text-black flex items-center justify-center bg-white font-serif text-[20px] tracking-[1.25px] outline-none active:outline-none ring-0  hover:ring-[30px] hover:ring-gray-400 hover:ring-opacity-20 transition duration-500 ease-in-out lg:w-[274px] lg:h-[274px] lg:text-[32px] lg:tracking-[2px] lg:hover:ring-[50px]">
              Explore
            </div>
          </div>
        </div>
      </div>
      {/* Desktop view */}
      <div className="hidden lg:block bg-homeBck w-screen h-screen text-spaceWhite">
        <div className="flex">
          <div className="flex items-center justify-center flex-1">
            <div className="mt-[17em]">
              <div className="flex flex-col space-y-6">
                <span
                  className={`${Barlow.className} text-2xl tracking-widest`}
                >
                  SO, YOU WANT TO TRAVEL TO
                </span>
                <span
                  className={`${Belle.className} uppercase text-9xl tracking-widest`}
                >
                  space
                </span>
                <p className="w-[24em]">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-[18em] flex justify-center">
            {/* <div className="flex items-center justify-center text-spaceBlack text-2xl h-[8em] w-[8em] bg-white rounded-full">
            Explore
          </div> */}
            <div className="mt-24 w-[9em] h-[9em] rounded-full text-black flex items-center justify-center bg-white font-serif text-[20px] tracking-[1.25px] outline-none active:outline-none ring-0  hover:ring-[30px] hover:ring-gray-400 hover:ring-opacity-20 transition duration-500 ease-in-out lg:w-[274px] lg:h-[274px] lg:text-[32px] lg:tracking-[2px] lg:hover:ring-[50px]">
              Explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
