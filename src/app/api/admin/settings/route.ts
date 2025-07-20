import { NextRequest, NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/controllers/settingControllers";

import { fetchedAll, serverError, updated, requiredOptional } from "./config";

export async function GET(req: NextRequest) {
	try {
		const settings = await getSettings();
		return NextResponse.json({ ...fetchedAll, ...settings }, { status: 200 });
	} catch (e) {
		return NextResponse.json(serverError, { status: 500 });
	}
}

export async function PATCH(req: NextRequest) {
	try {
		let data = await req.json();

		const settings = await updateSettings(data);
		return NextResponse.json({ ...updated, ...settings }, { status: 200 });
	} catch (e: any) {
		if (e instanceof SyntaxError) {
			return NextResponse.json({ success: false, message: "Wrong JSON Body Format" }, { status: 400 });
		}
		if (e.message.toLowerCase().includes("no data")) {
			return NextResponse.json(requiredOptional, { status: 400 });
		}
		return NextResponse.json(serverError, { status: 500 });
	}
}
