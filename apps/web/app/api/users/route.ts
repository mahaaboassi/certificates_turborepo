// Shared from Packages
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";

export async function GET() {
    const result = await Helper({
        url: apiRoutes.users.findAll,
        method: "GET",
    });

    return Response.json(result.data, {
        status: result.status,
    });
}