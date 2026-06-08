"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
			className="fixed top-0 left-0 w-full z-50 px-6 py-4 border-b border-stone-900/40 bg-stone-950/20 backdrop-blur-xl flex items-center justify-between">
			{/* JV Corporate Identity */}
			<div className="flex items-center gap-3 cursor-pointer group">
				<div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-500">
					<Shield
						size={14}
						className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-stone-100 font-mono text-xs tracking-[0.25em] font-bold leading-none uppercase">
						NAFF–HAM <span className="text-emerald-400">AGRO</span>
					</span>
					<span className="text-[8px] font-mono tracking-widest text-stone-500 uppercase mt-0.5">
						Apo Saraji HQ • Abuja
					</span>
				</div>
			</div>

			{/* Tender Class Nav Array */}
			<nav className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-widest text-stone-400 uppercase">
				<a
					href="#masterplan"
					className="hover:text-stone-100 transition-colors duration-300">
					01 / Master Grid
				</a>
				<a
					href="#zones"
					className="hover:text-stone-100 transition-colors duration-300">
					02 / Revenue Zones
				</a>
				<a
					href="#principles"
					className="hover:text-stone-100 transition-colors duration-300">
					03 / Procurement Mandate
				</a>
				<a
					href="#telemetry"
					className="hover:text-stone-100 transition-colors duration-300">
					04 / Operational IoT
				</a>
			</nav>

			{/* Strategic Integration Callout */}
			<div className="flex items-center gap-4">
				<div className="hidden sm:flex items-center gap-2 text-[9px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/40 px-3 py-1.5 rounded-full">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
					ERP NODE: ACTIVE
				</div>
				<a
					href="#rfp"
					className="px-4 py-2 border border-stone-800 rounded-full text-[10px] font-mono tracking-widest text-stone-300 hover:border-emerald-500 hover:text-white transition-all duration-300">
					ATC RFP-2026-01
				</a>
			</div>
		</motion.header>
	);
}
