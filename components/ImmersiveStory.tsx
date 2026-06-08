"use client";
import { motion } from "framer-motion";

const PRINCIPLES = [
	{
		id: "01",
		name: "Farm Authenticity First",
		core: "No resort cloning.",
		desc: "Every facility built across the footprint must be anchored right against active crop rows. Guests cross operational agricultural workflows at all touchpoints.",
	},
	{
		id: "02",
		name: "Zero Concrete on Productive Soil",
		core: "Reversible infrastructure.",
		desc: "No permanent foundation pours are permitted inside the 2.0ha farm tract. Structures must build on adjustable steel points or compacted local laterite piles.",
	},
	{
		id: "03",
		name: "100% Green Energy Architecture",
		core: "Zero diesel usage.",
		desc: "Demands total off-grid reliance via advanced local tracking solar PV collection grids and high-capacity battery inverter backup blocks.",
	},
	{
		id: "04",
		name: "Paperless Design Delivery",
		core: "Pure BIM workflows.",
		desc: "All blueprints, operation manuals, and handover documentation must be processed digitally via the custom integrated NAFF–HAM Enterprise Operations interface.",
	},
	{
		id: "05",
		name: "80% Nigerian Material Sourcing",
		core: "Artisan empowerment.",
		desc: "Mandates strict localization across structural raw assets, furniture designs, wall ceramics, and decor accents directly using regional Nigerian guilds.",
	},
];

export default function ImmersiveStory() {
	return (
		<section
			id="principles"
			className="py-32 bg-stone-950 w-full px-6 border-t border-stone-900/60">
			<div className="max-w-6xl mx-auto">
				<div className="max-w-2xl mb-24">
					<span className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-400 block mb-2">
						ATC RFP-2026-01 Mandates
					</span>
					<h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-100">
						Qualifying Tender Principles
					</h2>
				</div>

				<div className="flex flex-col border-t border-stone-900">
					{PRINCIPLES.map((p, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
							className="grid grid-cols-1 md:grid-cols-12 py-10 border-b border-stone-900 gap-4 items-baseline group hover:bg-stone-900/10 transition-colors duration-300 px-4">
							<div className="md:col-span-1 font-mono text-xs text-stone-600 group-hover:text-emerald-500 transition-colors">
								[{p.id}]
							</div>
							<div className="md:col-span-4">
								<h4 className="text-stone-200 font-medium tracking-wide text-lg">
									{p.name}
								</h4>
								<span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/70">
									{p.core}
								</span>
							</div>
							<div className="md:col-span-7 text-stone-400 font-light text-sm tracking-wide leading-relaxed">
								{p.desc}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
