import { FC, ReactNode } from 'react';
import { FeatureItem } from './FeatureItem';
import { MagicIcon } from '@/icons';
import { cva } from 'class-variance-authority';
import { GlowButton } from '@/components';

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
	'absolute size-32 rounded-full top-0 left-0',
	{
		variants: {
			variant: {
				a: '',
				b: 'bg-primary blur-3xl',
				c: 'bg-accent blur-[80px] size-32'
			}
		}
	}
);

export const PricingCard: FC<PricingCardProps> = (props) => {
	const { variant = 'a' } = props;

	return (
		<article className='relative flex w-full flex-col justify-between rounded-2xl bg-surface p-6 md:p-loose overflow-hidden'>
			<div className={variants({ variant })} />
			<div className='z-[1]'>
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
					<GlowButton variant={variant} className="w-full">
						{props.buttonLabel}
					</GlowButton>
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
