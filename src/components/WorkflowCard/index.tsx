import { cva } from 'class-variance-authority';
import { FC, useEffect, useRef, useState } from 'react';
import { Stars } from '@/components/ui';
import { useMediaQuery } from '@/hooks';
import { cn, parseBoldDirective } from '@/lib/utils';
import { StarIcon } from '@/icons';
import Anime from '@mollycule/react-anime';
import anime from 'animejs';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

export interface WorkflowCardProps {
	serialNo: string;
	header: string;
	description: string;
	emphasis: string;
	aesthetics?: 'a' | 'b' | 'c';
}

const shapeVariants = cva(
	'size-8 rotate-45 rounded-lg transition-opacity shape',
	{
		variants: {
			aesthetics: {
				a: 'bg-primary [box-shadow:0px_0px_8px_4px_rgba(var(--primary),0.5),0px_0px_9px_12px_rgba(var(--primary),0.2)]',
				b: 'bg-accent [box-shadow:0px_0px_8px_4px_rgba(var(--accent),0.5),0px_0px_9px_12px_rgba(var(--accent),0.2)]',
				c: 'bg-secondary [box-shadow:0px_0px_8px_4px_rgba(var(--secondary),0.5),0px_0px_9px_12px_rgba(var(--secondary),0.2)]'
			}
		}
	}
);

const blobVariants = cva('absolute rounded-full', {
	variants: {
		type: {
			a: 'size-24 blur-[48px] bottom-0 right-0 bg-primary',
			b: 'size-36 blur-[64px] bottom-0 right-12 bg-accent',
			c: 'size-24 blur-[50px] bottom-0 right-0 bg-secondary'
		}
	}
});

const containerVariants = cva(
	'_anime_generic_observable block aspect-[3/3.6] mx-auto md:mx-0 relative size-fit max-h-[28rem] w-[80%] [&.entered]:opacity-100 opacity-0 transition-[transform,opacity] ease-out duration-1000',
	{
		variants: {
			type: {
				a: '[&.entered]:-rotate-[6deg] [&.entered]:translate-x-0 -translate-x-12 -rotate-[19deg] origin-bottom',
				b: '[&.entered]:rotate-[7deg] [&.entered]:translate-x-0 translate-x-12 rotate-[21deg] origin-bottom',
				c: '[&.entered]:-rotate-[7deg] [&.entered]:translate-x-0 -translate-x-12 -rotate-[20deg] origin-bottom'
			}
		}
	}
);

const emphasisVariant = cva('', {
	variants: {
		type: {
			a: 'text-primary',
			b: 'text-accent',
			c: 'text-secondary'
		}
	}
});

export const WorkflowCard: FC<WorkflowCardProps> = (props) => {
	const { aesthetics = 'a' } = props;
	const { match: isDesktop } = useMediaQuery();
	const [expanded, setExpanded] = useState(false);
	const shapeRef = useRef<HTMLDivElement>(null);
	const outerContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (expanded && shapeRef.current) {
			anime({
				targets: shapeRef.current,
				scale: 10,
				rotate: [45, 135]
			});
		} else if (!expanded && shapeRef.current && outerContentRef.current) {
			anime({
				targets: shapeRef.current,
				scale: 1,
				rotate: [135, 45],
				easing: 'easeOutExpo'
			});
			anime({
				targets: outerContentRef.current,
				translateY: [48, 0]
			});
		}
	}, [expanded]);

	return (
		<div
			role="button"
			tabIndex={isDesktop ? -1 : 0}
			data-expanded={expanded}
			onClick={() => !isDesktop && setExpanded(!expanded)}
			className={cn(containerVariants({ type: aesthetics }), 'card')}
		>
			<div className="relative mx-auto flex size-full flex-col justify-between overflow-hidden rounded-3xl bg-surface p-6 md:w-full">
				{expanded && (
					<div className="absolute left-0 top-0 z-20 flex size-full flex-col justify-between p-loose">
						<div>
							<Anime
								in
								appear
								duration={1000}
								onEntering={{
									opacity: [0, 1],
									translateY: [48, 0],
									delay: anime.stagger(120)
								}}
							>
								<span className="font-display font-semibold md:text-lg">
									{props.serialNo}
								</span>
								<h1 className="mb-snug text-3xl font-semibold">
									{props.header}
								</h1>
								<p className="text-xs">{props.description}</p>
							</Anime>
						</div>
						<Anime
							in
							appear
							duration={1000}
							onEntering={{
								opacity: [0, 1],
								translateY: [32, 0],
								delay: 360
							}}
						>
							<p className={'card-emphasis-text mt-loose flex gap-1.5 text-xs'}>
								<StarIcon
									className={cn('mt-px', emphasisVariant({ type: aesthetics }))}
								/>
								<span className="font-display">
									{ReactHtmlParser(parseBoldDirective(props.emphasis))}
								</span>
							</p>
						</Anime>
					</div>
				)}
				<div ref={shapeRef} className={shapeVariants({ aesthetics })} />
				<div ref={outerContentRef} className="card-outer-text z-10">
					<span className="font-display font-semibold text-muted md:text-lg">
						{props.serialNo}
					</span>
					<h1 className="text-3xl font-semibold md:text-2xl lg:text-[2.5rem] lg:leading-[108%]">
						{props.header}
					</h1>
				</div>
				<div className="absolute bottom-0 right-0 size-56">
					<Stars seed={Number(props.serialNo) + 1} count={50} scale={2} />
				</div>
				<div className={blobVariants({ type: aesthetics })} />
			</div>
			{!isDesktop && (
				<p className="absolute left-[50%] mt-1 -translate-x-[50%] whitespace-nowrap text-xs">
					click to <strong className="text-accent">learn more</strong>.
				</p>
			)}
		</div>
	);
};
