"use client";
import { ShieldCheck, Sun, Waves } from "lucide-react";

export default function TechDashboard() {
	return (
		<section
			id="telemetry"
			className="py-32 bg-stone-950 w-full px-6 border-b border-stone-900">
			<div className="max-w-7xl mx-auto">
				<div className="mb-20 text-center md:text-left">
					<span className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-400 block mb-2">
						IoT Operational Interface
					</span>
					<h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-100">
						Environmental Integration Telemetry
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Solar Array Tracker */}
					<div className="bg-stone-900/10 border border-stone-900 p-8 rounded-2xl relative overflow-hidden">
						<div className="flex justify-between items-start mb-6">
							<div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-amber-500">
								<Sun size={18} strokeWidth={1.5} />
							</div>
							<span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">
								100% Demand Target
							</span>
						</div>
						<p className="text-[10px] font-mono uppercase text-stone-400 mb-1">
							Solar PV Collection Array
						</p>
						<div className="text-4xl font-light text-stone-100 font-serif mb-4">
							0.00
							<span className="text-xs font-mono ml-1 text-emerald-400">
								kw/h peak
							</span>
						</div>
						<p className="text-stone-500 text-xs font-light leading-relaxed">
							System engineered with high-capacity tracking arrays to run zero
							diesel reliance across all wet services.
						</p>
					</div>

					{/* Water Recovery Monitor */}
					<div className="bg-stone-900/10 border border-stone-900 p-8 rounded-2xl relative overflow-hidden">
						<div className="flex justify-between items-start mb-6">
							<div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-blue-400">
								<Waves size={18} strokeWidth={1.5} />
							</div>
							<span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">
								NESREA Compliant
							</span>
						</div>
						<p className="text-[10px] font-mono uppercase text-stone-400 mb-1">
							POME-Free Wastewater Yield
						</p>
						<div className="text-4xl font-light text-stone-100 font-serif mb-4">
							100
							<span className="text-xs font-mono ml-1 text-emerald-400">
								% recycled
							</span>
						</div>
						<p className="text-stone-500 text-xs font-light leading-relaxed">
							Integrated structural greywater circuits filtering directly to
							irrigate secondary agricultural lines.
						</p>
					</div>

					{/* Security Perimeter Node */}
					<div className="bg-stone-900/10 border border-stone-900 p-8 rounded-2xl relative overflow-hidden">
						<div className="flex justify-between items-start mb-6">
							<div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-emerald-400">
								<ShieldCheck size={18} strokeWidth={1.5} />
							</div>
							<span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">
								Separated Perimeters
							</span>
						</div>
						<p className="text-[10px] font-mono uppercase text-stone-400 mb-1">
							Security Matrix Integration
						</p>
						<div className="text-4xl font-light text-stone-100 font-serif mb-4">
							24/7
							<span className="text-xs font-mono ml-1 text-emerald-400">
								cctv node
							</span>
						</div>
						<p className="text-stone-500 text-xs font-light leading-relaxed">
							Dedicated perimeter protections supporting children's zones and
							glamping rings natively.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
