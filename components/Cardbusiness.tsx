import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cardbusiness = () => {
	return (
		<div className="bg-white/50 rounded-xl w-56 overflow-hidden drop-shadow-md mt-6">
			<div className="h-36 w-full relative object-center">
				<Image
					alt="picture-business"
					src="https://lh5.googleusercontent.com/p/AF1QipP7Ip_ELqkcqFYwV1Rynd3iicVqDenv05NlLQhu=w426-h240-k-no"
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-4 bg-glassBlur">
				<h3 className="line-clamp-2 inset-0 leading-1 text-sm font-semibold">
					SPBU Pertamina Balong Sari 54.601.33
				</h3>
				<p className="leading-1 text-xs line-clamp-3">
					Jl. Raya Bibis No.28 Bibis Tandes Surabaya, East Java 60186, Indonesia
				</p>
				<Link href={"/"}>
					<p className="mt-3 text-sm text-indigo-500  font-semibold">
						Direction
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Cardbusiness;
