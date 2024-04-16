import Trend from '@/assets/scribbles/Trend.svg';
import anime from 'animejs';
import { FC, useEffect, useRef, useState } from 'react';

/**
 * This is a fake loader which allows the page some buffer time before appearing so that animations run smoothly on the hero page.
 */
export const PageLoader: FC = () => {
	const [isVisible, setVisibility] = useState(true);
	const loaderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (loaderRef.current) {
			const timeline = anime.timeline({
				targets: loaderRef.current,
				complete: () => {
					setVisibility(false);
				},
				easing: 'easeOutExpo'
			});

			timeline
				.add({
					width: '5%',
					duration: 120
				})
				.add({
					width: '30%',
					duration: 400,
					delay: 400
				})
				.add({
					width: '70%',
					duration: 800,
					delay: 300
				})
				.add({
					width: '100%',
					duration: 500,
					delay: 600
				})
				.add({
					delay: 200
				});
		}
	}, []);

	return (
		<>
			{isVisible && (
				<div
					aria-hidden
					className="fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col items-center justify-center bg-background"
				>
					<div className="flex flex-col items-center gap-4">
						<img
							width={32}
							src={Trend}
							className="brightness-90 invert"
							alt="Hi Reach Media logo"
						/>
						<h1 className="text-3xl">Hi Reach Media</h1>
					</div>
					<div className="mt-snug h-1 w-64 overflow-hidden rounded-full bg-surface">
						<div
							ref={loaderRef}
							className="h-full w-0 rounded-full bg-accent"
						></div>
					</div>
				</div>
			)}
		</>
	);
};
