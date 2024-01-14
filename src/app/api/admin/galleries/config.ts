import { responseJson } from "@/lib/utilsTs";

export const size_limit = 1024 * 1024 * 5,
	file_type = "image/jpeg,image/png,image/webp",
	prefix = "gallery";

export const { fetchedAll, fetchedOne, added, updated, deleted, notFound, serverError, requiredOptional, requiredMandatory } = responseJson({
	name: "Gallery",
	mandatory: ["title", "image"],
	optional: ["title", "content", "image", "is_active"],
});
