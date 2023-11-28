"use client";
import { useSession } from "next-auth/react";
import image from "next/image";
import Image from "next/image";
import React from "react";

const Navbar = () => {
	const { data } = useSession();
	return (
		<header className="w-full bg-white">
			<nav className="flex justify-between items-center text-slate-800 px-8 py-2">
				<div className="flex items-center gap-11">
					<h3>Logo</h3>
					<ul className="text-slate-700 flex items-center font-semibold gap-6">
						<li>Home</li>
						<li>Favorite</li>
					</ul>
				</div>
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-end bg-slate-100 py-[1px] pr-1 pl-2 w-[500px] max-w-xl rounded-full">
						<input
							type="text"
							className="bg-transparent w-full border-none outline-none text-xs"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-7 h-7 text-slate-400">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<div className="w-6 h-6 rounded-full overflow-hidden">
						{!!data && (
							<Image
								src={data?.user?.image!}
								alt="profile"
								width={100}
								height={100}
							/>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
