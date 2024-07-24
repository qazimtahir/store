import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex max-w-full pt-6 p-10 bg-black">
      <div className="items-center justify-center content-center pr-32 pb-4">
        <h1 className=" text-5xl pb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          Realistic Led <span className="font-extrabold">TV Screen</span>
        </h1>
        <p className="text-xl pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400 ">
          SAMSUNG SMART TVFULL HD 1080PIPS PANELWIFI, BUILT INWOOFER SOUNDULTRA
          CLEAN VIEWPURE COLOURS
        </p>
        <p>Price: Rs. 45000</p>

        <Link href="/" className="mb-2 text-sm text-blue-600">
          more details
        </Link>
      </div>

      <div>
        <Image src="/tv.png" width={800} height={500} alt="Picture of the tv" />
      </div>
    </div>
  );
};

export default HeroSection;
