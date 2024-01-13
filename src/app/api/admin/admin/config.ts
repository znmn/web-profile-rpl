import { responseJson } from "@/lib/utilsTs";

export const { fetchedOne, updated, notFound, serverError, requiredMandatory } = responseJson({
	name: "Admin",
	mandatory: ["password", "new_password", "confirm_new_password"],
});
