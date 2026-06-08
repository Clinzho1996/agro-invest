"use client";
import { motion, Variants } from "framer-motion";

const EXPERIENCES = [
	{
		title: "Autonomous Glamping",
		tag: "Living",
		price: "$450 / night",
		desc: "Sustainably engineered structural glass modules overlooking bio-intensive farming operations.",
		img: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800",
	},
	{
		title: "Deep-Tech Agricultural Tours",
		tag: "Learning",
		price: "$120 / person",
		desc: "Engage with automated harvesting vectors, drone sensory layers, and aeroponic matrices.",
		img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800",
	},
	{
		title: "Circadian Wellness Retreat",
		tag: "Restoration",
		price: "$850 / weekend",
		desc: "Synchronize biology via sensory soundscapes, bio-thermal bathing spaces, and unadulterated organic nutrition.",
		img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
	},
	{
		title: "Micro-Seasonal Banquets",
		tag: "Gastronomy",
		price: "$180 / guest",
		desc: "A 12-course culinary immersion completely sourced within a 500-meter radius of your table.",
		img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

export default function Experiences() {
	return (
		<section className="py-32 bg-stone-950 w-full px-6">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
					<div>
						<span className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3 block font-medium">
							Curated Living
						</span>
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-100">
							Immersive Curations
						</h2>
					</div>
					<p className="text-stone-400 text-sm max-w-md font-light tracking-wide leading-relaxed">
						Every experience is engineered as a highly restorative cross-over
						ecosystem between natural rhythms and luxury comforts.
					</p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{EXPERIENCES.map((exp, idx) => (
						<motion.div
							key={idx}
							variants={cardVariants}
							whileHover={{ y: -8 }}
							className="group cursor-pointer bg-stone-900/20 border border-stone-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-950/10 hover:border-stone-800 transition-all duration-500">
							<div className="h-[320px] w-full overflow-hidden relative bg-stone-950">
								<img
									src={exp.img}
									alt={exp.title}
									className="w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
									loading="lazy"
								/>
								<div className="absolute top-6 left-6 px-3 py-1 bg-stone-950/80 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-widest text-emerald-400 border border-stone-800">
									{exp.tag}
								</div>
							</div>

							<div className="p-8">
								<div className="flex justify-between items-baseline mb-3 gap-4">
									<h3 className="text-xl font-light text-stone-200 group-hover:text-white transition-colors duration-300 tracking-tight">
										{exp.title}
									</h3>
									<span className="text-xs font-mono text-emerald-400/80 tracking-wide shrink-0">
										{exp.price}
									</span>
								</div>
								<p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed tracking-wide">
									{exp.desc}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
