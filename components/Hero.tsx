"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

function AdvancedInteractiveGrid() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;
		let particles: Array<{
			x: number;
			y: number;
			baseX: number;
			baseY: number;
			speed: number;
			angle: number;
		}> = [];

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			init();
		};

		const init = () => {
			particles = [];
			const density = window.innerWidth < 768 ? 40 : 90;
			for (let i = 0; i < density; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					baseX: Math.random() * canvas.width,
					baseY: Math.random() * canvas.height,
					speed: Math.random() * 0.4 + 0.2,
					angle: Math.random() * Math.PI * 2,
				});
			}
		};

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Interpolate cursor coords for luxury damping smoothness
			mouseRef.current.x +=
				(mouseRef.current.targetX - mouseRef.current.x) * 0.08;
			mouseRef.current.y +=
				(mouseRef.current.targetY - mouseRef.current.y) * 0.08;

			// Draw structural architectural node grid matrix
			ctx.strokeStyle = "rgba(41, 37, 36, 0.25)";
			ctx.lineWidth = 1;
			const step = 80;
			for (let x = 0; x < canvas.width; x += step) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}
			for (let y = 0; y < canvas.height; y += step) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}

			// Draw dynamic bio-luminescent particles
			particles.forEach((p, idx) => {
				p.angle += 0.005;
				p.x = p.baseX + Math.cos(p.angle) * 40;
				p.y = p.baseY + Math.sin(p.angle) * 40;

				// Interactive mouse gravity deflection mechanics
				const dx = mouseRef.current.x - p.x;
				const dy = mouseRef.current.y - p.y;
				const dist = Math.hypot(dx, dy);
				if (dist < 220) {
					const force = (220 - dist) / 220;
					p.x -= (dx / dist) * force * 35;
					p.y -= (dy / dist) * force * 35;

					// Render elegant micro-links to mouse context
					ctx.strokeStyle = `rgba(16, 185, 129, ${force * 0.12})`;
					ctx.beginPath();
					ctx.moveTo(p.x, p.y);
					ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
					ctx.stroke();
				}

				ctx.fillStyle = "rgba(16, 185, 129, 0.45)";
				ctx.beginPath();
				ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
				ctx.fill();
			});

			// Render a premium digital ambient soft scan line glow overlay
			const gradient = ctx.createRadialGradient(
				mouseRef.current.x,
				mouseRef.current.y,
				10,
				mouseRef.current.x,
				mouseRef.current.y,
				400,
			);
			gradient.addColorStop(0, "rgba(16, 185, 129, 0.04)");
			gradient.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			animationId = requestAnimationFrame(draw);
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current.targetX = e.clientX;
			mouseRef.current.targetY = e.clientY;
		};

		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", handleMouseMove);
		resize();
		draw();

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
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
	const containerRef = useRef(null);
	const { scrollY } = useScroll();

	const textY = useTransform(scrollY, [0, 800], [0, 180]);
	const opacityY = useTransform(scrollY, [0, 500], [1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6 md:px-12 select-none">
			{/* High-End Immersive Interactive Grid Background */}
			<AdvancedInteractiveGrid />

			{/* Cybernetic Contrast Radial Masking */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950 z-10 pointer-events-none" />

			<motion.div
				style={{ y: textY, opacity: opacityY }}
				className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center mt-12">
				{/* Futuristic Dynamic Tag Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className="mb-8 flex items-center gap-2.5 px-4 py-2 rounded-full border border-stone-800 bg-stone-900/30 backdrop-blur-md shadow-2xl">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
					<span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400">
						Genesis Release v2.026
					</span>
				</motion.div>

				{/* Large Editorial Typography Layout */}
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-stone-100 balance leading-[0.95] mb-10">
					Where Agriculture <br />
					<span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-300 to-stone-100">
						Meets Experience
					</span>
				</motion.h1>

				{/* Ultra-Clean Content Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
					className="text-stone-400 text-sm sm:text-base md:text-lg font-light max-w-2xl mb-14 tracking-wide leading-relaxed">
					A premium digital matrix engineered at the convergence of
					self-sustaining architecture, predictive ecosystem automation, and
					world-class hospitality.
				</motion.p>

				{/* Apple/Tesla Inspired CTA Clusters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
					<button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-semibold uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-emerald-500/10 flex items-center justify-center gap-3 hover:scale-[1.02]">
						Explore Estate
						<ArrowRight
							size={14}
							className="group-hover:translate-x-1 transition-transform duration-300"
						/>
					</button>

					<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900/40 backdrop-blur-xl border border-stone-800 text-stone-300 text-xs font-medium uppercase tracking-widest hover:border-stone-600 hover:text-white transition-all duration-500 hover:scale-[1.02]">
						Book Residency
					</button>
				</motion.div>
			</motion.div>

			{/* Vertical Geometric Anchor Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3">
				<span className="text-[9px] font-mono uppercase tracking-[0.4em] text-stone-600">
					Initialize
				</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
					className="text-stone-500">
					<ChevronDown size={14} strokeWidth={1.5} />
				</motion.div>
			</div>
		</section>
	);
}
