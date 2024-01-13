import { responseJson } from "@/lib/utilsTs";
import { keysSettings } from "@/controllers/settingControllers";

export const { fetchedAll, updated, serverError, requiredOptional } = responseJson({
	name: "Setting",
	optional: keysSettings,
});
