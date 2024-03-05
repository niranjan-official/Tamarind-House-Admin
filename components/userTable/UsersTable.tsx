import { StudentData } from "@/types"
import { columns } from "./columns"
import { DataTable } from "./data-table"

interface UserTableProps {
  userData: StudentData[];
}

export const UserTable : React.FC<UserTableProps> = async({userData}) => {

  return (
      <DataTable columns={columns} data={userData}/>
  )
}
