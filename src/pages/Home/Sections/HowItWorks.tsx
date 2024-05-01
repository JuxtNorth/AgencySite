import { FC, useEffect, useRef, useState } from 'react';
import { HowItWorksCard } from '@/components';
import { howItWorks } from '@/content';
import { useMediaQuery } from '@/hooks';

export const HowItWorks: FC = () => {
	const { match: isTablet } = useMediaQuery('(min-width: 600px)');
	const [height, setHeight] = useState('0px');
	const progressRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			const rect = progressRef.current?.getBoundingClientRect();
			if (rect && rect.y < 0) {
				const y = rect.height;
				const normal = (y - (y - Math.abs(rect.top))) / y;
				const h = `clamp(0px,${(normal + 0.2)*100}%,100%)`;
				setHeight(h);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

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
					<div
						className="h-full w-2 rounded-full bg-surface overflow-hidden"
						ref={progressRef}
					>
						<div
							className="w-full rounded-full bg-blood-red"
							style={{ height }}
						></div>
					</div>
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
					<div className="relative h-full w-2 rounded-full bg-surface">
						<div className="h-[50%] w-full rounded-full bg-blood-red"></div>
					</div>
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
