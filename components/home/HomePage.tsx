import React, { ChangeEvent, useState } from "react";
import GoogleMapVIew from "./GoogleMapVIew";
import LeftSideBar from "../LeftSideBar";
import RighrSideBar from "../RighrSideBar";

const HomePage = () => {
	return (
		<section className="relative">
			<LeftSideBar />
			<RighrSideBar />
			<div className="h-screen">
				<GoogleMapVIew />
			</div>
		</section>
	);
};

export default HomePage;
