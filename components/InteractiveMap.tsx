"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ZONE_DATA = [
	{
		id: "A",
		name: "The Harvest Table",
		type: "Farm-to-Table Restaurant & Bar",
		area: "0.40 ha",
		cap: "120 covers + 40 terrace",
		desc: "Raised timber platform constructed over active horticultural growing rows. Features an integrated live-fire hearth and embedded vertical culinary herb configurations.",
		pos: [-2, 0.3, -2],
		color: "#047857",
	},
	{
		id: "B",
		name: "Agro Glamping Village",
		type: "Luxury Farm Stays & Safari Lodges",
		area: "1.50 ha",
		cap: "18 Units (36-54 guests)",
		desc: "12 luxury safari canvas structures, 4 timber family eco-cabins, and 1 architectural signature Treehouse Suite. Shielded via dense structural Moringa hedge screens.",
		pos: [2, 0.5, 2],
		color: "#10b981",
	},
	{
		id: "C",
		name: "The Field Experience Programme",
		type: "Agro-Tourism Trails & Activities",
		area: "0.50 ha",
		cap: "200 visitors / day",
		desc: "A 1.2km circular compacted laterite pathway tracing palm rows, livestock compounds, and dedicated guest-driven harvest fields.",
		pos: [-3, 0.1, 1],
		color: "#059669",
	},
	{
		id: "D",
		name: "Naija Wellness Retreat",
		type: "Farm Spa, Yoga & Wellness Centre",
		area: "0.40 ha",
		cap: "30 guests simultaneously",
		desc: "Rammed earth spa chambers, natural stone flooring structures, and an elevated bamboo yoga deck nestled within a 0.15ha indigenous botanical garden.",
		pos: [3, 0.4, -2],
		color: "#34d399",
	},
	{
		id: "E",
		name: "The Barn Events Venue",
		type: "Weddings, Conferences & Galas",
		area: "0.60 ha",
		cap: "300 banquet / 450 theatre",
		desc: "A 1,200 sqm clear-span structural reclaimed timber-and-glass structural framing configuration alongside an 800 sqm outdoor ceremonial lawn framework.",
		pos: [0, 0.6, -3],
		color: "#065f46",
	},
	{
		id: "F",
		name: "Farm Market & Cooking Academy",
		type: "Produce Market & Culinary School",
		area: "0.35 ha",
		cap: "12-station worktops",
		desc: "600 sqm open-air market shell containing 32 horseshoe vendor bays, directly alongside a professional multi-station induction culinary learning lab.",
		pos: [1, 0.3, 3],
		color: "#10b981",
	},
	{
		id: "G",
		name: "Little Farmers Academy",
		type: "Children’s Educational Farm Experience",
		area: "0.30 ha",
		cap: "80 children / session",
		desc: "Biophilic climbing logs, STEM agricultural learning benches, child-height crop beds, and dedicated low-barrier livestock interaction setups.",
		pos: [-2, 0.2, 3],
		color: "#a7f3d0",
	},
	{
		id: "H",
		name: "Landscape, Paths & Water Features",
		type: "Site Connectivity Infrastructure",
		area: "0.45 ha",
		cap: "Shared Infrastructure",
		desc: "0.12ha central water hyacinth anchoring pond system linked to 900m of primary pedestrian late-surface walkways.",
		pos: [0, 0.1, 0],
		color: "#022c22",
	},
	{
		id: "I",
		name: "NAFF–HAM Merchandising & Souvenirs",
		type: "Branded Retail Points",
		area: "Integrated",
		cap: "4 Distribution Nodes",
		desc: "A 40 sqm main terminal hub at the Zone F marketplace terminus, supported by architectural satellite point-of-sale layout kiosks across the site footprint.",
		pos: [2, 0.2, 0],
		color: "#6ee7b7",
	},
];

function ModelZoneBlocks({ selectedId, setSelectedId }: any) {
	return (
		<group>
			{ZONE_DATA.map((z) => {
				const isSelected = selectedId === z.id;
				return (
					<mesh
						key={z.id}
						position={[z.pos[0], isSelected ? 0.8 : 0.2, z.pos[2]]}
						onClick={(e) => {
							e.stopPropagation();
							setSelectedId(z.id);
						}}>
						<boxGeometry args={[1.2, isSelected ? 1.2 : 0.4, 1.2]} />
						<meshStandardMaterial
							color={z.color}
							emissive={z.color}
							emissiveIntensity={isSelected ? 0.8 : 0.2}
							metalness={0.6}
							roughness={0.2}
						/>
					</mesh>
				);
			})}
			{/* Base Plane Site Model */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="#141210" roughness={0.9} />
			</mesh>
		</group>
	);
}

export default function InteractiveMap() {
	const [selectedId, setSelectedId] = useState<string>("A");
	const currentZone = ZONE_DATA.find((z) => z.id === selectedId)!;

	return (
		<section id="zones" className="py-24 bg-stone-950 w-full px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				{/* Left Interactive 3D Model Twin Viewport */}
				<div className="lg:col-span-7 h-[500px] bg-stone-900/20 border border-stone-900 rounded-3xl relative overflow-hidden cursor-grab active:cursor-grabbing">
					<div className="absolute top-6 left-6 z-20 bg-stone-950/80 border border-stone-800 px-4 py-2 rounded-xl font-mono text-[10px] tracking-widest uppercase text-stone-400">
						Click blocks to inspect 4.5 Ha layout twin
					</div>
					<Canvas>
						<PerspectiveCamera makeDefault position={[0, 6, 8]} fov={45} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[5, 10, 5]} intensity={1.5} />
						<ModelZoneBlocks
							selectedId={selectedId}
							setSelectedId={setSelectedId}
						/>
						<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
					</Canvas>
				</div>

				{/* Right Tabular Spec Information Card */}
				<div className="lg:col-span-5 flex flex-col justify-center">
					<div className="flex gap-2 mb-4">
						{["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((tab) => (
							<button
								key={tab}
								onClick={() => setSelectedId(tab)}
								className={`w-8 h-8 rounded-lg font-mono text-xs font-bold border transition-all ${selectedId === tab ? "bg-emerald-500 text-stone-950 border-emerald-400" : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700"}`}>
								{tab}
							</button>
						))}
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={currentZone.id}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
							className="bg-stone-900/40 border border-stone-900 p-8 rounded-3xl relative">
							<div className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 mb-2">
								Zone {currentZone.id} // Operational Profile
							</div>
							<h3 className="text-3xl font-light text-stone-100 tracking-tight mb-1">
								{currentZone.name}
							</h3>
							<p className="text-stone-400 text-xs font-mono mb-6">
								{currentZone.type}
							</p>

							<p className="text-stone-300 text-sm font-light leading-relaxed tracking-wide mb-8">
								{currentZone.desc}
							</p>

							<div className="grid grid-cols-2 gap-4 border-t border-stone-800/80 pt-6 font-mono text-[11px]">
								<div>
									<span className="text-stone-500 block uppercase tracking-wider mb-0.5">
										Target Footprint
									</span>
									<span className="text-stone-200 font-medium">
										{currentZone.area}
									</span>
								</div>
								<div>
									<span className="text-stone-500 block uppercase tracking-wider mb-0.5">
										Throughput Capacity
									</span>
									<span className="text-stone-200 font-medium">
										{currentZone.cap}
									</span>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
