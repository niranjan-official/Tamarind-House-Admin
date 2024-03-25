"use client";
import { getAllCurrentTokens } from "@/Functions/Function";
import RefreshButton from "@/components/RefreshButton";
import TokenCard from "@/components/TokenCard";
import { TOKEN_CARD } from "@/types";
import React, { useEffect, useState } from "react";

// const getTokens = async () => {
//   const data = await getAllCurrentTokens();
//   console.log("Data: ", data);
//   return data;
// };
const page = () => {
  // const tokens = await getTokens();
  const [tokens, setTokens] = useState<any[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getTokens = async () => {
      const data = await getAllCurrentTokens();
      console.log("Data: ", data);
      setTokens(data);
      setLoad(false);
    };
    getTokens();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-semibold">Today's Tokens</h1>
          <RefreshButton />
        </div>
        <hr className="b-2 border-zinc-500 my-4" />
      </div>
      <div className="flex flex-col gap-4">
        {!load ? (
          tokens.map((obj, key) => {
            return (
              <TokenCard
                key={key}
                tokenId={obj.id}
                studentId={obj.data.id}
studentName={obj.data.name}
                isCollected={obj.data.isCollected}
                date={obj.data.date}
                generationTime={obj.data.generationTime}
                dispenseTime={obj.data.Printing_time}
              />
            );
          })
        ) : (
          <div className="w-full mt-10 flex justify-center">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-loader-quarter animate-spin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l0 -3" />
            <path d="M6 12l-3 0" />
            <path d="M7.75 7.75l-2.15 -2.15" />
          </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
