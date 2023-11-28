import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./AuthProvide";

const ralway = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Find Nearby ATMs and Gas Stations - Panggon",
	description:
		"Locate nearby ATMs and gas stations easily with our interactive map",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={ralway.className}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
