"use client";
import { motion } from "framer-motion";
import { Bed, Calendar, Compass, ShoppingBag } from "lucide-react";

const NAV_ITEMS = [
	{ title: "Explore Zones", icon: Compass, count: "04 Pods" },
	{ title: "Book Stay", icon: Bed, count: "Availability" },
	{ title: "Events", icon: Calendar, count: "Seasonal" },
	{ title: "Farm Shop", icon: ShoppingBag, count: "Provisions" },
];

export default function NavigationStrip() {
	return (
		<section className="py-12 bg-stone-950 border-y border-stone-900 w-full overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
					{NAV_ITEMS.map((item, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -4, scale: 1.01 }}
							className="group relative cursor-pointer p-6 rounded-2xl bg-stone-900/40 border border-stone-900/80 hover:border-stone-800/80 transition-all duration-300 overflow-hidden">
							{/* Internal Radiant Hover Glow Effect */}
							<div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-emerald-500/5 to-transparent transition-transform duration-500 ease-out pointer-events-none" />

							<div className="flex justify-between items-start mb-6">
								<div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
									<item.icon size={18} strokeWidth={1.5} />
								</div>
								<span className="text-[10px] font-mono tracking-wider text-stone-600 group-hover:text-emerald-500/50 transition-colors duration-300 uppercase">
									{item.count}
								</span>
							</div>
							<h4 className="text-sm font-medium tracking-wide text-stone-300 group-hover:text-stone-100 transition-colors duration-300">
								{item.title}
							</h4>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
