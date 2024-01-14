import { NextRequest } from "next/server";
import { uploadFile, undoUpload, UploadError, checkMultiPart } from "@/controllers/uploadControllers";

import { size_limit } from "./config";
import { added, serverError, requiredMandatory } from "./config";

export async function POST(req: NextRequest) {
	let status = 400;
	let path: string = "";
	try {
		await checkMultiPart(req);
		const formData = await req.formData();

		const file = formData.get("file") as Blob | null;

		if (!file) {
			return Response.json(requiredMandatory, { status });
		}

		path = await uploadFile(file, { size_limit });

		status = 201;
		return Response.json({ ...added, data: { path } }, { status });
	} catch (e: any) {
		if (e instanceof UploadError) return Response.json({ success: false, message: e.message }, { status });

		if (path && path !== "") await undoUpload(path);
		status = 500;
		return Response.json(serverError, { status });
	}
}
