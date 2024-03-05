import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-screen flex bg-primary">
      <div className="w-1/5 p-4 hidden md:block">
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
        <NavBar/>
      </div>
      <div className="min-h-screen flex flex-grow bg-slate-200 p-4">{children}</div>
    </div>
  );
};

export default layout;
