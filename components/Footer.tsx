export default function Footer() {
	return (
		<footer className="bg-stone-950 text-stone-500 font-light border-t border-stone-900 py-16 px-6 text-xs w-full">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
				{/* Core Branding Panel */}
				<div className="flex flex-col gap-4">
					<div className="text-stone-200 font-mono tracking-widest uppercase text-sm font-medium">
						A G R O <span className="text-emerald-400">X</span>
					</div>
					<p className="max-w-xs leading-relaxed font-light tracking-wide text-stone-600">
						Next-generation regenerative ecosystems, architectural luxury
						interfaces, and biophilic system designs.
					</p>
				</div>

				{/* Modular Navigation Grid Links */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-mono tracking-wider uppercase text-[10px]">
					<div className="flex flex-col gap-3">
						<span className="text-stone-400 font-medium tracking-widest mb-1">
							Architecture
						</span>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Eco-Grid
						</a>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Habitations
						</a>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Sovereignty
						</a>
					</div>
					<div className="flex flex-col gap-3">
						<span className="text-stone-400 font-medium tracking-widest mb-1">
							Company
						</span>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Philosophy
						</a>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Telemetry
						</a>
						<a
							href="#"
							className="hover:text-emerald-400 transition-colors duration-300">
							Press Kit
						</a>
					</div>
					<div className="flex flex-col gap-3 col-span-2 md:col-span-1">
						<span className="text-stone-400 font-medium tracking-widest mb-1">
							System Node
						</span>
						<span className="text-stone-600 lowercase tracking-normal">
							systems@agrox-estate.earth
						</span>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-stone-700 uppercase">
				<div>© 2026 AgroX Operations Ltd. All infrastructure reserved.</div>
				<div>Design Inspired by Nature. Built for Future Living.</div>
			</div>
		</footer>
	);
}
