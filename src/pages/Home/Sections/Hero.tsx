import { Grid } from '@/components/ui';
import { FC, useEffect, useState } from 'react';

export const Hero: FC = () => {
	const [isDesktop, setIsDesktop] = useState<boolean>(
		window.matchMedia('(min-width: 768px)').matches
	);

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
		<header className="mx-auto flex min-h-[min(100vh,72rem)] max-w-[100rem] flex-col items-center justify-center lg:pt-16">
			<div className="relative mb-2 text-center  text-[clamp(1.86rem,6vw,7.5rem)] font-semibold leading-[98%]">
				<div className="absolute -top-[42px] lg:-top-[150px] left-[calc(50%-150px)] lg:left-[calc(50%-337px)]">
					<Grid
						gridX={isDesktop ? 9 : 8}
						width={gridWidth}
						height={gridHeight}
					/>
				</div>
				<h1 className="lg:ml-44 xl:ml-56 2xl:ml-80">FORGING</h1>
				<div className="gap-snug lg:flex">
					<h1 className="inline-block bg-gradient-to-r from-primary from-10% to-secondary bg-clip-text text-transparent">
						PERSONAL BRAND
					</h1>
					<div className="hidden text-left leading-[0.2rem] lg:flex items-center pb-4">
						<p className="ml-4 mt-2.5 text-[clamp(1rem,1.2vw,1.5rem)] leading-[150%]">
							Subscription here makes brands go <br /> viral there, grab your
							seats.
						</p>
					</div>
				</div>
				<h1 className="lg:ml-44">
					FOR{' '}
					<span className="inline-block bg-gradient-to-r from-accent to-primary to-60% bg-clip-text text-transparent">
						SOCIAL VIRALITY
					</span>
				</h1>
			</div>
			<p className="w-[80%] text-center text-xs lg:hidden">
				Subscription here makes brands go viral there, grab your seats.
			</p>
			<a
				className="z-10 mt-16 cursor-pointer rounded-lg bg-primary px-8 py-4 text-xs relative hover:continuous-gradient"
				href="#"
			>
				See Plans
			</a>
		</header>
	);
};
