import { FC, ReactNode } from 'react';
import { FeatureItem } from './FeatureItem';
import { MagicIcon } from '@/icons';
import { cva } from 'class-variance-authority';

export interface PricingCardProps {
	name: string;
	pricing: number | string;
	emphasis: string;
	buttonLabel: string;
	buttonTo: string;
	features: string[];
	bestFor: string;
	children: ReactNode;
	variant?: 'a' | 'b' | 'c';
}

const variants = cva(
	'flex w-full flex-col justify-between rounded-2xl bg-surface p-6 md:p-loose',
	{
		variants: {
			variant: {
				a: '',
				b: 'bg-gradient-to-b from-primary from-[-30%] to-surface to-[12%]',
				c: 'bg-gradient-to-b from-accent from-[-30%] to-surface to-[12%]'
			}
		}
	}
);

export const PricingCard: FC<PricingCardProps> = (props) => {
	const { variant = 'a' } = props;

	return (
		<article className={variants({ variant })}>
			<div>
				<section className="flex h-56 flex-col justify-between border-b border-slate-400 pb-snug">
					<div className="space-y-4">
						<div className="flex justify-between">
							<h2 className="text-xl font-semibold">{props.name}</h2>
							{props.children}
						</div>
						<h1 className="font-body text-4xl">
							{props.pricing}{' '}
							<span className="text-lg font-normal">per month</span>
						</h1>
						<p className="text-sm">{props.emphasis}</p>
					</div>
					<button className="w-full rounded-xl bg-slate-800 py-snug text-white">
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
			<div className="flex items-center gap-2 rounded-full bg-primary-varient px-snug py-2">
				<MagicIcon className="shrink-0 md:text-sm" />
				<p className="text-sm leading-tight">{props.bestFor}</p>
			</div>
		</article>
	);
};
