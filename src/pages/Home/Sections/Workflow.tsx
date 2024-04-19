import { FC, useEffect } from 'react';
import { WorkflowCard } from '@/components';
import { workflows } from '@/content';
import { cn, parseBoldDirective } from '@/lib/utils';
import { StarIcon } from '@/icons';
import ReactHtmlParser from 'react-html-parser';
import { handleAnimation } from '@/hooks';
import anime from 'animejs';

export const Workflow: FC = () => {
	useEffect(() => {
		return handleAnimation('._anime_stagger_observe', {}, (event) => {
			const target = event.target as HTMLElement;
			const targets = target.childNodes;
			anime({
				targets,
				translateY: [24, 0],
				opacity: [0, 1],
				duration: 800,
				delay: anime.stagger(120),
				easing: 'easeOutExpo'
			});
		});
	}, []);

	return (
		<section className="mx-auto mt-12 max-w-[70rem] overflow-hidden p-snug md:p-loose">
			<h1
				id="workflow"
				className="mb-loose text-center text-4xl font-semibold md:mb-relaxed md:text-5xl"
			>
				Workflow
			</h1>
			<div className="space-y-10 lg:space-y-relaxed">
				{workflows.map((props, i) => (
					<section
						key={i}
						className={cn(
							'mx-auto gap-loose py-loose md:flex md:px-24 lg:gap-relaxed lg:px-32',
							i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
						)}
					>
						<WorkflowCard {...props} />
						<article className="_anime_stagger_observe hidden w-full md:block">
							<p className="font-display text-lg font-semibold text-muted opacity-0">
								{props.serialNo}
							</p>
							<h1 className="max-w-80 text-4xl opacity-0">{props.header}</h1>
							<p className="mt-loose text-sm font-semibold opacity-0 lg:text-lg">
								{props.description}
							</p>
							<div
								className={cn(
									'mt-loose flex gap-2 opacity-0',
									['text-primary', 'text-accent', 'text-secondary'][i] as string
								)}
							>
								<StarIcon className="mt-0.5" />
								<p>{ReactHtmlParser(parseBoldDirective(props.emphasis))}</p>
							</div>
						</article>
					</section>
				))}
			</div>
		</section>
	);
};
