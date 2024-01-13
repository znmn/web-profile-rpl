import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { unlink } from "fs";
import mime from "mime-types";

export class UploadError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "UploadError";
		Object.setPrototypeOf(this, UploadError.prototype);
	}
}

export default async function uploader(
	file: File | Blob | null,
	options?: {
		prefix?: string;
		size_limit?: number;
		file_type?: string;
	}
) {
	if (!file) throw new UploadError("No file provided");

	const { prefix = "uploaded", size_limit = 1024 * 1024 * 10, file_type = "" } = options || {};

	const buffer = file instanceof Blob ? Buffer.from(await file.arrayBuffer()) : file;

	const fileType = file.type;
	let type = "others";
	if (fileType.includes("image")) type = "images";
	if (fileType.includes("video")) type = "videos";
	if (fileType.includes("audio")) type = "audios";
	if (fileType.includes("pdf") || fileType.includes("msword") || fileType.includes("officedocument")) type = "documents";
	if (fileType.includes("text")) type = "texts";

	const relativeUploadDir = `/uploaded/${type}`;
	const uploadDir = join(process.cwd(), "public", relativeUploadDir);
	const filename = `${prefix}-${Date.now()}.${mime.extension(fileType)}`;

	if (buffer.byteLength > size_limit) {
		throw new UploadError("File too large");
	}
	if (file_type !== "" && !file_type.split(",").includes(fileType)) {
		throw new UploadError("Invalid file type");
	}

	try {
		await stat(uploadDir);
	} catch (e: any) {
		if (e.code === "ENOENT") {
			await mkdir(uploadDir, { recursive: true });
		} else {
			throw new Error("Error creating directory");
		}
	}

	try {
		await writeFile(join(uploadDir, filename), Buffer.from(buffer));
		return `${relativeUploadDir}/${filename}`;
	} catch (err) {
		throw new Error("Error saving file");
	}
}

export async function deleteFile(path: string) {
	const filePath = join(process.cwd(), "public", path);
	return unlink(filePath, (err) => {
		if (err) return false;
	});
}
