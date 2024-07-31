"use client";
import Menu from "@/components/Menu";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { VscLoading } from "react-icons/vsc";
import Loading from "./loading";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const User = useAuth();

  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      {User ? (
        <div className="min-h-screen md:h-screen w-screen flex flex-col md:flex-row">
          <Menu />
          <div className="h-full flex flex-grow p-4"><Suspense fallback={<Loading/>}>{children}</Suspense></div>
        </div>
      ) : (
        <VscLoading size={40} className="animate-spin text-center" />
      )}
    </div>
  );
};

export default layout;
