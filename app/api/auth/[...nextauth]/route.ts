import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return Promise.resolve(true);
		},
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
	},
	// pages: {
	// 	signIn: "/login", // Specify the path to your custom login page
	// },
});

export { handler as GET, handler as POST };
