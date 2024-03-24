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
				'flex w-full flex-col justify-between rounded-2xl bg-[#F6F8F7] p-8 text-slate-900 ' +
				props.className
			}
		>
			<div>
				<section className="flex h-56 flex-col justify-between border-b border-slate-400 pb-snug">
					<div className="space-y-4">
						<h2 className="text-xl font-semibold">{props.name}</h2>
						<h1 className="font-body text-4xl">
							{props.pricing}{' '}
							<span className="text-lg font-normal">per month</span>
						</h1>
						<p className="text-sm">{props.emphasis}</p>
					</div>
					<button className="w-full rounded-xl bg-slate-900 py-snug text-white">
						{props.buttonLabel}
					</button>
				</section>

				<section className="py-8">
					<ul className="space-y-2 px-2">
						{props.features.map((content, key) => (
							<FeatureItem {...{ content, key }} />
						))}
					</ul>
				</section>
			</div>
			<div className="flex items-center gap-2 rounded-full bg-green-200 px-snug py-2">
				<MagicIcon className="shrink-0 md:text-sm" />
				<p className="text-xs leading-tight">{props.bestFor}</p>
			</div>
		</article>
	);
};
