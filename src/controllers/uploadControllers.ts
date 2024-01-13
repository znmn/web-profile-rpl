import { NextRequest } from "next/server";
import uploader, { UploadError, deleteFile } from "@/lib/uploader";

export async function uploadFile(file: File | Blob, opts?: { prefix?: string; size_limit?: number; file_type?: string }) {
	const { size_limit = 1024 * 1024 * 10, file_type = "", prefix = "uploaded" } = opts || {};

	return await uploader(file, { prefix, size_limit, file_type });
}

export async function checkMultiPart(req: NextRequest) {
	const isFormData = req.headers.get("content-type")?.includes("multipart/form-data");
	if (!isFormData) {
		throw new UploadError("Invalid content-type. Expected multipart/form-data");
	}
}

export async function undoUpload(path: string) {
	return await deleteFile(path);
}

export { UploadError };
