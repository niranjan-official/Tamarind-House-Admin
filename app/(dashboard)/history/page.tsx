
import { HistoryFormatSelect } from "@/components/HistoryFormatSelect";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl font-semibold">Token History</h1>
      <p className="text-zinc-500 mt-4">
        Here you can see the token history of students in different formats.
      </p>
      <HistoryFormatSelect/>
    </div>
  );
};

export default page;
