import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UsersComponent } from "./users";
// Shared from Packages
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";
import { columns } from "./columns";



const Users = async () => {
  const cookieStore = await cookies();
  const result = await Helper({
    url: apiRoutes.users.findAll,
    method: "GET",
    origin_url: process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:4000" ,
    headers: {
      Cookie: cookieStore.toString(), 
    },
  });
  if(result.status == 401){
    // push to login page
    redirect("/");
  }
  console.log("********",result.data.data)
  if(result.ok)
  return(<div className="space-y-4">
    <h1> Users List</h1>
    <UsersComponent columns={columns} data={result.data.data}/>
  </div>)
}
export default Users