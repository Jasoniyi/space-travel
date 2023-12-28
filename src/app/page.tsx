import Image from "next/image";
import { productImages } from "./constants/imagePaths";
import { Barlow, Belle } from "./Fonts/Fonts";

export default function Home() {
  return (
    <div className="bg-homeBck w-screen h-screen text-spaceWhite">
      <div className="flex">
        <div className="flex items-center justify-center flex-1">
          <div className="mt-[23em]">
            <div className="flex flex-col space-y-6">
              <span className={`${Barlow.className} text-2xl tracking-widest`}>
                SO, YOU WANT TO TRAVEL TO
              </span>
              <span
                className={`${Belle.className} uppercase text-9xl tracking-widest`}
              >
                space
              </span>
              <p className="w-[24em]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-[28em] flex justify-center">
          <div className="flex items-center justify-center text-spaceBlack text-2xl h-[8em] w-[8em] bg-white rounded-full">
            Explore
          </div>
        </div>
      </div>
    </div>
  );
}
