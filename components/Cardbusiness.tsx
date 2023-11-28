import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface PropsCard {
	name: string;
	address: string;
	rating: number;
	isOpen: boolean;
	photo: string;
	urlDirection: string;
}
const Cardbusiness: FC<PropsCard> = ({
	name,
	address,
	rating,
	isOpen,
	photo,
	urlDirection,
}) => {
	return (
		<div className=" bg-white/50 rounded-xl w-56 overflow-hidden drop-shadow-md mt-6">
			<div className="h-36 w-full relative object-center">
				{photo.length > 0 ? (
					<Image
						alt={`image ${name}`}
						src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`}
						fill
						className="object-cover"
					/>
				) : (
					<div className="w-full h-full bg-indigo-600/30 backdrop-blur-lg flex justify-center items-center">
						<p className="text-2xl font-semibold text-slate-50"> no image </p>
					</div>
				)}
				<div className="absolute right-2 top-2 bg-slate-50 drop-shadow-md flex justify-center p-1 gap-1 items-center rounded-md">
					<span className="text-xs">⭐️</span>
					<p className="text-sm font-semibold "> {rating}</p>
				</div>
			</div>

			<div className="px-4 pb-4 pt-2 bg-glassBlur">
				<p
					className={`text-xs font-semibold uppercase text-right ${
						isOpen ? "text-indigo-500 " : "text-red-600"
					}`}>
					{isOpen ? "open" : "closed"}
				</p>
				<h3 className="line-clamp-2 inset-0 leading-1 text-sm font-semibold">
					{name}
				</h3>
				<p className="leading-1 text-xs line-clamp-3">{address}</p>
				<Link href={urlDirection} legacyBehavior>
					<a target="_blank">
						<p className="mt-3 text-sm text-indigo-500  font-semibold">
							Direction
						</p>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Cardbusiness;
