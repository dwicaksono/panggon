"use server";

export async function fetchMaps(
	category: string | null,
	radius: string | null,
	lat?: string | null,
	lng?: string | null
) {
	// const { category, radius, lat, lng } = params;
	const BASE_URL = "https://maps.googleapis.com/maps/api/place";
	const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!;
	const urlMaps = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}&location=${lat},${lng}&radius=${radius}&key=${GOOGLE_API_KEY}`;
	const res = await fetch(urlMaps);
	const { results } = await res.json();
	return results;
}
