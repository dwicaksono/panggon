import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	console.log(path, "????");
	// const isPublicPath = path === "/login" || path === "/singup";

	// if (isPublicPath && token) {
	// 	return NextResponse.redirect(new URL("/", req.url));
	// }

	// if (!isPublicPath && !token) {
	// 	return NextResponse.redirect(new URL("/login", req.url));
	// }
	return;
}

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
