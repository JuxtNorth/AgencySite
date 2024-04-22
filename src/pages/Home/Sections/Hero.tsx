import { Grid } from '@/components/ui';
import { GlitterIcon } from '@/icons';
import anime from 'animejs';
import { FC, useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export const Hero: FC = () => {
	const [isDesktop, setIsDesktop] = useState<boolean>(
		window.matchMedia('(min-width: 768px)').matches
	);

	const heading1 = useRef<HTMLHeadingElement>(null);
	const heading2 = useRef<HTMLHeadingElement>(null);
	const heading3 = useRef<HTMLHeadingElement>(null);
	const para = useRef<HTMLParagraphElement>(null);
	const button = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const duration = 1500;
		const curve = 'cubicBezier(0, 0, .3, 1)';

		if (heading1.current) {
			anime({
				targets: heading1.current,
				translateX: [64, 0],
				opacity: [0, 1],
				easing: curve,
				duration
			});

			anime({
				targets: heading3.current,
				translateX: [40, 0],
				opacity: [0, 1],
				easing: curve,
				duration
			});

			anime({
				targets: heading2.current,
				translateX: [-60, 0],
				opacity: [0, 1],
				easing: curve,
				duration
			});

			anime({
				targets: button.current,
				translateY: [60, 0],
				opacity: [0, 1],
				easing: curve,
				duration
			});

			anime({
				targets: para.current,
				opacity: [0, 1],
				easing: 'linear',
				duration: 1000,
				delay: duration - 1000
			});
		}
	}, []);

	useEffect(() => {
		const onResize = () => {
			setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
		};

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	}, []);

	const gridWidth = isDesktop ? 675 : 300;
	const gridHeight = isDesktop ? 600 : 300;

	return (
		<header className="relative mx-auto flex min-h-[min(100vh,72rem)] max-w-[100rem] flex-col items-center justify-center overflow-hidden lg:pt-16">
			<div className="relative mb-2 text-center text-[clamp(1.86rem,7.8vw,7.5rem)] font-extrabold leading-[94%] md:text-[clamp(1.86rem,6vw,7.5rem)] md:font-bold md:leading-[98%]">
				<div className="absolute -top-[42px] left-[calc(50%-150px)] lg:-top-[150px] lg:left-[calc(50%-337px)]">
					<Grid
						gridX={isDesktop ? 9 : 8}
						width={gridWidth}
						height={gridHeight}
					/>
				</div>
				<div>
					<h1 ref={heading1} className="lg:ml-44 xl:ml-56 2xl:ml-80">
						FORGING
					</h1>
					<div className="gap-snug lg:flex">
						<h1
							ref={heading2}
							className="inline-block bg-gradient-to-r from-blood-red from-10% to-[#d93690] bg-clip-text text-transparent"
						>
							PERSONAL BRAND
						</h1>
						<div className="hidden items-center pb-4 text-left leading-[0.2rem] lg:flex">
							<p
								ref={para}
								className="ml-4 mt-2.5 text-[clamp(1rem,1.2vw,1.5rem)] leading-[150%]"
							>
								<span className="text-blue">Subscription here</span> makes
								brands go <br /> viral there, grab your seats.
							</p>
						</div>
					</div>
					<h1 ref={heading3} className="lg:ml-44">
						FOR{' '}
						<span className="gradient-reveal inline-block bg-gradient-to-r from-[#d93690] to-blood-red to-60% bg-clip-text text-transparent">
							SOCIAL VIRALITY
						</span>
					</h1>
				</div>
				<p className="mx-auto mt-2 w-[80%] text-center text-xs lg:hidden">
					<span className="text-blue">Subscription here</span> makes brands go
					viral there, grab your seats.
				</p>
			</div>
			<HashLink
				ref={button}
				className="relative z-10 mt-16 cursor-pointer rounded-lg bg-blue px-6 py-4 text-xs"
				to="#schedule"
			>
				<GlitterIcon className="mr-2 inline text-sm" />
				Book a Call
			</HashLink>
		</header>
	);
};
