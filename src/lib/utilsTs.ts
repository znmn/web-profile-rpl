export function responseJson(datas: { name: string; mandatory?: string[]; optional?: string[] }): {
	[key: string]: { success: boolean; message: string };
} {
	const { name, mandatory, optional } = datas;
	return {
		fetchedAll: { success: true, message: `${name}(s) fetched` },
		fetchedOne: { success: true, message: `${name} fetched` },
		added: { success: true, message: `${name} added` },
		updated: { success: true, message: `${name} updated` },
		deleted: { success: true, message: `${name} deleted` },
		notFound: { success: false, message: `${name} not found` },
		serverError: { success: false, message: "Internal server error" },
		requiredOptional: { success: false, message: `One/Some of optional field(s) are required${optional && ": " + optional.join(", ")}` },
		requiredMandatory: { success: false, message: `All of mandatory field(s) are required${mandatory && ": " + mandatory.join(", ")}` },
	};
}

export function isDynamicPath(url: string): boolean {
	const dynamicPathRegex = /^\/(?:[^\/]+\/)+[^\/]+\/?$/;

	return dynamicPathRegex.test(url);
}
