"use client";

export default function BookingCTA() {
	return (
		<section className="py-24 bg-stone-950 w-full px-6 relative overflow-hidden">
			<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-900 px-8 py-20 text-center relative overflow-hidden shadow-2xl">
				{/* Abstract Internal Kinetic Backdrop Ring */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

				<div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
					<span className="text-xs uppercase tracking-[0.4em] text-emerald-400 mb-6 font-medium">
						Limited Seasonal Allocation
					</span>
					<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-100 mb-6 leading-tight">
						Plan Your Visit
					</h2>
					<p className="text-stone-400 text-sm font-light tracking-wide leading-relaxed mb-10">
						Secure private entry access to the habitat zones. Experience
						localized autonomous living frameworks across customized timelines.
					</p>
					<button className="px-10 py-5 bg-stone-100 text-stone-950 rounded-full font-medium text-xs tracking-widest uppercase hover:bg-emerald-400 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-emerald-500/10">
						Initiate Booking Protocol
					</button>
				</div>
			</div>
		</section>
	);
}
