import { FC } from 'react';
import { PricingCard } from '@/components';
import { pricingPlans } from '@/content';
import { BoltIcon, CrownIcon, GlitterIcon } from '@/icons';
import { useMediaQuery } from '@/hooks';
import { cn } from '@/lib/utils';

const icons = [
	<BoltIcon className="inline overflow-visible text-xl text-blood-red" />,
	<GlitterIcon className="inline overflow-visible text-xl text-blood-red" />,
	<CrownIcon className="inline overflow-visible text-xl text-blood-red" />
];

export const Pricing: FC = () => {
	const { match: isDesktop } = useMediaQuery();

	return (
		<section className="mx-auto max-w-[92rem] overflow-hidden p-snug md:p-loose">
			<div className="mx-auto w-72 space-y-tight pb-12 text-center md:w-[48rem]">
				<h1
					id="pricing"
					className="text-4xl font-semibold text-blood-red md:text-5xl"
				>
					The Pricing
				</h1>
			</div>
			<div className="mx-auto overflow-y-hidden overflow-x-scroll">
				<section
					className={cn(
						'mx-auto grid w-fit grid-rows-3 gap-snug md:min-w-[72rem] md:grid-cols-3 md:grid-rows-none',
						isDesktop ? '_anime_stagger_observe' : ''
					)}
				>
					{pricingPlans.map((props, i) => (
						<PricingCard
							key={i}
							variant={'abc'[i] as 'a' | 'b' | 'c'}
							className="stagger-y-64 opacity-0"
							{...props}
						>
							{icons[i]}
						</PricingCard>
					))}
				</section>
			</div>
		</section>
	);
};
