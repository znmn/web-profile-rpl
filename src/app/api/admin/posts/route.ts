import { NextRequest } from "next/server";
import { uploadFile, undoUpload, UploadError, checkMultiPart } from "@/controllers/uploadControllers";
import { getPosts, createPost } from "@/controllers/postControllers";
import type { SortOrder } from "@/lib/prisma";

import { prefix, size_limit, file_type } from "./config";

import { fetchedAll, added, serverError, requiredMandatory } from "./config";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page = searchParams.get("page") || 1;
		let limit = searchParams.get("limit") || 10;
		limit = Number(limit) > 100 ? 100 : limit;
		const search = searchParams.get("search") || "";
		let sort: SortOrder = searchParams.get("sort") as SortOrder;
		if (sort !== "asc" && sort !== "desc") {
			sort = "desc";
		}

		const posts = await getPosts(Number(page), Number(limit), String(search), sort);
		return Response.json({ ...fetchedAll, ...posts }, { status: 200 });
	} catch (e) {
		return Response.json(serverError, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	let status = 400;
	let image: string | null = "";
	try {
		await checkMultiPart(req);
		const formData = await req.formData();

		const file = formData.get("image") as Blob | null;
		const title = formData.get("title") as string;
		const content = formData.get("content") as string;

		if (!title || !content) {
			return Response.json(requiredMandatory, { status });
		}

		image = file ? await uploadFile(file, { prefix, size_limit, file_type }) : null;

		const post = await createPost({ title, image, content });

		status = 201;
		return Response.json({ ...added, ...post }, { status });
	} catch (e: any) {
		if (e instanceof UploadError) return Response.json({ success: false, message: e.message }, { status });

		if (image && image !== "") await undoUpload(image);
		status = 500;
		return Response.json(serverError, { status });
	}
}
