"use client";
import { FileText, Mail, Phone } from "lucide-react";

export default function BookingCTA() {
	return (
		<section id="rfp" className="py-24 bg-stone-950 w-full px-6 relative">
			<div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-900 p-12 relative overflow-hidden shadow-2xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
					<div className="lg:col-span-7">
						<span className="px-3 py-1 bg-stone-800 border border-stone-700 text-stone-400 font-mono text-[9px] uppercase tracking-widest rounded-full mb-6 inline-block">
							RFP Submission Portal Open
						</span>
						<h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-100 mb-6 leading-tight">
							Request For Proposals // ATC RFP-2026-01
						</h2>
						<p className="text-stone-400 text-sm font-light tracking-wide leading-relaxed mb-8 max-w-xl">
							NAFF–HAM Agro Ltd. invites multi-disciplinary architectural,
							structural engineering, and construction firms to submit unified
							designs for the 4.5 Ha Agro-Tourism Centre.
						</p>
						<div className="flex flex-col gap-3 font-mono text-xs text-stone-300">
							<div className="flex items-center gap-3">
								<FileText size={14} className="text-emerald-400" />
								<span>Tender Deadline: 21 Days from Issuance Date</span>
							</div>
							<div className="flex items-center gap-3">
								<Mail size={14} className="text-emerald-400" />
								<span>chris.echikwu@naff-ham.com</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone size={14} className="text-emerald-400" />
								<span>+234 7074871634</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-5 bg-stone-950/60 border border-stone-800/80 p-8 rounded-2xl flex flex-col items-center text-center">
						<span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-2">
							Authorized Issuing Director
						</span>
						<h4 className="text-stone-200 font-medium text-base mb-1">
							Mr C. Oche Echikwu
						</h4>
						<p className="text-stone-500 text-xs font-mono mb-8 uppercase tracking-widest">
							Ag. MD/CEO // NAFF–HAM Ltd.
						</p>

						<a
							href="mailto:chris.echikwu@naff-ham.com"
							className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/5">
							Submit Tender Query
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
