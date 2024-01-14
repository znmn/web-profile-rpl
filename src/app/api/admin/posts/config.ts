import { responseJson } from "@/lib/utilsTs";

export const size_limit = 1024 * 1024 * 10,
	file_type = "image/jpeg,image/png,image/webp",
	prefix = "blog";

export const { fetchedAll, fetchedOne, added, updated, deleted, notFound, serverError, requiredOptional, requiredMandatory } = responseJson({
	name: "Post",
	mandatory: ["title", "content", "image"],
	optional: ["title", "content", "image"],
});
