import { FC } from 'react';
import { HowItWorksCard } from '@/components';
import { howItWorks } from '@/constants';
import StarIcon from '@/assets/scribbles/Artboard 45.svg';

export const HowItWorks: FC = () => {
	return (
		<section className="p-8">
			<div className="mt-8 rounded-3xl bg-pink-100 p-8 md:space-y-24">
				<h2 className="mb-8 text-center font-semibold text-slate-800">
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
