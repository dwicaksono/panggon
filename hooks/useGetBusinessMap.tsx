import { fetchMaps } from "@/actions/map.actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useGetBusinessMap = () => {
	const searchParams = useSearchParams();
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const category = searchParams.get("category");
		const radius = searchParams.get("radius");
		const lat = searchParams.get("lat");
		const lng = searchParams.get("lng");
		fetchMaps(category, radius, lat, lng).then((res) => {
			setData(res);
		});
	}, [searchParams]);
	return { data };
};
