import { FC } from 'react';
import { WorkflowCard } from '@/components';
import { workflows } from '@/constants';
import { cn } from '@/lib/utils';
import { StarIcon } from '@/icons';

export const Workflow: FC = () => {
	return (
		<section className="mx-auto mt-12 max-w-[70rem] p-snug md:p-loose">
			<h1 className="mb-relaxed text-center text-4xl font-semibold">
				Workflow
			</h1>
			<div className="space-y-relaxed">
				{workflows.map(({ emphasis, ...restProps }, i) => (
					<section
						key={i}
						className={cn(
							'mx-auto gap-loose py-loose md:flex md:px-24 lg:gap-relaxed lg:px-32',
							i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
						)}
					>
						<WorkflowCard {...restProps} />
						<article className="hidden w-full md:block">
							<p className="font-display text-lg font-semibold text-muted">
								{restProps.serialNo}
							</p>
							<h1 className="max-w-80 text-4xl">{restProps.header}</h1>
							<p className="mt-loose text-sm font-semibold lg:text-lg">
								{restProps.description}
							</p>
							<div
								className={cn(
									'mt-loose flex gap-2',
									['text-primary', 'text-accent', 'text-secondary'][i] as string
								)}
							>
								<StarIcon className="mt-0.5" />
								<p>{emphasis}</p>
							</div>
						</article>
					</section>
				))}
			</div>
		</section>
	);
};
