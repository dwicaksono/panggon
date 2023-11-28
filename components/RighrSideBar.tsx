"use client";
import React, { useState } from "react";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import Cardbusiness from "./Cardbusiness";
import { motion } from "framer-motion";
const RighrSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const triggerClose = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div className="absolute z-10 right-0">
			<div className="flex items-start">
				<div
					className="w-8 h-16 flex items-center justify-center bg-indigoGlass p-1 rounded-l-lg cursor-pointer mt-10"
					onClick={triggerClose}>
					<TbLayoutSidebarRightExpandFilled className="text-2xl text-slate-100" />
				</div>
				<motion.div
					initial="hidden"
					animate={isOpen ? "visible" : "hidden"}
					variants={{
						hidden: {
							opacity: 0,
							x: "100%",
							transition: { duration: 0.5, type: "spring", bounce: 0.5 },
						},
						visible: {
							opacity: 1,
							x: 0,
							transition: { duration: 0.35, type: "spring", bounce: 0.5 },
						},
					}}
					className={`bg-glassBlur h-screen px-4 text-black overflow-hidden overflow-y-auto ${
						!isOpen && "hidden"
					}`}>
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
					<Cardbusiness />
				</motion.div>
			</div>
		</div>
	);
};

export default RighrSideBar;
