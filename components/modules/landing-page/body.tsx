"use client";

import { Button } from "@/components/ui/button";
import {
  ClipboardPaste,
  DatabaseBackup,
  DatabaseBackupIcon,
  Handshake,
  ShieldCheck,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";

const LandingPageBody = () => (
  <div className="flex flex-col justify-center items-center">
    <div className="flex pt-50">
      <p className="text-2xl font-bold">
        Kinnect — Your trusted network,{" "}
        <span className="bg-linear-to-r from-[#3c97dc] to-[#192f5e] text-transparent bg-clip-text">
          organized
        </span>{" "}
        and always accessible.
      </p>
    </div>
    <h3 className="mt-7 text-2xl font-black font-courier">
      WHAT CAN WE OFFER?
    </h3>
    <div className=" grid grid-cols-3 gap-6 pt-10">
      <div className="bg-card rounded-lg p-15 items-center justify-center shadow-xl">
        <ShieldCheck className="h-27 w-27 m-auto text-blue-900 text-shadow-accent" />
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="text-2xl font-bold font-google text-blue-900">
            SECURE
          </div>
          <div className="text-2xl font-bold font-google text-blue-900">
            CONNECTION
          </div>
        </div>
      </div>
      <div className="bg-popover rounded-lg p-15 shadow-xl border-border">
        <DatabaseBackup className="h-27 w-27 m-auto text-blue-800" />
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="text-2xl font-bold font-google text-blue-800">
            INFORMATION
          </div>
          <div className="text-2xl font-bold font-google text-blue-800">
            MANAGEMENT
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg p-15 shadow-xl border-border">
        <Handshake className="h-27 w-27 m-auto text-blue-900" />
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="text-2xl font-bold font-google text-blue-900">
            RELAIBLE
          </div>
          <div className="text-2xl font-bold font-google text-blue-900">
            CONNECTION
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 p-5 px-15 text-center items-center justify-center m-auto">
      <p className="font-extrabold text-lg text-shadow-2xs">
        <span className="text-blue text-xl">KINNECT</span> is a trusted digital
        space designed to keep your most important connections close. It allows
        individuals, families, and organizations to securely connect, organize,
        and maintain essential personal and professional information in one
        familiar place. From close friends and business partners to family and
        kin, Kinnect helps you stay connected across distance and time. Even in
        moments of loss or disruption, your network remains accessible,
        reliable, and easy to reconnect with. By preserving relationships and
        shared information, Kinnect strengthens togetherness and supports
        meaningful long-distance connections.
      </p>
    </div>

    <div className=" flex gap-15 justify-center items-center mt-10">
      <Link href="/dashboard">
        <Button
          variant="secondary"
          className="bg-primary p-6 text-white text-lg shadow-2xl border-border ring-ring ring-1"
        >
          Get Started
        </Button>
      </Link>
      <Link href="/about">
        <Button
          variant="secondary"
          className="bg-primary p-6 text-white text-lg shadow-2xl border-border ring-ring ring-1"
        >
          Learn More
        </Button>
      </Link>
    </div>
  </div>
);

export default LandingPageBody;
