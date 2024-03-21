'use client'
import Menu from "@/components/Menu";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const User = useAuth();

  return (
    <div className="min-h-screen sm:h-screen w-screen flex">
      <Menu/>
      <div className="h-full flex flex-grow bg-slate-200 p-4">{children}</div>
    </div>
  );
};

export default layout;
