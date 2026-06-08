"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STORIES = [
	{
		title: "Live the Farm",
		text: "Awaken to silent operations inside high-yield growing grids where luxury merges completely with architectural automation.",
	},
	{
		title: "Sustainability at the Core",
		text: "Zero-loss water cycles and closed-loop solar collection guarantees zero carbon drag across your temporary structural home footprint.",
	},
	{
		title: "Built with Nature",
		text: "Organic, structural elements locally excavated and cross-engineered alongside carbon-negative composite elements.",
	},
];

const STATS = [
	{ label: "Solar Sourced Power", value: 100, suffix: "%" },
	{ label: "Rainwater Filtration Recovery", value: 85, suffix: "k Liters" },
	{ label: "Bio-Composite Structure Use", value: 94, suffix: "%" },
];

function CountingMetric({
	value,
	label,
	suffix,
}: {
	value: number;
	label: string;
	suffix: string;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (isInView) {
			let start = 0;
			const end = value;
			const duration = 2000;
			const startTime = performance.now();

			const animate = (now: number) => {
				const progress = Math.min((now - startTime) / duration, 1);
				// Clean easeOutQuad math translation
				const easeProgress = progress * (2 - progress);
				setCount(Math.floor(easeProgress * (end - start) + start));

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};
			requestAnimationFrame(animate);
		}
	}, [isInView, value]);

	return (
		<div
			ref={ref}
			className="p-6 bg-stone-900/30 border border-stone-900/50 rounded-2xl flex flex-col justify-between h-36">
			<span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">
				{label}
			</span>
			<div className="text-4xl font-light text-stone-100 tracking-tight font-serif">
				{count}
				{suffix}
			</div>
		</div>
	);
}

export default function ImmersiveStory() {
	return (
		<section className="py-32 bg-stone-950 w-full px-6 relative">
			<div className="max-w-5xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
					{/* Left Column Structural Narrative */}
					<div className="md:col-span-7 flex flex-col gap-20">
						{STORIES.map((story, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-120px" }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
								className="max-w-md">
								<h3 className="text-2xl font-bold tracking-tight text-stone-200 mb-4">
									{story.title}
								</h3>
								<p className="text-stone-400 text-sm font-light leading-relaxed tracking-wide">
									{story.text}
								</p>
							</motion.div>
						))}
					</div>

					{/* Right Column Grid Stats Sticky Frame */}
					<div className="md:col-span-5 md:sticky md:top-32 w-full grid grid-cols-1 gap-4">
						<div className="mb-4">
							<span className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-2 block font-medium">
								Real-time Impact Metrics
							</span>
							<h4 className="text-lg font-bold text-stone-300 tracking-tight">
								Environmental Accountability
							</h4>
						</div>
						{STATS.map((stat, idx) => (
							<CountingMetric
								key={idx}
								value={stat.value}
								label={stat.label}
								suffix={stat.suffix}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
