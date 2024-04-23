import { FC, ReactNode } from 'react';
import { FeatureItem } from './FeatureItem';
import { MagicIcon } from '@/icons';
import { cva } from 'class-variance-authority';
import { GlowButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export interface PricingCardProps {
	name: string;
	pricing: number | string;
	emphasis: string;
	buttonLabel: string;
	buttonTo: string;
	features: string[];
	bestFor: string;
	children: ReactNode;
	recommended?: boolean;
	variant?: 'a' | 'b' | 'c';
	className?: string;
	linkTo: string;
}

const blobVariants = cva('absolute size-32 rounded-full top-0 left-0', {
	variants: {
		variant: {
			a: 'bg-blue blur-3xl',
			b: 'bg-blood-red blur-3xl',
			c: 'bg-green blur-[80px] size-32'
		}
	}
});

const highlightVariant = cva(
	'flex items-center gap-2 rounded-full px-snug py-2',
	{
		variants: {
			variant: {
				a: 'bg-blue',
				b: 'bg-blood-red',
				c: 'bg-green'
			}
		}
	}
);

export const PricingCard: FC<PricingCardProps> = (props) => {
	const navigate = useNavigate();

	const { match: isDesktop } = useMediaQuery();

	const { variant = 'a' } = props;

	return (
		<article
			className={cn(
				'relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-surface p-6 md:min-w-[22rem] md:p-loose',
				props.className || '',
				isDesktop ? '' : '_anime_generic'
			)}
		>
			<div className={blobVariants({ variant })} />
			<div className="z-[1]">
				{props.recommended && (
					<span className="absolute right-0 top-0 rounded-bl-2xl bg-rose-200/60 px-snug py-2 text-[13px]">
						Recommended
					</span>
				)}
				<section className="flex h-52 flex-col justify-between border-b border-slate-400 pb-snug">
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							{props.children}
							<h2 className="text-lg font-semibold">{props.name}</h2>
						</div>
						<h1 className="font-body text-[34px]">
							{props.pricing}{' '}
							<span className="text-base font-normal">per month</span>
						</h1>
						<p className="text-xs">{props.emphasis}</p>
					</div>
					<GlowButton variant={variant} className="w-full" onClick={() => {
						navigate(props.linkTo)
					}}>
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
			<div className={highlightVariant({ variant })}>
				<MagicIcon className="shrink-0 md:text-sm" />
				<p className="font-display text-sm leading-tight">{props.bestFor}</p>
			</div>
		</article>
	);
};
