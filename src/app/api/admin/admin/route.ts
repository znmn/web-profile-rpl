import { NextRequest } from "next/server";
import { updateAdminPass } from "@/controllers/adminControllers";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

import { fetchedOne, serverError, updated, requiredMandatory, notFound } from "./config";

export async function GET(req: NextRequest) {
	try {
		const session = await getServerSession(options);
		if (!session) throw new Error("Invalid Session");

		return Response.json({ ...fetchedOne, data: session.user }, { status: 200 });
	} catch (e: any) {
		if (e.message === "Invalid Session") {
			return Response.json({ success: false, message: "You must be Loggged in first" }, { status: 401 });
		}

		return Response.json(serverError, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	let status = 400;
	try {
		let data = await req.json();
		const { password, new_password, confirm_new_password } = data;
		if (!password || !new_password || !confirm_new_password) return Response.json(requiredMandatory, { status });

		const session = await getServerSession(options);
		if (!session) throw new Error("Invalid Session");
		const id = session.user.id as string;

		if (new_password !== confirm_new_password) throw new Error("Confirm Password is not the same as New Password");

		const updatedAdmin = await updateAdminPass(id, password, new_password);
		return Response.json({ ...updated, ...updatedAdmin }, { status: 200 });
	} catch (e: any) {
		const message = e.message as string;
		if (e instanceof SyntaxError) {
			return Response.json({ success: false, message: "Wrong JSON Body Format" }, { status: 400 });
		}
		if (message === "Invalid Session") {
			return Response.json({ success: false, message: "You must be Loggged in first" }, { status: 401 });
		}
		if (message === "Confirm Password is not the same as New Password") {
			return Response.json({ success: false, message }, { status: 400 });
		}
		if (message === "Admin not found") {
			return Response.json(notFound, { status: 404 });
		}
		if (message.toLowerCase().includes("password")) {
			return Response.json({ success: false, message }, { status: 400 });
		}
		return Response.json(serverError, { status: 500 });
	}
}
