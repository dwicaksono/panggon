"use client";
import React, { useEffect } from "react";
import ButtonGoogle from "@/components/ButtonGoogle";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
	const { status, data: session } = useSession();

	useEffect(() => {
		if (status === "authenticated") {
			redirect("/");
		}
	}, [session]);

	return (
		<div className="flex justify-center items-center h-screen">
			<ButtonGoogle onClickLogin={() => signIn()} />
		</div>
	);
};

export default Login;
