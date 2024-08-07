import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Image from "next/image";

const NavButton = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-primary border-0 pl-3">
          <div className="w-full flex flex-col z-50">
            <div className="flex items-center gap-2">
              <Image
                src={"/prc-logo.svg"}
                className="bg-red-100 p-1 rounded-md bg-opacity-70"
                alt="prc-logo"
                width={40}
                height={40}
              />
              <h1 className="text-red-100 text-2xl">Admin Panel</h1>
            </div>
            <hr className="my-4" />
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavButton;
