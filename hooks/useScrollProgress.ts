"use client";

import { useEffect, useState } from "react";

/**
 * Returns a normalized value (0 to 1) representing the current scroll progress
 * of the document, optimized with a high-performance animation frame throttle.
 */
export function useScrollProgress(): number {
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		let ticking = false;

		const updateScrollProgress = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;

			if (totalHeight === 0) {
				setProgress(0);
				ticking = false;
				return;
			}

			const currentScroll = window.scrollY;
			const normalizedProgress = Math.min(
				Math.max(currentScroll / totalHeight, 0),
				1,
			);

			setProgress(normalizedProgress);
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollProgress);
				ticking = true;
			}
		};

		// Initialize baseline on mount
		updateScrollProgress();

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateScrollProgress);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updateScrollProgress);
		};
	}, []);

	return progress;
}
