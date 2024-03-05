import { getAllCurrentTokens, getAllUsers } from "@/Functions/Function";
import AddUserButton from "@/components/AddUserButton";
import DeleteButton from "@/components/DeleteButton";
import RefreshButton from "@/components/RefreshButton";
import { UserTable } from "@/components/userTable/UsersTable";
import { StudentData } from "@/types";
import React from "react";

const getUsers = async () => {
  const data: StudentData[] = await getAllUsers();
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
      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <h1 className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Student ID
                </h1>
              </th>
              <th scope="col" className="px-6 py-3">
                <h1 className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                  </svg>
                  Name
                </h1>
              </th>
              <th scope="col" className="px-6 py-3">
                <h1 className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
                  Email
                </h1>
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((obj, key) => {
              return (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    #{obj.id}
                  </th>
                  <td className="px-6 py-4">{obj.name}</td>
                  <td className="px-6 py-4">{obj.email}</td>
                  <td className="px-6 py-4">
                    <DeleteButton email={obj.email}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <div className="flex flex-1 justify-center overflow-y-scroll">
        <UserTable userData={userData} />
      </div>
    </div>
  );
};

export default Users;
