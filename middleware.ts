import { NextResponse } from "next/server";

import { withAuth } from "next-auth/middleware";
// import { pages } from "next/dist/build/templates/app-page";

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(req) {
		const isPublicPath = req.nextUrl.pathname === "/login";
		if (req.nextauth.token && isPublicPath) {
			return NextResponse.redirect(new URL("/", req.url));
		}

		if (!isPublicPath && !req.nextauth.token) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	}
);

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
