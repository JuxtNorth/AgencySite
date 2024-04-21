import { CaseStudyLink } from '@/components';
import { caseStudyLinks } from '@/content';
import { FC } from 'react';

export const CaseStudies: FC = () => {
	return (
		<div className="m-4 mx-auto max-w-[100rem] p-2 pt-16 text-center lg:p-8">
			<section className="size-full rounded-3xl p-snug text-center md:rounded-[4.2rem] lg:p-loose">
				<h1 className="text-4xl text-blood-red lg:text-7xl">Case Study</h1>
				<h2 className="mb-loose text-xl text-muted lg:text-4xl">
					on client results
				</h2>
				<div className="rounded-2xl bg-surface p-snug text-lg font-semibold text-font-primary brightness-125 md:rounded-3xl lg:space-y-0 lg:p-loose lg:py-loose lg:text-3xl">
					{caseStudyLinks.map((props, index) => (
						<CaseStudyLink {...props} index={index + 1} />
					))}
				</div>
			</section>
		</div>
	);
};
