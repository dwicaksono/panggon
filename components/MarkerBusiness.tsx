import { MarkerF, OverlayView } from "@react-google-maps/api";
import React, { FC } from "react";

const MarkerBusiness: FC<any> = ({ location, name }) => {
	const customSize = {
		width: 40,
		height: 40,
		equals: function (other: google.maps.Size) {
			return this.width === other.width && this.height === other.height;
		},
	};
	return (
		<MarkerF
			position={location}
			icon={{
				url: "/assets/pyramid.png",
				scaledSize: customSize,
			}}>
			<OverlayView
				position={location}
				mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
				<div className="ml-[-90px] mt-[-230px]">
					<p className="text-slate-700">{name}</p>
				</div>
			</OverlayView>
			:
		</MarkerF>
	);
};

export default MarkerBusiness;
