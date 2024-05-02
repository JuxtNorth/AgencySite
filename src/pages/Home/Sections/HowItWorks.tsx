import { FC, useEffect, useRef } from 'react';
import { HowItWorksCard } from '@/components';
import { howItWorks } from '@/content';
import { useMediaQuery } from '@/hooks';

const Progress: FC = () => {
	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			const outer = outerRef.current;
			const inner = innerRef.current;
			if (outer && inner) {
				const outerRect = outer.getBoundingClientRect();
				if (outerRect.top < window.innerHeight / 2) {
					const h = window.innerHeight / 2 - outerRect.top;
					inner.style.setProperty('height', `clamp(0px,${h}px,100%)`);
				}
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div
			className="z-10 h-full w-2 overflow-hidden rounded-full bg-surface"
			ref={outerRef}
		>
			<div
				ref={innerRef}
				className="w-full rounded-full bg-blood-red transition-[height] duration-75"
			/>
		</div>
	);
};

export const HowItWorks: FC = () => {
	const { match: isTablet } = useMediaQuery('(min-width: 600px)');

	return (
		<section className="mx-auto max-w-[100rem] p-snug md:p-loose">
			<h2 className="mb-8 mt-snug text-center text-4xl font-semibold text-blood-red md:text-5xl lg:mt-12">
				How it works
			</h2>
			{isTablet ? (
				<div className="mx-auto grid max-w-[60rem] grid-cols-[auto_auto_auto] gap-6 p-4">
					<div className="space-y-8">
						{howItWorks.map((props, index) => (
							<HowItWorksCard
								{...props}
								index={index + 1}
								alternate
								visible={index % 2 === 0}
							/>
						))}
					</div>
					<Progress />
					<div className="space-y-8">
						{howItWorks.map((props, index) => (
							<HowItWorksCard
								{...props}
								index={index + 1}
								alternate={false}
								visible={index % 2 !== 0}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="grid grid-cols-[auto_auto] gap-6 p-4">
					<Progress />
					<div className="space-y-8">
						{howItWorks.map((props, index) => (
							<HowItWorksCard
								{...props}
								index={index + 1}
								alternate={false}
								visible
							/>
						))}
					</div>
				</div>
			)}
		</section>
	);
};
