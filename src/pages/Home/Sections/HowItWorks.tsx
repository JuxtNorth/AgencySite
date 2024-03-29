import { FC } from 'react';
import { HowItWorksCard } from '@/components';
import { howItWorks } from '@/constants';
import StarIcon from '@/assets/scribbles/Artboard 45.svg';

export const HowItWorks: FC = () => {
	return (
		<section className="mx-auto max-w-[100rem] p-snug md:p-loose">
			<div className="mt-8 rounded-3xl bg-pink-100 p-loose md:space-y-24 lg:space-y-36 lg:p-relaxed">
				<h2 className="mb-8 mt-snug text-center font-semibold lg:mt-12">
					How it works
				</h2>
				{howItWorks.map((props, i) => (
					<HowItWorksCard {...props} key={i}>
						<img
							src={StarIcon}
							alt="Lightning Bolt Icon"
							className="mx-auto w-[80%] py-snug md:w-64 md:py-0"
						/>
					</HowItWorksCard>
				))}
			</div>
		</section>
	);
};
