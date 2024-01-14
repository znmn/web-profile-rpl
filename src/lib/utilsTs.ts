import { join } from "path";
import { readFile } from "fs/promises";
import { sign } from "jsonwebtoken";

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

export async function genGABearerToken(): Promise<string | null> {
	const authPath = join(process.cwd(), "credentials.json"),
		authData = JSON.parse((await readFile(authPath)) as any);

	const { private_key_id, private_key, client_email } = authData;
	if (!private_key_id || !private_key || !client_email) return null;

	const iat = Math.floor(Date.now() / 1000),
		exp = iat + 3600;

	const GA_BEARER_TOKEN = sign(
		{
			iss: client_email,
			sub: client_email,
			aud: "https://analyticsdata.googleapis.com/",
			iat: iat,
			exp: exp,
		},
		private_key,
		{ algorithm: "RS256", keyid: private_key_id }
	);

	return GA_BEARER_TOKEN;
}
