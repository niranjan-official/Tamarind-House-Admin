"use client";
import { Login, checkAdmin } from "@/Functions/Function";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const Router = useRouter();

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
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
    const isAdmin = await checkAdmin(email);
    if (isAdmin.admin) {
      const status = await Login(email, password);
      console.log("Login Status: " + status);

      if (status.success) {
        Router.push("/home");
      } else {
        alert(status.error);
      }
    } else {
      alert("Not a Valid Admin");
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
        className="block mx-auto bg-red-700 text-white px-4 py-2 mt-6 rounded-md"
      >
        Login
      </button>
    </form>
  );
};
