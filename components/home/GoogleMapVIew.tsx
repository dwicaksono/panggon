"use client";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetBusinessMap } from "@/hooks/useGetBusinessMap";
import MarkerBusiness from "../MarkerBusiness";
const mapStyle = {
	width: "100%",
	height: "100%",
};

const customSize = {
	width: 40,
	height: 40,
	equals: function (other: google.maps.Size) {
		return this.width === other.width && this.height === other.height;
	},
};
const GoogleMapVIew = () => {
	const searchParams = useSearchParams();
	const { push } = useRouter();

	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);
	const center: any = {
		lat: latitude,
		lng: longitude,
	};
	const { data } = useGetBusinessMap();

	useEffect(() => {
		const category = searchParams.get("category");
		const radius = searchParams.get("radius");

		// Check if geolocation is supported by the browser
		if (navigator.geolocation) {
			// Get the user's current position
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// Extract latitude and longitude from the position object
					const { latitude, longitude } = position.coords;
					setLatitude(latitude);
					setLongitude(longitude);

					const queryUrl = qs.stringifyUrl(
						{
							url: window.location.pathname,
							query: {
								category: category || "atm",
								radius,
								lat: latitude,
								lng: longitude,
							},
						},
						{ skipNull: true }
					);
					push(queryUrl, { scroll: false });
				},
				(error) => {
					// Handle any errors that occur during geolocation retrieval
					console.error("Error getting geolocation:", error.message);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}, []); // Empty dependency array ensures this effect runs only once

	return (
		<div className="w-screen h-screen">
			<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}>
				<GoogleMap mapContainerStyle={mapStyle} center={center} zoom={15}>
					<MarkerF position={center} />
					{data.map((item) => (
						<MarkerBusiness
							key={item.place_id}
							location={item.geometry.location}
							name={item.name}
						/>
					))}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default GoogleMapVIew;
