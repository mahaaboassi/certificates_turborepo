// Shared from Packages
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    const body = await req.json();

    const result = await Helper({
        url: apiRoutes.users.one(params.id),
        method: "PATCH",
        body,
    });

    return Response.json(result.data, {
        status: result.status,
    });
}