"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers } from "lucide-react";
import { useEffect, useRef } from "react";

function MasterPlanGridBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;
		let time = 0;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			time += 0.002;

			// Draw Topographic Survey Lines Simulation
			ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
			ctx.lineWidth = 1;

			for (let i = 0; i < canvas.height; i += 40) {
				ctx.beginPath();
				for (let x = 0; x < canvas.width; x += 10) {
					const y = i + Math.sin(x * 0.005 + time) * 15;
					if (x === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}

			// Cadastral Property Boundary Overlay (4.5 Ha Plot Marker)
			ctx.strokeStyle = "rgba(68, 64, 60, 0.3)";
			ctx.lineWidth = 1;
			const gridSize = 100;
			for (let x = 0; x < canvas.width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}
			for (let y = 0; y < canvas.height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}

			animationId = requestAnimationFrame(draw);
		};

		window.addEventListener("resize", resize);
		resize();
		draw();

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none z-0"
		/>
	);
}

export default function Hero() {
	const { scrollY } = useScroll();
	const textY = useTransform(scrollY, [0, 600], [0, 150]);
	const opacityY = useTransform(scrollY, [0, 500], [1, 0]);

	return (
		<section
			id="masterplan"
			className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6">
			<MasterPlanGridBackground />
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950 z-10 pointer-events-none" />

			<motion.div
				style={{ y: textY, opacity: opacityY }}
				className="relative z-20 max-w-6xl mx-auto text-center flex flex-col items-center select-none">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					className="mb-6 px-4 py-1.5 rounded-full border border-emerald-900/60 bg-emerald-950/20 text-emerald-400 font-mono text-[10px] tracking-[0.3em] uppercase">
					FCT Abuja Flagship Development
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-stone-100 leading-[1.05] mb-8">
					The Farm Is Not The Backdrop.
					<br />
					<span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-stone-400">
						It Is The Experience.
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					className="text-stone-400 text-sm md:text-base font-light max-w-3xl mb-12 tracking-wide leading-relaxed">
					Introducing the NAFF–HAM Agro-Tourism Centre at Apo Saraji. A
					4.5-hectare mixed-use development transforming advanced agriculture
					into an immersive, high-end guest journey.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-30">
					<a
						href="#zones"
						className="group px-8 py-4 rounded-full bg-stone-100 text-stone-950 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all duration-300">
						Explore 9 Revenue Zones
						<Layers
							size={12}
							className="group-hover:rotate-90 transition-transform duration-300"
						/>
					</a>
					<a
						href="#rfp"
						className="px-8 py-4 rounded-full bg-stone-900/60 backdrop-blur-md border border-stone-800 text-stone-300 text-xs font-mono tracking-widest uppercase hover:border-stone-600 hover:text-white transition-all duration-300 text-center">
						Review RFP Brief
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}
