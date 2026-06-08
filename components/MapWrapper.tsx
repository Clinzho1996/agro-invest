"use client";

import dynamic from "next/dynamic";

// Safely lazy-load the WebGL context entirely on the client side
const InteractiveMapCanvas = dynamic(
	() => import("@/components/InteractiveMap"),
	{
		ssr: false,
		loading: () => (
			<div className="h-[80vh] w-full flex items-center justify-center bg-stone-950 text-emerald-500/50 font-mono text-xs tracking-widest uppercase animate-pulse">
				Initializing Quantum Terrain Engine...
			</div>
		),
	},
);

export default function MapWrapper() {
	return <InteractiveMapCanvas />;
}
