import Image from "next/image";
import React, { FC } from "react";

interface ButtonProps {
	onClickLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonGoogle: FC<ButtonProps> = ({ onClickLogin }) => {
	return (
		<button
			onClick={onClickLogin}
			className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
			<Image
				className="w-6 h-6"
				src="https://www.svgrepo.com/show/475656/google-color.svg"
				loading="lazy"
				alt="google logo"
				width={100}
				height={100}
			/>
			<span>Login with Google</span>
		</button>
	);
};

export default ButtonGoogle;
