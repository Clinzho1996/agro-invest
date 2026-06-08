"use client";
import { motion } from "framer-motion";
import { Cpu, Menu } from "lucide-react";

export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
			className="fixed top-0 left-0 w-full z-50 px-6 py-4 border-b border-stone-900/40 bg-stone-950/20 backdrop-blur-xl flex items-center justify-between">
			{/* Branding Interface */}
			<div className="flex items-center gap-3 cursor-pointer group">
				<div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-500">
					<Cpu
						size={14}
						className="text-emerald-400 group-hover:rotate-90 transition-transform duration-700 ease-out"
					/>
				</div>
				<span className="text-stone-100 font-mono text-xs tracking-[0.3em] font-medium uppercase">
					NAFF–HAM <span className="text-emerald-400">AGRO</span>
				</span>
			</div>

			{/* Center Navigation Array */}
			<nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-stone-400 uppercase">
				<a
					href="#"
					className="hover:text-stone-100 transition-colors duration-300 relative group py-1">
					Ecosystem
					<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
				</a>
				<a
					href="#"
					className="hover:text-stone-100 transition-colors duration-300 relative group py-1">
					Habitations
					<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
				</a>
				<a
					href="#"
					className="hover:text-stone-100 transition-colors duration-300 relative group py-1">
					Telemetry
					<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
				</a>
			</nav>

			{/* Right Core Actions Panel */}
			<div className="flex items-center gap-6">
				<div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1.5 rounded-full shadow-inner shadow-emerald-500/5">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
					SYSTEMS ONLINE
				</div>

				<button className="p-2 text-stone-400 hover:text-stone-100 transition-colors duration-300">
					<Menu size={18} strokeWidth={1.5} />
				</button>
			</div>
		</motion.header>
	);
}
