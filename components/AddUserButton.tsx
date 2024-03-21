"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addUser } from "@/Functions/Function";
import { StudentData } from "@/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddUserButton = () => {
  const [formData, setData] = useState<StudentData>({
    id: "",
    year: "",
    email: "",
    gender: "",
    program: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = await addUser(formData);
    if (status.success) {
      alert("User added successfully");
      setData({
        id: "",
        year: "",
        email: "",
        gender: "",
        program: "",
      });
    } else if (status.error) {
      alert(status.error);
    } else {
      alert("Unknown error occured");
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex gap-1 items-center p-2 px-3 bg-green-600 text-white rounded-xl hover:bg-green-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
          </svg>
          Add User
        </button>
      </DialogTrigger>
      <DialogContent className="w-max">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Add User</DialogTitle>
          <DialogDescription>
            <form
              onSubmit={handleSubmit}
              className="text-center flex flex-col items-center"
            >
              <input
                value={formData.id}
                onChange={(e) => setData({ ...formData, id: e.target.value })}
                className="p-2 bg-transparent border-b-2 border-red-950 mt-3 w-80 placeholder:text-red-950 placeholder:opacity-50 focus:ring-0 focus:outline-none"
                placeholder="Registration ID"
                type="text"
                required
              />
              <input
                value={formData.email}
                onChange={(e) =>
                  setData({ ...formData, email: e.target.value })
                }
                className="p-2 bg-transparent border-b-2 border-red-950 mt-3 w-80 placeholder:text-red-950 placeholder:opacity-50 focus:ring-0 focus:outline-none"
                placeholder="College Mail"
                type="text"
                required
              />
              <input
                value={formData.year}
                onChange={(e) => setData({ ...formData, year: e.target.value })}
                className="p-2 bg-transparent border-b-2 border-red-950 mt-3 w-80 placeholder:text-red-950 placeholder:opacity-50 focus:ring-0 focus:outline-none"
                placeholder="Joining Year"
                type="number"
                required
              />
              <div className="relative w-full mt-4">
                <select
                  value={formData.program}
                  onChange={(e) =>
                    setData({ ...formData, program: e.target.value })
                  }
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Program</option>
                  <option value="btech">btech</option>
                  <option value="mba">mba</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 mt-4">
                <div className="flex items-center space-x-1">
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e)=>setData({ ...formData, gender: e.target.value })}
                  />
                  <Label htmlFor="male">male</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={(e)=>setData({ ...formData, gender: e.target.value })}
                  />
                  <Label htmlFor="female">female</Label>
                </div>
              </div>
              <button
                type="submit"
                className="w-1/2 p-2 bg-red-700 hover:bg-red-900 text-xl text-white rounded-md mt-6"
              >
                Add
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserButton;
