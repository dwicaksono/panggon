"use client";
import React, { useState } from "react";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import Cardbusiness from "./Cardbusiness";
import { motion } from "framer-motion";
import { useGetBusinessMap } from "@/hooks/useGetBusinessMap";
import { useSearchParams } from "next/navigation";
const RighrSideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const searchParams = useSearchParams();

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	const triggerClose = () => {
		setIsOpen((prev) => !prev);
	};
	const { data } = useGetBusinessMap();

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
					{data.map((item) => {
						const photo_ref = item?.photos
							? item?.photos[0]?.photo_reference
							: "";
						return (
							<Cardbusiness
								key={item.place_id}
								name={item.name}
								address={item.formatted_address}
								rating={item.rating}
								isOpen={item.opening_hours?.open_now}
								photo={photo_ref}
								urlDirection={`
								https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${item.geometry.location.lat},${item.geometry.location.lng}&travelmode=driving	
								`}
							/>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
};

export default RighrSideBar;
