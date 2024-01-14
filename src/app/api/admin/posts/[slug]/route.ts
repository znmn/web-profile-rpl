import { NextRequest } from "next/server";
import { uploadFile, undoUpload, checkMultiPart, UploadError } from "@/controllers/uploadControllers";
import { getPost, updatePost, deletePost, type Post } from "@/controllers/postControllers";
import { isDynamicPath } from "@/lib/utilsTs";

import { prefix, size_limit, file_type } from "../config";
import { fetchedOne, updated, deleted, notFound, serverError, requiredOptional } from "../config";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;
	const post = await getPost(slug);
	if (post.data) {
		return Response.json({ ...fetchedOne, ...post }, { status: 200 });
	} else {
		return Response.json(notFound, { status: 404 });
	}
}

export async function PATCH(req: NextRequest, { params }: { params: { slug: string } }) {
	let image = "";
	const { slug } = params;
	try {
		await checkMultiPart(req);
		const formData = await req.formData();
		let updateData: Partial<Post> = {};

		const file = formData.get("image") as Blob | null;
		if (file) {
			// Delete image if it exists
			const oldPost = await getPost(slug);
			if (!oldPost.data) throw new Error("Invalid Slug");
			const postData = oldPost.data as Post;
			if (postData.image && isDynamicPath(postData.image)) await undoUpload(postData.image);

			// Upload new image
			updateData.image = await uploadFile(file, { prefix, size_limit, file_type });
		}

		const title = formData.get("title") as string | undefined;
		if (title) updateData.title = title;

		const content = formData.get("content") as string | undefined;
		if (content) updateData.content = content;

		const is_active = formData.get("is_active") as string | undefined;
		if (is_active) updateData.is_active = is_active.toLowerCase() !== "false";

		if (!title && !content && !file && !is_active) {
			return Response.json(requiredOptional, { status: 400 });
		}

		// Update post
		const post = await updatePost(slug, updateData);
		return Response.json({ ...updated, ...post }, { status: 200 });
	} catch (e: any) {
		if (e.code === "P2025" || e.message === "Invalid Slug") {
			return Response.json(notFound, { status: 404 });
		}
		if (e instanceof UploadError) {
			return Response.json({ success: false, message: e.message }, { status: 400 });
		}
		await undoUpload(image);
		return Response.json(serverError, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
	try {
		const post = await deletePost(params.slug);
		return Response.json(deleted, { status: 200 });
	} catch (e: any) {
		if (e?.code === "P2025") {
			return Response.json(notFound, { status: 404 });
		}
		return Response.json(serverError, { status: 500 });
	}
}
