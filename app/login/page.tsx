import React from "react";
import Image from "next/image";
import {LoginForm} from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 bg-white">
      <div className="w-full" style={{ position: 'absolute', top: 0, left: 0 }}>
        <Image src="/Rectangle 1.svg" width={250} height={250} alt="rectangle"/>
      </div>
      <div className="pt-3">
        <Image src="/images1.png" width={200} height={200} alt="logo"/>
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <p className="font-poppins font-bold ml-2 text-center text-4xl text-red-700">LOGIN</p>
        <LoginForm />
      </div>
    </main>
  );
}
