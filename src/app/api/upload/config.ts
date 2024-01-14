import { responseJson } from "@/lib/utilsTs";

export const size_limit = 1024 * 1024 * 10;

export const { added, serverError, requiredMandatory } = responseJson({
	name: "File",
	mandatory: ["file"],
});
