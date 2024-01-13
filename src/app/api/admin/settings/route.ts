import { NextRequest } from "next/server";
import { getSettings, updateSettings } from "@/controllers/settingControllers";

import { fetchedAll, serverError, updated, requiredOptional } from "./config";

export async function GET(req: NextRequest) {
	try {
		const settings = await getSettings();
		return Response.json({ ...fetchedAll, ...settings }, { status: 200 });
	} catch (e) {
		return Response.json(serverError, { status: 500 });
	}
}

export async function PATCH(req: NextRequest) {
	try {
		let data = await req.json();

		const settings = await updateSettings(data);
		return Response.json({ ...updated, ...settings }, { status: 200 });
	} catch (e: any) {
		if (e instanceof SyntaxError) {
			return Response.json({ success: false, message: "Wrong JSON Body Format" }, { status: 400 });
		}
		if (e.message.toLowerCase().includes("no data")) {
			return Response.json(requiredOptional, { status: 400 });
		}
		return Response.json(serverError, { status: 500 });
	}
}
