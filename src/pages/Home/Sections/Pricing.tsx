import { FC } from 'react';
import { PricingCard } from '@/components';
import { pricingPlans } from '@/constants';
import { BoltIcon, CrownIcon } from '@/icons';

const icons = [
	<BoltIcon className='text-indigo-400 md:text-lg xl:text-xl' />,
	<CrownIcon className="text-green-300 md:text-lg xl:text-xl" />,
	<CrownIcon className="text-rose-500 md:text-lg xl:text-xl" />
];

export const Pricing: FC = () => {
	return (
		<section className="mx-auto max-w-[100rem] p-8">
			<div className="mx-auto w-72 space-y-tight pb-12 text-center md:w-[48rem]">
				<h1 id="pricing" className="text-5xl font-semibold">
					The Pricing
				</h1>
				<p className="text-lg leading-tight md:text-2xl">
					Lorem Ipsum Dolet Imet.
				</p>
			</div>
			<section className="grid grid-rows-3 gap-snug md:grid-cols-3 md:grid-rows-none">
				{pricingPlans.map((props, i) => (
					<PricingCard key={i} {...props}>
						{icons[i]}
					</PricingCard>
				))}
			</section>
		</section>
	);
};
