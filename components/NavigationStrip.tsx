"use client";
import { CalendarRange, Flame, Layers } from "lucide-react";

export default function NavigationStrip() {
	return (
		<section className="py-16 bg-stone-950 border-y border-stone-900 w-full overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
					<div>
						<span className="text-[10px] font-mono tracking-[0.3em] text-emerald-400 uppercase block mb-1">
							Execution Architecture
						</span>
						<h4 className="text-xl font-light text-stone-200 tracking-tight">
							Project Phase Phasing Sequences
						</h4>
					</div>
					<div className="text-stone-500 font-mono text-xs">
						Project Completion Cycle: 12 Months Max
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 rounded-2xl bg-stone-900/30 border border-stone-900 relative overflow-hidden group">
						<div className="flex items-center justify-between mb-4">
							<span className="px-3 py-1 bg-emerald-950/50 border border-emerald-900 text-emerald-400 font-mono text-[9px] uppercase tracking-widest rounded-full">
								Months 1–8
							</span>
							<Flame size={14} className="text-stone-600" />
						</div>
						<h5 className="text-stone-200 text-sm font-medium tracking-wide mb-2">
							Phase 1A // Inaugural Soft Launch
						</h5>
						<p className="text-stone-500 text-xs leading-relaxed font-light">
							Critical activation of Zone A (Restaurant), Zone B (Glamping),
							Zone C (Experiences), Zone E (Events Barn), Zone F (Market), and
							Zone I (Retail).
						</p>
					</div>

					<div className="p-6 rounded-2xl bg-stone-900/30 border border-stone-900 relative overflow-hidden group">
						<div className="flex items-center justify-between mb-4">
							<span className="px-3 py-1 bg-stone-800 border border-stone-700 text-stone-400 font-mono text-[9px] uppercase tracking-widest rounded-full">
								Months 6–12
							</span>
							<CalendarRange size={14} className="text-stone-600" />
						</div>
						<h5 className="text-stone-200 text-sm font-medium tracking-wide mb-2">
							Phase 1B // Secondary Expansion
						</h5>
						<p className="text-stone-500 text-xs leading-relaxed font-light">
							Secondary operational deployment of specialized healthcare layers:
							Zone D (Wellness Retreat) and Zone G (Little Farmers Learning
							Academy).
						</p>
					</div>

					<div className="p-6 rounded-2xl bg-stone-900/30 border border-stone-900 relative overflow-hidden group">
						<div className="flex items-center justify-between mb-4">
							<span className="px-3 py-1 bg-emerald-400 text-stone-950 font-mono text-[9px] uppercase tracking-widest rounded-full font-bold">
								Concurrent
							</span>
							<Layers size={14} className="text-emerald-500" />
						</div>
						<h5 className="text-stone-200 text-sm font-medium tracking-wide mb-2">
							Zone H // Civil Infrastructure
						</h5>
						<p className="text-stone-500 text-xs leading-relaxed font-light">
							Site grading, 900m late-boulevard tracks, perimeter security mesh
							frameworks, and the central 0.12ha stabilizing biological pond
							layout.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
