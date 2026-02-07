import React from "react";

const Header = () => {
  return (
    <div className="shadow-lg justify-center py-7 bg-linear-to-l from-[#195583] to-[#0f172a]">
      <div className="flex flex-col justify-center items-center w-full max-w-5xl h-100 bg-card border-border rounded-lg m-auto p-10 text-center ring-black ring-2 ">
        <div className="flex flex-col items-center leading-32">
          <span className=" flex text-[140px] font-extrabold text-gray-900">
            KIN
            <span className="bg-linear-to-r from-[#195583] to-[#0f172a] text-transparent bg-clip-text">
              NECT
            </span>
          </span>
          <span className="font-extrabold text-[120px] -mt-3 text-[]">
            AP
            <span className="bg-linear-to-r from-[#7198b6] to-[#233965] text-transparent bg-clip-text">
              P
            </span>
          </span>
        </div>
        <p className="text-wrap font-bold mt-4 text-lg">
          Kinnect is a secure space where relationships and information stay
          connected. It helps you organize and maintain trusted connections with
          family, friends, and organizations, keeping important personal and
          professional details accessible at all times. Even across distance or
          loss, Kinnect makes reconnecting simple, familiar, and reliable.
        </p>
      </div>
    </div>
  );
};

export default Header;
