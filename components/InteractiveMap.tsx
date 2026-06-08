"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";

// --- SILENCE UPSTREAM CORE DEPRECATION WARNING FLOOD ---
if (typeof window !== "undefined") {
	const originalWarn = console.warn;
	console.warn = (...args) => {
		if (
			args[0] &&
			typeof args[0] === "string" &&
			args[0].includes("THREE.Clock: This module has been deprecated")
		) {
			return; // Intercept and terminate the console spam cleanly
		}
		originalWarn(...args);
	};
}

const ZONES = [
	{
		id: "cultivation",
		name: "Autonomous Hydro-Domes",
		pos: [-2.5, 0.4, -1],
		color: "#059669",
		desc: "AI-monitored microclimates optimized for vertical biological yields.",
		size: [1.8, 0.8, 1.8],
	},
	{
		id: "glamping",
		name: "Biophilic Habitations",
		pos: [2.2, 0.5, 1.5],
		color: "#10b981",
		desc: "Luxury mirror-glass architectural pods off the grid.",
		size: [1.2, 1.0, 1.2],
	},
	{
		id: "energy",
		name: "Kinetic Solar Grid",
		pos: [-1, 0.3, 2.5],
		color: "#34d399",
		desc: "Sustaining infrastructure converting ambient solar radiation.",
		size: [1.4, 0.6, 1.4],
	},
	{
		id: "wellness",
		name: "The Monolithic Sanctuary",
		pos: [1.8, 0.6, -2],
		color: "#047857",
		desc: "Subterranean hot springs and sound therapy architectural complexes.",
		size: [1.6, 1.2, 1.6],
	},
];

function ZoneBlock({ data, activeZone, setActiveZone, setModalData }: any) {
	const meshRef = useRef<THREE.Mesh>(null);
	const isHovered = activeZone === data.id;

	useFrame((state) => {
		if (meshRef.current) {
			// Dynamic elastic float interpolation
			const targetY = isHovered ? 0.6 : 0.2;
			meshRef.current.position.y = THREE.MathUtils.lerp(
				meshRef.current.position.y,
				targetY,
				0.15,
			);

			// Gentle operational rotative baseline
			meshRef.current.rotation.y += 0.003;
		}
	});

	return (
		<mesh
			ref={meshRef}
			position={[data.pos[0], 0.2, data.pos[2]]}
			onPointerOver={(e) => {
				e.stopPropagation();
				setActiveZone(data.id);
			}}
			onPointerOut={() => setActiveZone(null)}
			onClick={(e) => {
				e.stopPropagation();
				setModalData(data);
			}}>
			<boxGeometry args={[data.size[0], data.size[1], data.size[2]]} />
			<meshStandardMaterial
				color={data.color}
				roughness={0.2}
				metalness={0.8}
				emissive={data.color}
				emissiveIntensity={isHovered ? 0.6 : 0.15}
			/>
		</mesh>
	);
}

function GroundLandscape() {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
			<planeGeometry args={[12, 12]} />
			<meshStandardMaterial color="#1c1917" roughness={0.9} metalness={0.1} />
		</mesh>
	);
}

export default function InteractiveMap() {
	const [activeZone, setActiveZone] = useState<string | null>(null);
	const [modalData, setModalData] = useState<any | null>(null);

	return (
		<section className="relative h-[90vh] w-full bg-stone-950 flex flex-col items-center justify-center px-6">
			<div className="absolute top-12 text-center z-20 pointer-events-none">
				<h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-2 font-medium">
					Digital Twin Architecture
				</h2>
				<p className="text-3xl font-light text-stone-200 tracking-tight">
					Interactive Estate Grid
				</p>
			</div>

			{/* Primary Canvas Integration Layer */}
			<div className="w-full h-full max-w-7xl relative z-10 cursor-grab active:cursor-grabbing">
				<Canvas>
					<PerspectiveCamera makeDefault position={[0, 7, 9]} fov={45} />
					<ambientLight intensity={0.4} />
					<directionalLight
						position={[10, 15, 10]}
						intensity={1.5}
						castShadow
					/>
					<pointLight
						position={[-10, 5, -10]}
						intensity={0.5}
						color="#059669"
					/>

					{ZONES.map((zone) => (
						<ZoneBlock
							key={zone.id}
							data={zone}
							activeZone={activeZone}
							setActiveZone={setActiveZone}
							setModalData={setModalData}
						/>
					))}

					<GroundLandscape />
					<OrbitControls
						enableZoom={false}
						maxPolarAngle={Math.PI / 2.3}
						minPolarAngle={Math.PI / 4}
						autoRotate
						autoRotateSpeed={0.3}
					/>
				</Canvas>
			</div>

			{/* Floating HUD Tooltip Overlays */}
			<div className="absolute bottom-12 z-20 max-w-md w-full px-4 pointer-events-none">
				<div className="h-16 flex items-center justify-center">
					{activeZone && !modalData && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="bg-stone-900/90 border border-stone-800 backdrop-blur-md px-6 py-3 rounded-full text-stone-300 text-xs tracking-wider uppercase font-mono shadow-xl flex items-center gap-3">
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
							Focus: {ZONES.find((z) => z.id === activeZone)?.name}
						</motion.div>
					)}
				</div>
			</div>

			{/* Modal Deep-Dive Window */}
			<AnimatePresence>
				{modalData && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-stone-950/80 backdrop-blur-md z-40 flex items-center justify-center p-6"
						onClick={() => setModalData(null)}>
						<motion.div
							initial={{ scale: 0.95, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.95, y: 20 }}
							transition={{ type: "spring", duration: 0.5 }}
							className="bg-stone-900 border border-stone-800 max-w-lg w-full rounded-3xl p-8 relative overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}>
							<div
								className="absolute top-0 left-0 w-full h-[3px]"
								style={{ backgroundColor: modalData.color }}
							/>
							<h3 className="text-2xl font-light text-stone-100 tracking-tight mb-3">
								{modalData.name}
							</h3>
							<p className="text-stone-400 text-sm leading-relaxed mb-8 tracking-wide font-light">
								{modalData.desc}
							</p>

							<div className="flex justify-between items-center">
								<button className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs tracking-wider uppercase font-medium transition-colors duration-300">
									Explore Infrastructure
								</button>
								<button
									onClick={() => setModalData(null)}
									className="text-stone-500 hover:text-stone-300 text-xs uppercase tracking-widest font-mono transition-colors duration-300">
									Close
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
