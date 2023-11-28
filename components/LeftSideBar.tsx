"use client";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import React, { useState } from "react";
import { MdStoreMallDirectory } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { GiVibratingBall } from "react-icons/gi";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Draggable from "react-draggable";

const LeftSideBar = () => {
	const [radius, setRadius] = useState<number>(10);
	const makanHandler = (type: number) => {
		switch (type) {
			case 1:
				console.log("makan" + type);
				break;
			case 2:
				console.log("makan" + type);
				break;
			case 3:
				console.log("makan" + type);
				break;
			case 4:
				console.log("makan" + type);
				break;
		}
	};

	const radiusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();
		setRadius(parseInt(e.target.value));
	};
	return (
		<Draggable cancel=".cancel-drag">
			<div className="absolute z-10 bg-glassBlur items-center hidden sm:flex flex-col border-2 rounded-2xl left-2 top-2 overflow-hidden cursor-pointer">
				<div className="w-full py-3 bg-indigoGlass flex flex-col item center justify-center">
					<div className="relative w-10 h-10 text-center mx-auto">
						<HiMiniViewfinderCircle className="text-4xl" />
					</div>
					<h3 className="text-slate-50 font-semibold text-xl text-center">
						Panggon
					</h3>
				</div>
				<div className="py-4 px-1 ">
					<div className="grid grid-cols-1 gap-2 bg-glassBlur">
						<div
							className="flex flex-col justify-center items-center backdrop-filter py-3 rounded-xl drop-shadow-md cursor-pointer hover:bg-glassBlur "
							onClick={() => makanHandler(1)}>
							<div className="w-fit h-fit bg-gradient_purple rounded-full p-3">
								<FaMoneyCheckDollar className="text-xl" />
							</div>
							<span className="font-bold mt-1 text-lg drop-shadow-md text-slate-100 bg-gradient_purple bg-clip-text text-transparent capitalize">
								atm
							</span>
						</div>

						<div
							className="flex flex-col justify-center items-center hover:bg-glassBlur  backdrop-filter py-4 rounded-xl drop-shadow-md cursor-pointer"
							onClick={() => makanHandler(1)}>
							<div className="w-fit h-fit bg-gradient_purple rounded-full p-3">
								<MdStoreMallDirectory className="text-xl" />
							</div>
							<span className="font-bold mt-1 text-lg drop-shadow-md text-slate-100 bg-gradient_purple bg-clip-text text-transparent capitalize">
								warung
							</span>
						</div>

						<div
							className="flex flex-col justify-center items-center hover:bg-glassBlur  backdrop-filter bg-gradient_purple/50  py-4 rounded-xl drop-shadow-md cursor-pointer"
							onClick={() => makanHandler(1)}>
							<div className="w-fit h-fit bg-gradient_purple rounded-full p-3 ">
								<FaGasPump className="text-xl" />
							</div>
							<span className="font-bold mt-1 text-lg drop-shadow-md text-slate-100 bg-gradient_purple bg-clip-text text-transparent capitalize">
								gas
							</span>
						</div>
						<div
							className="flex flex-col justify-center items-center hover:bg-glassBlur  backdrop-filter bg-gradient_purple/50  py-4 rounded-xl drop-shadow-md cursor-pointer"
							onClick={() => makanHandler(1)}>
							<div className="w-fit h-fit bg-gradient_purple rounded-full p-3 ">
								<GiVibratingBall className="text-xl" />
							</div>
							<span className="font-bold mt-1 text-lg drop-shadow-md text-slate-100 bg-gradient_purple bg-clip-text text-transparent capitalize">
								pentol
							</span>
						</div>
					</div>
					<div className="cancel-drag">
						<input
							className="slider-thumb appearance-none mt-5 w-full h-2 rounded-full bg-indigoGlass outline-none focus:outline-none"
							type="range"
							min={10}
							max={100}
							step={5}
							onChange={(e) => radiusHandler(e)}
						/>
						<p className="text-center font-base text-xs text-slate-600">
							{radius} in meters
						</p>
					</div>
				</div>
			</div>
		</Draggable>
	);
};

export default LeftSideBar;
