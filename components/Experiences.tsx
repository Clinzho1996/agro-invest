"use client";

const SHOWCASE_ITEMS = [
	{
		zone: "Zone B",
		title: "Luxury Glamping Village",
		theme: "dark",
		bg: "bg-stone-900 border-stone-800 text-stone-100",
		desc: "Premium canvas field shelters engineered with canvas frames on raised platform decks, avoiding direct soil damage.",
		data: "18 Configured Lodges",
	},
	{
		zone: "Zone D",
		title: "Naija Wellness Center",
		theme: "light",
		bg: "bg-stone-100 border-stone-200 text-stone-900",
		desc: "Rammed earth monolithic treatment architecture utilizing natural stone paths and high-performance thatch wraps.",
		data: "30 Simultaneously",
	},
	{
		zone: "Zone F",
		title: "Farm Market & Academy",
		theme: "light",
		bg: "bg-stone-50 border-stone-200 text-stone-900",
		desc: "A structural horseshoe vendor layout designed with modular retail counters and central tasting spaces.",
		data: "32 Active Stalls",
	},
	{
		zone: "Zone E",
		title: "The Grand Events Barn",
		theme: "dark",
		bg: "bg-stone-950 border-stone-900 text-stone-100",
		desc: "A 1,200 sqm clear-span structural reclaimed timber-and-glass framework built to host large-scale corporate conferences.",
		data: "1,200 SQM Clear Span",
	},
];

export default function Experiences() {
	return (
		<section className="py-32 bg-stone-900/10 w-full px-6">
			<div className="max-w-7xl mx-auto">
				<div className="mb-20">
					<span className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-400 block mb-2">
						Architectural Material Matrix
					</span>
					<h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-200">
						Experiential Architecture
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{SHOWCASE_ITEMS.map((item, idx) => (
						<div
							key={idx}
							className={`p-10 border rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-xl ${item.bg}`}>
							<div>
								<div className="flex justify-between items-center mb-10">
									<span
										className={`font-mono text-xs px-3 py-1 rounded-full border ${item.theme === "light" ? "bg-stone-200/50 border-stone-300 text-stone-700" : "bg-stone-900 border-stone-800 text-emerald-400"}`}>
										{item.zone}
									</span>
									<span
										className={`font-mono text-[10px] tracking-widest uppercase ${item.theme === "light" ? "text-stone-400" : "text-stone-600"}`}>
										{item.data}
									</span>
								</div>

								<h3 className="text-3xl font-light tracking-tight mb-4 leading-none">
									{item.title}
								</h3>
							</div>

							<div>
								<p
									className={`text-sm font-light tracking-wide leading-relaxed max-w-sm ${item.theme === "light" ? "text-stone-600" : "text-stone-400"}`}>
									{item.desc}
								</p>
								<div
									className={`w-full h-[1px] mt-8 ${item.theme === "light" ? "bg-stone-200" : "bg-stone-800/60"}`}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
