import { Button, Textarea, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className=" mx-auto max-w-[1200px] grid grid-cols-2 gap-4 mt-10 px-5 md:px-3 lg:px-0">
      <div className=" col-span-2 md:col-span-1 rounded-2xl overflow-hidden relative pt-10 pb-20 px-5">
        <div className=" blur-3xl bg-slate-200 w-full h-full absolute left-0 top-0 -z-10" />
        <div className=" w-full h-full flex flex-col gap-40">
          <div>
            <h1 className=" text-4xl font-bold">Get in Touch</h1>
            <h2 className=" text-xl font-light mt-5">
              With the <strong>BEST</strong> to become the <strong>BEST</strong>
            </h2>
          </div>
          <Image
            width={340}
            height={240}
            src="/logo.png"
            alt="logo"
            className=" self-center"
          />
          <div className=" flex justify-between">
            <div className=" flex flex-col rotate-90 ml-[-90px]">
              <h4 className=" text-2xl font-bold">Exbatt</h4>
              <h6 className=" mt-[-10px] text-lg tracking-tight font-semibold">
                a EnerSys Company
              </h6>
            </div>
            <Image
              width={120}
              height={120}
              src="/arrowUpRight.svg"
              alt="Icon"
              className=" transition-all ease duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className=" col-span-2 md:col-span-1 border rounded-2xl flex flex-col gap-10 py-10 px-5">
        <Input label="First Name" size="md" className=" border rounded-xl" />
        <Input label="Last Name" size="md" className=" border rounded-xl" />
        <Input label="Company" size="md" className=" border rounded-xl" />
        <Input label="Email" size="md" className=" border rounded-xl" />
        <Input label="Phone" size="md" className=" border rounded-xl" />
        <Textarea label="Message" className=" border rounded-xl" />
        <Button
          radius="sm"
          className=" bg-gray-800 border border-transparent text-white font-bold hover:bg-white hover:text-gray-800 hover:border-gray-800"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
