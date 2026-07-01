// Shared from Packages
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";


export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {

    
    const result = await Helper({
        url: apiRoutes.institutions.one(params.id),
        method: "DELETE",
    });
    console.log("hererert", result);
    return Response.json(result.data, {
        status: result.status,
    });
}
export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {

    const body = await req.json();
    const result = await Helper({
        url: apiRoutes.institutions.create,
        method: "POST",
        body: JSON.stringify(body),
    });
    return Response.json(result.data, {
        status: result.status,
    });
}
export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    const body = await req.json();
    const result = await Helper({
        url: apiRoutes.institutions.one(params.id),
        method: "PATCH",
        body: JSON.stringify(body),
    });
    return Response.json(result.data, {
        status: result.status,
    });
}