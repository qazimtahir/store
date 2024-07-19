import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <div className="flex min-w-full h-[100px] bg-gradient-to-r from-violet-700 to bg-orange-500 items-center gap-28 p-5 justify-center rounded-lg mt-5">
        <div>
          <Logo />
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="./tv">TV</Link>
        </div>
        <div>
          <Link href="./laptops">Laptops</Link>
        </div>
        <div>
          <Link href="./mobiles">Mobiles</Link>
        </div>
        <div>
          <Link href="./accessories">Accessories</Link>
        </div>
        <div>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
