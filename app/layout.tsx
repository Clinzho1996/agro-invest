import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "NAFF–HAM AGRO TOURISM CENTRE",
	description:
		"A flagship agro-tourism development project by NAFF–HAM AGRO LTD., located in the heart of Abuja, Nigeria. This innovative destination seamlessly blends sustainable agriculture, immersive experiences, and community engagement to create a unique and unforgettable experience for visitors. Explore our master plan, revenue zones, procurement mandate, and operational IoT systems as we redefine the future of agro-tourism.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${bricolageGrotesque.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
