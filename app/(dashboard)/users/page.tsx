import { getAllCurrentTokens, getAllUsers } from "@/Functions/Function";
import AddUserButton from "@/components/AddUserButton";
import RefreshButton from "@/components/RefreshButton";
import { UserTable } from "@/components/userTable/UsersTable";
import { StudentData } from "@/types";
import React from "react";

const getUsers = async () => {
  const data: StudentData[] = await getAllUsers();
  // const data : any[] = [];
  console.log("Data: ", data);
  return data;
};
const Users = async () => {
  const userData = await getUsers();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold">Students List</h1>
          <RefreshButton/>
        </div>
        <AddUserButton />
      </div>
      <hr className="my-4 b-2 border-black" />
      <div className="flex flex-1 justify-center overflow-y-scroll">
        <UserTable userData={userData} />
      </div>
    </div>
  );
};

export default Users;
