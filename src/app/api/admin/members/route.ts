import { NextRequest } from "next/server";
import { uploadFile, undoUpload, checkMultiPart, UploadError } from "@/controllers/uploadControllers";
import { getMembers, createMember } from "@/controllers/memberControllers";

import { prefix, size_limit, file_type } from "./config";
import { fetchedAll, added, serverError, requiredMandatory } from "./config";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page = searchParams.get("page") || 1;
		let limit = searchParams.get("limit") || 10;
		limit = Number(limit) > 100 ? 100 : limit;
		const search = searchParams.get("search") || "";

		const members = await getMembers(Number(page), Number(limit), String(search));
		return Response.json({ ...fetchedAll, ...members }, { status: 200 });
	} catch (e) {
		return Response.json(serverError, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	let status = 400;
	let image: string = "";
	try {
		await checkMultiPart(req);
		const formData = await req.formData();

		const name = formData.get("name") as string;
		const position = formData.get("position") as string;
		const file = formData.get("image") as Blob | null;

		if (!file || !name || !position) {
			return Response.json(requiredMandatory, { status });
		}

		image = await uploadFile(file, { prefix, size_limit, file_type });

		const member = await createMember({ name, image, position });

		status = 201;
		return Response.json({ ...added, ...member }, { status });
	} catch (e: any) {
		if (e instanceof UploadError) return Response.json({ success: false, message: e.message }, { status });

		if (image && image !== "") await undoUpload(image);
		status = 500;
		return Response.json(serverError, { status });
	}
}
