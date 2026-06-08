"use client";
import { motion } from "framer-motion";
import { Activity, Droplet, Sun } from "lucide-react";

export default function TechDashboard() {
	return (
		<section className="py-32 bg-stone-950 w-full px-6 relative overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="mb-16 text-center md:text-left">
					<span className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3 block font-medium">
						Ecosystem Control Telemetry
					</span>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-100">
						Live Operating System
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
					{/* Card 1: Solar */}
					<div className="bg-stone-900/20 backdrop-blur-md border border-stone-900 p-8 rounded-3xl relative overflow-hidden group">
						<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
						<div className="flex justify-between items-center mb-8">
							<div className="p-3 bg-stone-900 border border-stone-800 text-amber-400 rounded-xl">
								<Sun size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">
								Grid Operational
							</span>
						</div>
						<p className="text-[11px] uppercase tracking-widest text-stone-400 font-mono mb-1">
							Solar Conversion Efficiency
						</p>
						<div className="text-3xl font-light text-stone-100 tracking-tight mb-4">
							98.4
							<span className="text-xs font-mono text-emerald-400 ml-1">
								kw/h
							</span>
						</div>
						<div className="w-full bg-stone-950 h-[3px] rounded-full overflow-hidden">
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: "85%" }}
								transition={{ duration: 1.5, ease: "easeOut" }}
								className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full"
							/>
						</div>
					</div>

					{/* Card 2: Hydro */}
					<div className="bg-stone-900/20 backdrop-blur-md border border-stone-900 p-8 rounded-3xl relative overflow-hidden group">
						<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
						<div className="flex justify-between items-center mb-8">
							<div className="p-3 bg-stone-900 border border-stone-800 text-blue-400 rounded-xl">
								<Droplet size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">
								Closed Loop Active
							</span>
						</div>
						<p className="text-[11px] uppercase tracking-widest text-stone-400 font-mono mb-1">
							Ecosystem Aquaponics Flow
						</p>
						<div className="text-3xl font-light text-stone-100 tracking-tight mb-4">
							12,400
							<span className="text-xs font-mono text-emerald-400 ml-1">
								L/rec
							</span>
						</div>
						<div className="w-full bg-stone-950 h-[3px] rounded-full overflow-hidden">
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: "92%" }}
								transition={{ duration: 1.5, ease: "easeOut" }}
								className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full"
							/>
						</div>
					</div>

					{/* Card 3: Soil/Bio */}
					<div className="bg-stone-900/20 backdrop-blur-md border border-stone-900 p-8 rounded-3xl relative overflow-hidden group">
						<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
						<div className="flex justify-between items-center mb-8">
							<div className="p-3 bg-stone-900 border border-stone-800 text-emerald-400 rounded-xl">
								<Activity size={20} strokeWidth={1.5} />
							</div>
							<span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">
								Nutrient Optimal
							</span>
						</div>
						<p className="text-[11px] uppercase tracking-widest text-stone-400 font-mono mb-1">
							Substrate Microbial Health
						</p>
						<div className="text-3xl font-light text-stone-100 tracking-tight mb-4">
							99.1
							<span className="text-xs font-mono text-emerald-400 ml-1">
								index
							</span>
						</div>
						<div className="w-full bg-stone-950 h-[3px] rounded-full overflow-hidden">
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: "99%" }}
								transition={{ duration: 1.5, ease: "easeOut" }}
								className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-full rounded-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
