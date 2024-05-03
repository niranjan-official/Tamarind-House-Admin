"use client";
import { DispenseStudentToken } from "@/Functions/Function";
import { TOKEN_CARD } from "@/types";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";

const TokenCard = ({
  tokenId,
  studentId,
  isCollected,
  date,
  generationTime,
  dispenseTime,
}: TOKEN_CARD) => {
  const Router = useRouter();
  const DispenseToken: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (confirm(`Do you want to delete ${tokenId} ? `)) {
      const status = await DispenseStudentToken(tokenId);
      if (status.success) {
        alert("Dispensed");
        // Router.refresh();
        window.location.reload();
      } else {
        alert(status.error);
      }
    }
  };
  return (
    <div
      className={`w-full h-max flex flex-col p-4 rounded-md shadow-md ${
        isCollected ? "bg-green-100" : "bg-red-100"
      } lg:px-6`}
    >
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col justify-evenly">
          <h1 className="text-2xl font-bold">Token ID: {tokenId}</h1>
          <h2 className="">
            Student ID:
            <span className="font-semibold"> {studentId}</span>
          </h2>
          <h3>
            Dispense Status:
            <span className="font-semibold">
              {" "}
              {isCollected ? "Collected" : "Not collected"}{" "}
            </span>
          </h3>
        </div>
        <div className="flex flex-col justify-evenly max-sm:mt-2">
          <h3 className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            {date}
          </h3>
          <h3 className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            G-Time: {generationTime}
          </h3>
          {isCollected && (
            <h3 className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>
              D-Time: {dispenseTime}
            </h3>
          )}
        </div>
      </div>
      {!isCollected && (
        <>
          <hr className="border border-red-950 my-2" />
          <button
            onClick={DispenseToken}
            className="w-40 p-2 text-white bg-red-800 rounded-lg hover:bg-red-900"
          >
            Dispense it
          </button>
        </>
      )}
    </div>
  );
};

export default TokenCard;
