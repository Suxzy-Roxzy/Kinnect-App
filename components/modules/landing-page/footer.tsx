import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-30 mb-15 items-center justify-center text-center">
      <Separator className="my-10"/>
      <div className="flex flex-col gap-1 leading-37">
        <div className="font-courier font-bold text-xl text-black dark:text-[#98DFEA]">
          @copyrights 2026
        </div>
        <p className="text-lg font-bold m-0 text-black dark:text-[#98DFEA]">
          Keeping trusted relationships and information within reach.
        </p>
      </div>
      <div className="text-3xl font-black items-center mt-4 text-blue-950 dark:text-[#98DFEA]">
        KINNECT
      </div>
    </div>
  );
};

export default Footer;
