"use client";
import { ChevronUp, Landmark, Network, Shield } from "lucide-react";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative bg-stone-950 text-stone-400 border-t border-stone-900 overflow-hidden pt-24 pb-12 px-6 w-full">
			{/* Decorative Cyber-Glow Backdrop */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				{/* TOP PANEL: Institutional JV Grid & Live Cadastral Blueprint */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-stone-900/60">
					{/* Column 1: Brand Authority Block (4 Cols) */}
					<div className="lg:col-span-4 flex flex-col justify-between gap-8">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/10 to-stone-900 border border-emerald-500/20 flex items-center justify-center">
									<Shield size={16} className="text-emerald-400" />
								</div>
								<div>
									<span className="text-stone-100 font-mono text-sm tracking-[0.3em] font-bold uppercase block leading-none">
										NAFF–HAM <span className="text-emerald-400">AGRO</span>
									</span>
									<span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase mt-1 block">
										National Venture Architecture
									</span>
								</div>
							</div>
							<p className="text-stone-400 text-xs font-light leading-relaxed tracking-wide max-w-sm">
								A strategic public-private partnership capitalizing the land
								assets of NAF Farm & Agro Allied Services Ltd (NAF FAASL)
								alongside the clean-energy integration capabilities of Hamilton
								Energy Services Ltd (HESL).
							</p>
						</div>

						{/* Live System Diagnostics Feed */}
						<div className="bg-stone-900/20 border border-stone-900/80 rounded-xl p-4 font-mono text-[10px] space-y-2 max-w-xs backdrop-blur-sm">
							<div className="flex justify-between text-stone-500">
								<span>PROJECT REVISION:</span>
								<span className="text-stone-300">ATC-RFP-2026-01</span>
							</div>
							<div className="flex justify-between text-stone-500">
								<span>PORTFOLIO SCOPE:</span>
								<span className="text-emerald-400">860 HA / 6 SITES</span>
							</div>
							<div className="flex justify-between text-stone-500">
								<span>DIGITAL OPERATION:</span>
								<span className="text-stone-300">PAPERLESS BIM</span>
							</div>
						</div>
					</div>

					{/* Column 2: Interactive SVG Cadastral Wireframe Map (5 Cols) */}
					<div className="lg:col-span-5 h-[200px] lg:h-full min-h-[180px] bg-stone-950 border border-stone-900 rounded-2xl relative overflow-hidden group flex items-center justify-center">
						{/* Blueprint Grid Lines */}
						<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(41,37,36,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(41,37,36,0.15)_1px,transparent_1px)] bg-[size:20px_20px]" />

						{/* Cyber Vector Coordinates */}
						<span className="absolute top-3 left-3 text-[8px] font-mono text-stone-600 tracking-widest">
							PLOT CT-4.5HA // A-I ZONES
						</span>
						<span className="absolute bottom-3 right-3 text-[8px] font-mono text-emerald-500/40 animate-pulse">
							● TELEMETRY LINKED
						</span>

						{/* Abstract Conceptual Layout Wireframe */}
						<svg
							width="80%"
							height="70%"
							viewBox="0 0 400 120"
							className="relative z-10 opacity-40 group-hover:opacity-80 transition-opacity duration-700 ease-out">
							{/* Central stabilizing water reservoir node */}
							<circle
								cx="200"
								cy="60"
								r="25"
								fill="none"
								stroke="#10b981"
								strokeWidth="1"
								strokeDasharray="4 4"
								className="animate-[spin_40s_linear_infinite]"
							/>
							<circle cx="200" cy="60" r="4" fill="#10b981" />

							{/* Radial Structural Hub Links */}
							<line
								x1="200"
								y1="60"
								x2="60"
								y2="20"
								stroke="#292524"
								strokeWidth="1"
							/>
							<line
								x1="200"
								y1="60"
								x2="340"
								y2="30"
								stroke="#292524"
								strokeWidth="1"
							/>
							<line
								x1="200"
								y1="60"
								x2="110"
								y2="100"
								stroke="#292524"
								strokeWidth="1"
							/>
							<line
								x1="200"
								y1="60"
								x2="290"
								y2="95"
								stroke="#292524"
								strokeWidth="1"
							/>

							{/* Zone Data Clusters */}
							<rect
								x="40"
								y="10"
								width="40"
								height="20"
								rx="3"
								fill="none"
								stroke="#44403c"
								strokeWidth="1"
							/>
							<text
								x="60"
								y="23"
								fill="#78716c"
								fontSize="8"
								fontFamily="monospace"
								textAnchor="middle">
								ZON-A
							</text>

							<rect
								x="320"
								y="20"
								width="40"
								height="20"
								rx="3"
								fill="none"
								stroke="#10b981"
								strokeWidth="1"
							/>
							<text
								x="340"
								y="33"
								fill="#10b981"
								fontSize="8"
								fontFamily="monospace"
								textAnchor="middle">
								ZON-B
							</text>

							<rect
								x="90"
								y="90"
								width="40"
								height="20"
								rx="3"
								fill="none"
								stroke="#44403c"
								strokeWidth="1"
							/>
							<text
								x="110"
								y="103"
								fill="#78716c"
								fontSize="8"
								fontFamily="monospace"
								textAnchor="middle">
								ZON-D
							</text>

							<rect
								x="270"
								y="85"
								width="40"
								height="20"
								rx="3"
								fill="none"
								stroke="#44403c"
								strokeWidth="1"
							/>
							<text
								x="290"
								y="98"
								fill="#78716c"
								fontSize="8"
								fontFamily="monospace"
								textAnchor="middle">
								ZON-E
							</text>
						</svg>
					</div>

					{/* Column 3: Deep Link Sub-Directories (3 Cols) */}
					<div className="lg:col-span-3 grid grid-cols-2 gap-8 font-mono text-[10px] tracking-wider uppercase">
						<div className="flex flex-col gap-3.5">
							<span className="text-stone-200 font-bold tracking-widest flex items-center gap-1.5 mb-1">
								<Landmark size={11} className="text-emerald-500" /> JV Partners
							</span>
							<a
								href="#"
								className="text-stone-500 hover:text-emerald-400 transition-colors duration-300">
								NAF FAASL
							</a>
							<a
								href="#"
								className="text-stone-500 hover:text-emerald-400 transition-colors duration-300">
								Hamilton Energy
							</a>
							<a
								href="#"
								className="text-stone-500 hover:text-emerald-400 transition-colors duration-300">
								HQ Procurement
							</a>
							<a
								href="#"
								className="text-stone-500 hover:text-emerald-400 transition-colors duration-300">
								Asset Map
							</a>
						</div>

						<div className="flex flex-col gap-3.5">
							<span className="text-stone-200 font-bold tracking-widest flex items-center gap-1.5 mb-1">
								<Network size={11} className="text-emerald-500" /> Compliance
							</span>
							<span className="text-stone-600">NESREA Effluent</span>
							<span className="text-stone-600">FSC Timber standard</span>
							<span className="text-stone-600">POME-Free Framework</span>
							<span className="text-stone-600">Zero-Grid Solar</span>
						</div>
					</div>
				</div>

				{/* BOTTOM PANEL: Corporate Footnotes & Back to Top Anchor */}
				<div className="mt-12 pt-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-stone-600 uppercase">
					<div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-center sm:text-left">
						<span>© 2026 NAFF–HAM AGRO LTD.</span>
						<span className="hidden sm:inline text-stone-800">|</span>
						<span>ATC RFP-2026-01 PROPOSAL ARCHITECTURE</span>
						<span className="hidden sm:inline text-stone-800">|</span>
						<span className="text-stone-500">
							APO SARAJI, FCT ABUJA, NIGERIA
						</span>
					</div>

					{/* Kinetic Return to Zenith Button */}
					<button
						onClick={scrollToTop}
						className="group flex items-center gap-2 px-4 py-2 border border-stone-900 hover:border-stone-700 bg-stone-900/10 rounded-full text-stone-400 hover:text-stone-200 transition-all duration-300">
						<span>Top</span>
						<ChevronUp
							size={12}
							className="group-hover:-translate-y-0.5 transition-transform duration-300"
						/>
					</button>
				</div>
			</div>
		</footer>
	);
}
