"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "./icons/menuIcon";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className=" relative">
      <Menu menu={menu} setMenu={setMenu} />
      <nav className=" bg-[#1D1E26] py-5">
        <div className=" max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              width={230}
              height={70}
              src="/logoWhite.png"
              alt="Logo"
              className=" hover:scale-95 transition-all ease-soft-spring duration-500"
            />
          </Link>
          <div onClick={() => setMenu(!menu)}>
            <MenuIcon className=" text-white w-10 hover:scale-90 transition-all ease-soft-spring duration-700 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
