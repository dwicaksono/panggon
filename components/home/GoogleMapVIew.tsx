"use client";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const mapStyle = {
	width: "100%",
	height: "100%",
};
const GoogleMapVIew = () => {
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);
	const center: any = {
		lat: latitude,
		lng: longitude,
	};

	useEffect(() => {
		// Check if geolocation is supported by the browser
		if (navigator.geolocation) {
			// Get the user's current position
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// Extract latitude and longitude from the position object
					const { latitude, longitude } = position.coords;
					setLatitude(latitude);
					setLongitude(longitude);
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
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default GoogleMapVIew;
