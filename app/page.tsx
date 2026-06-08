import BookingCTA from "@/components/BookingCTA";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // New dynamic floating layout anchor
import Hero from "@/components/Hero";
import ImmersiveStory from "@/components/ImmersiveStory";
import MapWrapper from "@/components/MapWrapper";
import NavigationStrip from "@/components/NavigationStrip";
import TechDashboard from "@/components/TechDashboard";

export default function Home() {
	return (
		<main className="relative min-h-screen w-full bg-stone-950 text-stone-100 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
			{/* Global Architecture Elements */}
			<Header />

			<div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
			<div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-stone-900/40 rounded-full blur-[160px] pointer-events-none z-0" />

			<div className="relative z-10">
				<Hero />
				<MapWrapper />
				<NavigationStrip />
				<Experiences />
				<ImmersiveStory />
				<TechDashboard />
				<BookingCTA />
				<Footer />
			</div>
		</main>
	);
}
