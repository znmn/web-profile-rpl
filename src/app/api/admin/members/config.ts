import { responseJson } from "@/lib/utilsTs";

export const size_limit = 1024 * 1024 * 5,
	file_type = "image/jpeg,image/png,image/webp",
	prefix = "member";

export const { fetchedAll, fetchedOne, added, updated, deleted, notFound, serverError, requiredOptional, requiredMandatory } = responseJson({
	name: "Member",
	mandatory: ["name", "image", "position"],
	optional: ["name", "image", "position", "is_active"],
});
