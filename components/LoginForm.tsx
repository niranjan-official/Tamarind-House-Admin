"use client";
import { Login, checkAdmin } from "@/Functions/Function";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [load, setLoad] = useState(false);
  const Router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    const isAdmin = await checkAdmin(email);
    if (isAdmin.admin) {
      const status = await Login(email, password);
      console.log("Login Status: " + status);

      if (status.success) {
        Router.push("/home");
      } else {
        alert(status.error);
        setLoad(false);
      }
    } else {
      alert("Not a Valid Admin");
      setLoad(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="block mx-auto border border-gray-400 p-2 rounded-md mt-1"
        placeholder="Email"
        required
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="block mx-auto border border-gray-400 p-2 rounded-md mt-4"
        placeholder="Password"
        required
      />
      <div className="flex items-center mt-4 ">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleRememberMeChange}
          className="mr-2"
        />
        <label
          htmlFor="rememberMe"
          className="font-poppins text-sm text-red-500"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="w-32 flex justify-center gap-1 items-center mx-auto bg-red-700 text-white py-2 mt-6 rounded-md"
      >
        {load ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-loader animate-spin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l0 -3" />
            <path d="M16.25 7.75l2.15 -2.15" />
            <path d="M18 12l3 0" />
            <path d="M16.25 16.25l2.15 2.15" />
            <path d="M12 18l0 3" />
            <path d="M7.75 16.25l-2.15 2.15" />
            <path d="M6 12l-3 0" />
            <path d="M7.75 7.75l-2.15 -2.15" />
          </svg>
        ) : (
          <span>Login</span>
        )}
      </button>
    </form>
  );
};
