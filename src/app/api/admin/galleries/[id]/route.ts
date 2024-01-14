import { NextRequest } from "next/server";
import { uploadFile, undoUpload, checkMultiPart, UploadError } from "@/controllers/uploadControllers";
import { getGallery, updateGallery, deleteGallery, type Gallery } from "@/controllers/galleryControllers";
import { isDynamicPath } from "@/lib/utilsTs";

import { prefix, size_limit, file_type } from "../config";
import { fetchedOne, updated, deleted, notFound, serverError, requiredOptional } from "../config";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;

	try {
		if (isNaN(id) || id < 1) throw new Error("Invalid ID");

		const gallery = await getGallery(id);
		if (gallery.data) return Response.json({ ...fetchedOne, ...gallery }, { status: 200 });
		else throw new Error("Invalid ID");
	} catch (e: any) {
		if (e.message === "Invalid ID") return Response.json(notFound, { status: 404 });

		return Response.json(serverError, { status: 500 });
	}
}

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
	let image = "";
	const { id } = params;
	try {
		if (isNaN(id) || id < 1) throw new Error("Invalid ID");
		await checkMultiPart(req);
		const formData = await req.formData();
		let updateData: Partial<Gallery> = {};

		const file = formData.get("image") as Blob | null;
		if (file) {
			// Delete image if it exists
			const oldGallery = await getGallery(id);
			if (!oldGallery.data) throw new Error("Invalid ID");
			const galleryData = oldGallery.data as Gallery;
			if (galleryData.image && isDynamicPath(galleryData.image)) await undoUpload(galleryData.image);

			// Upload new image
			updateData.image = await uploadFile(file, { prefix, size_limit, file_type });
		}

		const title = formData.get("title") as string | undefined;
		if (title) updateData.title = title;

		const subtitle = formData.get("subtitle") as string | undefined;
		if (subtitle) updateData.subtitle = subtitle;

		const is_active = formData.get("is_active") as string | undefined;
		if (is_active) updateData.is_active = is_active.toLowerCase() !== "false";

		if (!title && !subtitle && !file && !is_active) {
			return Response.json(requiredOptional, { status: 400 });
		}

		// Update gallery
		const gallery = await updateGallery(id, updateData);
		return Response.json({ ...updated, ...gallery }, { status: 200 });
	} catch (e: any) {
		if (e.code === "P2025" || e.message === "Invalid ID") {
			return Response.json(notFound, { status: 404 });
		}
		if (e instanceof UploadError) {
			return Response.json({ success: false, message: e.message }, { status: 400 });
		}
		await undoUpload(image);
		return Response.json(serverError, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
	try {
		if (isNaN(params.id) || params.id < 1) throw new Error("Invalid ID");

		const gallery = await deleteGallery(params.id);
		return Response.json(deleted, { status: 200 });
	} catch (e: any) {
		if (e.code === "P2025" || e.message === "Invalid ID") return Response.json(notFound, { status: 404 });

		return Response.json(serverError, { status: 500 });
	}
}
