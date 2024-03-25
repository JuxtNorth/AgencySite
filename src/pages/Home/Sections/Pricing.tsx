import { FC } from 'react';
import { PricingCard } from '@/components';
import { pricingPlans } from '@/constants';
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
					<PricingCard key={i} {...props} />
				))}
			</section>
		</section>
	);
};
