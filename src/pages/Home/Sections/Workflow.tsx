import { FC } from 'react';
import { WorkflowCard } from '@/components';
import { workflows } from '@/constants';
import { useMediaQuery } from '@/hooks';

export const Workflow: FC = () => {
	const { match: isDesktop } = useMediaQuery();

	return (
		<section className="mx-auto mt-12 max-w-[80rem] p-snug md:p-loose">
			<h1 className="text-center text-4xl font-semibold">Workflow</h1>
			{workflows.map(({ ...restProps }, i) => (
				<section key={i} className="py-loose md:flex gap-loose lg:gap-relaxed md:px-24 lg:px-32 max-w-[80rem]">
					{isDesktop && (i % 2 === 0) ? (
						<>
							<WorkflowCard {...restProps} />
							<article className="hidden md:block">
								<p className="font-display text-lg font-semibold text-muted">
									{restProps.serialNo}
								</p>
								<h1 className="max-w-80 text-4xl">{restProps.header}</h1>
								<p className="mt-loose text-sm font-semibold lg:text-lg">
									{restProps.description}
								</p>
							</article>
						</>
					) : (
						<>
							<article className="hidden md:block">
								<p className="font-display text-lg font-semibold text-muted">
									{restProps.serialNo}
								</p>
								<h1 className="max-w-80 text-4xl">{restProps.header}</h1>
								<p className="mt-loose text-sm font-semibold lg:text-lg">
									{restProps.description}
								</p>
							</article>
							<WorkflowCard {...restProps} />
						</>
					)}
				</section>
			))}
		</section>
	);
};
