"use client";
import React, { useEffect } from "react";
import ButtonGoogle from "@/components/ButtonGoogle";
import { signIn } from "next-auth/react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { useSearchParams } from "next/navigation";

const Login = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");

	async function handleGoogleLogin() {
		await signIn("google");
	}

	return (
		<div className="flex justify-center flex-col gap-8 items-center h-screen">
			<div className="flex flex-col items-center justify-center gap-84 bg-indigo-500/70 rounded-2xl py-4 px-8">
				<div className="relative w-fit h-fit text-center mx-aut">
					<HiMiniViewfinderCircle className="text-7xl" />
				</div>
				<h3 className="text-slate-50 font-semibold text-xl text-center">
					Panggon
				</h3>
			</div>
			<ButtonGoogle onClickLogin={handleGoogleLogin} />
		</div>
	);
};

export default Login;
