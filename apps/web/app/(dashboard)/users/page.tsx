import { apiRoutes } from "@repo/utils/apiRoutes";
import { Helper } from "@repo/utils/helper";
import { cookies } from "next/headers";

const Users = async () => {
  const cookieHeader = cookies().toString();
  const {response, message} = await Helper({
    url: apiRoutes.users.findAll,
    method: "GET",
    isFetchfresh: true,
    origin_url: process.env.NEXT_PUBLIC_APP_URL || window.location.origin,
    cookies: cookieHeader
  });

  const data = response?.data;
  if (!response || response.err == "1" || data.status != "ACCEPTED") {}
  return(<div></div>)
}
export default Users