import React from "react";
import Image from "next/image";
import {LoginForm} from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="p-2 w-full" style={{ position: 'absolute', top: 0, left: 0 }}>
        <Image src="/Rectangle 1.svg" width={250} height={250} alt="rectangle"/>
      </div>
      <div className="pt-3">
        <Image src="/images1.png" width={300} height={250} alt="logo"/>
        <p className="font-poppins font-bold ml-2 text-center underline text-2xl text-red-700">LOGIN</p>
      </div>
      <div>
        <LoginForm />
      </div>
    </main>
  );
}
