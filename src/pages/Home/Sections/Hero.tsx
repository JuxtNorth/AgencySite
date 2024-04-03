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
			<div className="relative mb-2 text-center text-[1.86rem] font-semibold leading-[2.3rem] lg:text-[4.2rem] lg:leading-[4.6rem]">
				<div className="absolute -top-[42px] lg:-top-[150px] lg:left-[calc(50%-337px)]">
					<Grid
						gridX={isDesktop ? 9 : 8}
						width={gridWidth}
						height={gridHeight}
					/>
				</div>
				<h1 className="lg:ml-36">FORGING</h1>
				<div className="gap-snug lg:flex">
					<h1 className="inline-block bg-gradient-to-r from-primary from-10% to-secondary bg-clip-text text-transparent">
						PERSONAL BRAND
					</h1>
					<div className="hidden text-left leading-[0.2rem] lg:block">
						<p className="ml-4 mt-2.5 text-base">
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
				className="z-10 mt-16 cursor-pointer rounded-lg bg-primary px-8 py-4 text-xs transition-colors hover:bg-primary-varient"
				href="#"
			>
				See Plans
			</a>
		</header>
	);
};
