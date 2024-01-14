import { responseJson } from "@/lib/utilsTs";

export const size_limit = 1024 * 1024 * 5,
	file_type = "image/jpeg,image/png,image/webp",
	prefix = "course";

export const { fetchedAll, fetchedOne, added, updated, deleted, notFound, serverError, requiredOptional, requiredMandatory } = responseJson({
	name: "Course",
	mandatory: ["title", "image"],
	optional: ["title", "image"],
});
