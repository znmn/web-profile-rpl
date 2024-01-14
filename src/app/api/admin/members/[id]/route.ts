import { NextRequest } from "next/server";
import { uploadFile, undoUpload, checkMultiPart, UploadError } from "@/controllers/uploadControllers";
import { getMember, updateMember, deleteMember, type LabMember } from "@/controllers/memberControllers";
import { isDynamicPath } from "@/lib/utilsTs";

import { prefix, size_limit, file_type } from "../config";
import { fetchedOne, updated, deleted, notFound, serverError, requiredOptional } from "../config";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;

	try {
		if (isNaN(id) || id < 1) throw new Error("Invalid ID");

		const member = await getMember(id);
		if (member.data) return Response.json({ ...fetchedOne, ...member }, { status: 200 });
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
		let updateData: Partial<LabMember> = {};

		const file = formData.get("image") as Blob | null;
		if (file) {
			// Delete image if it exists
			const oldMember = await getMember(id);
			if (!oldMember.data) throw new Error("Invalid ID");
			const memberData = oldMember.data as LabMember;
			if (memberData.image && isDynamicPath(memberData.image)) await undoUpload(memberData.image);

			// Upload new image
			updateData.image = await uploadFile(file, { prefix, size_limit, file_type });
		}

		const name = formData.get("name") as string | undefined;
		if (name) updateData.name = name;

		const position = formData.get("position") as string | undefined;
		if (position) updateData.position = position;

		const is_active = formData.get("is_active") as string | undefined;
		if (is_active) updateData.is_active = is_active.toLowerCase() !== "false";

		if (!name && !position && !file && !is_active) {
			return Response.json(requiredOptional, { status: 400 });
		}

		// Update member
		const member = await updateMember(id, updateData);
		return Response.json({ ...updated, ...member }, { status: 200 });
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
	const { id } = params;
	try {
		if (isNaN(id) || id < 1) throw new Error("Invalid ID");

		const member = await deleteMember(id);
		if (member.data) return Response.json(deleted, { status: 200 });
		else throw new Error("Invalid ID");
	} catch (e: any) {
		if (e.code === "P2025" || e.message === "Invalid ID") return Response.json(notFound, { status: 404 });

		return Response.json(serverError, { status: 500 });
	}
}
