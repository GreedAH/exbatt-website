import React from "react";
import YoutubeIcon from "./icons/youtubeIcon";
import FacebookIcon from "./icons/facebookIcon";
import LinkedInIcon from "./icons/linkedInIcon";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className=" mx-auto mt-10 max-w-[1200px] grid grid-cols-4 px-5 md:px-3 lg:px-0">
      <div className=" col-span-4 md:col-span-2 lg:col-span-1 text-center md:text-start flex flex-col">
        <h5 className=" font-semibold text-lg mb-2">Sitemap</h5>
        <p className=" text-sm hover:text-[#d92d3a] transition-all ease duration-700 cursor-pointer">
          Produktet
        </p>
        <p className=" text-sm hover:text-[#d92d3a] transition-all ease duration-700 cursor-pointer">
          Ekipi
        </p>
        <p className=" text-sm hover:text-[#d92d3a] transition-all ease duration-700 cursor-pointer">
          Reth Nesh
        </p>
      </div>
      <div className=" col-span-4 md:col-span-2 lg:col-span-1 text-center md:text-start flex flex-col justify-between">
        <h5 className=" font-semibold text-lg mb-2">Kontakt</h5>
        <p className=" text-sm hover:text-[#d92d3a] transition-all ease duration-700 cursor-pointer">
          Kosova: +383 38 770 005
        </p>
        <p className=" text-sm hover:text-[#d92d3a] transition-all ease duration-700 cursor-pointer">
          Shqiperi: +355 67 242 4124
        </p>
      </div>
      <div className=" col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
        <h5 className=" font-semibold text-lg mb-2 text-center md:text-start">
          Mediat Sociale
        </h5>
        <div className=" flex gap-4 justify-center items-center md:justify-start md:items-start">
          <Link
            href="https://www.youtube.com/channel/UCDxyTJz87lBHFYanQXx8A6Q"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon className=" fill-[#1D1E26] cursor-pointer w-16 hover:fill-red-700 transition-all ease duration-700" />
          </Link>
          <Link
            href="https://www.facebook.com/exbatt.industrial.batteries"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className=" fill-[#1D1E26] cursor-pointer w-16 hover:fill-blue-700 transition-all ease duration-700" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/exbatt-albania-0292491b2/?originalSubdomain=al"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className=" fill-[#1D1E26] cursor-pointer w-16 hover:fill-blue-700 transition-all ease duration-700" />
          </Link>
        </div>
      </div>
      <div
        className=" col-span-4 md:col-span-2 lg:col-span-1 
       flex justify-center items-center"
      >
        <Link href="/">
          <Image
            width={230}
            height={70}
            src="/logo.png"
            alt="logo"
            className=" hover:scale-95 transition-all ease-soft-spring duration-500"
          />
        </Link>
      </div>
      <div className=" col-span-4 mt-1 border-t border-[#D92D3A]">
        <p className=" text-xs mb-1">
          Copyright © {currentYear} Exbatt. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
