"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const MainpageNav = () => {
  return (

    <div className="flex items-center gap-4 bg-card p-2 px-5 w-full shadow-2xl border-border">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className="bg-black rounded-xl p-1">
            <MoveUpRight className="h-8 w-8 text-amber-50" />
          </div>
          <span className="font-extrabold text-2xl text-card-foreground">
            KIN<span className=" text-blue-500">NECT</span> APP
          </span>
        </div>
      </div>
      <div className="flex font-courier text-lg">
        <Link href={"/register"} className="hover:bg-muted hover:p-3 hover:rounded-md p-3 text-bold hover:text-muted-foreground">Sign In</Link>
        <Link href={"/login"} className="hover:bg-muted hover:p-3 hover:rounded-md p-3 text-bold hover:text-muted-foreground">Login In</Link>
        <Link href={"/about"} className="hover:bg-muted hover:p-3 hover:rounded-md p-3 text-bold hover:text-muted-foreground">About</Link>
      </div>
    </div>
  );
};

export default MainpageNav;
