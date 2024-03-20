import { FC } from 'react';
import { FeatureItem } from './FeatureItem';
import { MagicIcon } from '@/icons';

export interface PricingCardProps {
	name: string;
	pricing: number | string;
	emphasis: string;
	buttonLabel: string;
	buttonTo: string;
	features: string[];
	bestFor: string;
	className: string;
}

export const PricingCard: FC<PricingCardProps> = (props) => {
	return (
		<article
			className={
				'w-full rounded-2xl p-8 text-slate-900 shadow-lg ' + props.className
			}
		>
			<section className="space-y-4 border-b border-slate-700 text-center md:text-left">
				<h2 className="text-2xl font-semibold">{props.name}</h2>
				<h1 className="text-5xl font-bold md:text-4xl">
					₹{props.pricing}/<span className="text-3xl font-semibold">month</span>
				</h1>
				<div className="flex gap-2">
					<MagicIcon />
					<p className="-mt-1.5 mb-4 text-lg">Best for {props.bestFor}</p>
				</div>
			</section>
			<section className="py-8">
				<ul className="space-y-2 px-2">
					{props.features.map((content, key) => (
						<FeatureItem {...{ content, key }} />
					))}
				</ul>
			</section>
			<button className="w-full rounded-xl bg-slate-900 py-4 text-white">
				{props.buttonLabel}
			</button>
		</article>
	);
};
