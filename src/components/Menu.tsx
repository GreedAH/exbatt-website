"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import BackIcon from "./icons/backIcon";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ menu, setMenu }: any) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=" absolute top-0 right-0 w-screen lg:w-[500px] h-screen z-10 backdrop-blur-md bg-slate-900/60 flex flex-col px-[100px] py-8 gap-10"
        >
          <div onClick={() => setMenu(false)}>
            <BackIcon className=" w-10 text-white hover:scale-90 transition-all ease-soft-spring duration-700 cursor-pointer" />
          </div>
          <div className=" flex flex-col h-full gap-8">
            <h2
              onClick={() => {
                router.push("/aboutUs"), setMenu(false);
              }}
              className=" text-3xl text-white  cursor-pointer"
            >
              Reth Nesh
            </h2>
            <div className=" flex flex-col [&_div.accordianDiv]:px-0 [&_button]:py-0">
              <Accordion className=" accordianDiv">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Produktet"
                  className=" [&_span]:text-white [&_span]:text-3xl"
                >
                  <div className=" flex flex-col">
                    <h6 className=" text-xl text-[#ffffff80]">Industriale</h6>
                    <p className=" text-base text-[#ffffff] ml-5">NexSys</p>
                    <h6 className=" text-xl text-[#ffffff80]">
                      KABINET PËR BATERI
                    </h6>
                    <p className=" text-base text-[#ffffff] ml-5">
                      Flex Street
                    </p>
                    <h6 className=" text-xl text-[#ffffff80]">
                      MBUSHËS PËR BATERI
                    </h6>
                    <p className=" text-base text-[#ffffff] ml-5">Fiamm</p>
                    <h6 className=" text-xl text-[#ffffff80]">AKSESORË</h6>
                    <p className=" text-base text-[#ffffff] ml-5">
                      SISTEMI HAWKER I QARKULLIMIT TË ELEKTROLITEVE
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <h2
              onClick={() => {
                router.push("/team"), setMenu(false);
              }}
              className=" text-3xl text-white  cursor-pointer"
            >
              Ekipi
            </h2>
            <h2
              onClick={() => {router.push("/portfolio") , setMenu(false)}}
              className=" text-3xl text-white  cursor-pointer"
            >
              Portfolio
            </h2>
            <Button
              onClick={() => {
                router.push("/contact"), setMenu(false);
              }}
              className=" bg-white font-bold border border-transparent hover:bg-gray-800 hover:border-white hover:text-white"
            >
              Kontakt
            </Button>
            <Link href="/">
              <Image
                width={230}
                height={70}
                src="/logoWhite.png"
                alt="Logo"
                className=" hover:scale-95 transition-all ease-soft-spring duration-500 mt-auto"
              />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
