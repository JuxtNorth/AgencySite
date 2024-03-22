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
		<article className="flex w-full flex-col justify-between rounded-2xl bg-[#F6F8F7] p-8 text-slate-900">
			<div>
				<section className="space-y-4 border-b border-slate-700 pb-4">
					<h2 className="text-xl font-semibold">{props.name}</h2>
					<h1 className="font-body text-4xl">
						{props.pricing}{' '}
						<span className="text-lg font-normal">per month</span>
					</h1>
					<div className="flex justify-center md:justify-start">
						<div className="flex items-center gap-2 rounded-full bg-green-200 px-4 py-1">
							<MagicIcon />
							<p className="text-xs leading-tight">{props.bestFor}</p>
						</div>
					</div>
				</section>

				<section className="py-8">
					<ul className="space-y-2 px-2">
						{props.features.map((content, key) => (
							<FeatureItem {...{ content, key }} />
						))}
					</ul>
				</section>
			</div>
			<button className="w-full rounded-xl bg-slate-900 py-4 text-white">
				{props.buttonLabel}
			</button>
		</article>
	);
};
