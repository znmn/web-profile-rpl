import { NextRequest } from "next/server";
import { uploadFile, undoUpload, checkMultiPart, UploadError } from "@/controllers/uploadControllers";
import { getCourses, createCourse } from "@/controllers/courseControllers";

import { prefix, size_limit, file_type } from "./config";
import { fetchedAll, added, serverError, requiredMandatory } from "./config";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page = searchParams.get("page") || 1;
		let limit = searchParams.get("limit") || 10;
		limit = Number(limit) > 100 ? 100 : limit;
		const search = searchParams.get("search") || "";

		const courses = await getCourses(Number(page), Number(limit), String(search));
		return Response.json({ ...fetchedAll, ...courses }, { status: 200 });
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

		const title = formData.get("title") as string;
		const file = formData.get("image") as Blob | null;

		if (!file || !title) {
			return Response.json(requiredMandatory, { status });
		}

		image = await uploadFile(file, { prefix, size_limit, file_type });

		const course = await createCourse({ title, image });

		status = 201;
		return Response.json({ ...added, ...course }, { status });
	} catch (e: any) {
		if (e instanceof UploadError) return Response.json({ success: false, message: e.message }, { status });

		if (image && image !== "") await undoUpload(image);
		status = 500;
		return Response.json(serverError, { status });
	}
}
