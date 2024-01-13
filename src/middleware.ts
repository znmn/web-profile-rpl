// export { default } from "next-auth/middleware";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: ["/admin/:path*", "/api/upload/:function*", "/api/admin/:function*"],
};
export async function middleware(req: NextRequest) {
	const token = await getToken({ req }),
		url = req.nextUrl.clone();
	if (url.pathname.startsWith("/api")) {
		if (req.method === "GET") return NextResponse.next();

		return token ? NextResponse.next() : NextResponse.json({ status: 401, message: "Unauthorized" }, { status: 401 });
	} else {
		const callbackURL = encodeURIComponent(url.toString());
		url.pathname = options?.pages?.signIn || "/api/auth/signin";
		return token ? NextResponse.next() : NextResponse.redirect(`${url.toString()}?callbackUrl=${callbackURL}`);
	}
}
