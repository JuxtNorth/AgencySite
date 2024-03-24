import { FC } from 'react';
import { PricingCard } from '@/components';
import { pricingPlans } from '@/constants';
export const Pricing: FC = () => {
	return (
		<section className="p-8">
			<div className="mx-auto w-72 pb-12 text-center md:w-[48rem]">
				<h1 id="pricing" className="text-5xl font-medium md:text-7xl">
					The <span className="font-bold text-rose-500">Pricing</span>
				</h1>
				<p className="mt-4 text-lg leading-tight md:text-2xl">
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
