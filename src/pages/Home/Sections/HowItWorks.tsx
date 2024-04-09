import { FC } from 'react';
import { HowItWorksCard } from '@/components';
import { howItWorks } from '@/constants';
import Ideate from '@/assets/illustrations/undraw_thought_process_re_om58.svg';
import Strategy from '@/assets/illustrations/undraw_business_decisions_re_84ag.svg';
import Videos from '@/assets/illustrations/undraw_video_files_fu10.svg';
import Traffic from '@/assets/illustrations/undraw_photo_sharing_re_jip7.svg';
import Sales from '@/assets/illustrations/undraw_shopping_re_hdd9.svg';
import Launch from '@/assets/illustrations/undraw_launching_re_tomg.svg';

const illustrations: string[] = [
	Strategy,
	Ideate,
	Videos,
	Traffic,
	Sales,
	Launch
];

export const HowItWorks: FC = () => {
	return (
		<section className="mx-auto max-w-[100rem] p-snug md:p-loose">
			<div className="mt-8 rounded-3xl bg-surface p-loose md:space-y-24 lg:space-y-36 lg:p-relaxed">
				<h2 className="mb-8 mt-snug text-4xl font-semibold md:text-5xl text-center lg:mt-12">
					How it works
				</h2>
				{howItWorks.map((props, i) => (
					<HowItWorksCard {...props} key={i}>
						<img
							src={illustrations[i]}
							alt=""
							aria-hidden
							className="mx-auto mb-snug mt-12 w-[80%] py-snug md:w-64 md:py-0 lg:mb-0 lg:mt-0"
						/>
					</HowItWorksCard>
				))}
			</div>
		</section>
	);
};
