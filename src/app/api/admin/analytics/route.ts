import { NextRequest } from "next/server";
import { getReports } from "@/controllers/analitycController";

import { fetchedOne, serverError } from "./config";

export async function GET(req: NextRequest) {
	try {
		const reports = await getReports();
		return Response.json({ ...fetchedOne, ...reports }, { status: 200 });
	} catch (e: any) {
		const message = ((e.message as string) || "Error").toLowerCase();
		if (message.includes("ga_property_id") || message.includes("permission_denied") || e.code == 7) {
			return Response.json({ success: false, message: "SET GA_PROPERTY_ID on Environment Properly!" }, { status: 404 });
		}
		if (e.code == 16 || e.code == "ENOENT" || message.includes("could not load the default credentials") || message.includes("unauthenticated")) {
			return Response.json({ success: false, message: "SET GA_BEARER_TOKEN on Environment or Add creditials.json on project root folder Properly!" }, { status: 401 });
		}
		if (message.includes("resource_exhausted")) {
			return Response.json({ success: false, message: "Google Analytics API Limit" }, { status: 429 });
		}
		return Response.json(serverError, { status: 500 });
	}
}
