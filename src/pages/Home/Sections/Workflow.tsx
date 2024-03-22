import { FC } from 'react';
import { WorkflowCard, HowItWorksCard } from '@/components';
import { howItWorks } from '@/constants';
import BoltIcon from '@/assets/scribbles/Artboard 11.svg';
import LeafIcon from '@/assets/scribbles/Artboard 33.svg';
import StarIcon from '@/assets/scribbles/Artboard 45.svg';

export const Workflow: FC = () => {
	return (
		<section className="p-8">
			<div className="mx-auto w-80 space-y-4 pb-8 text-center md:w-[32rem]">
				<h1 className="text-5xl font-medium md:text-7xl">
					Our <span className="text-rose-500">Workflow</span>
				</h1>
				<p className="text-md leading-tight md:text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<section className="grid grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-none">
				<WorkflowCard
					serialNo="1"
					className="space-y-4 rounded-2xl bg-rose-300 p-8"
				>
					<img
						src={BoltIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-4"
					/>
				</WorkflowCard>
				<WorkflowCard
					serialNo="2"
					className="space-y-4 rounded-2xl bg-green-300 p-8"
				>
					<img
						src={LeafIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-4"
					/>
				</WorkflowCard>
				<WorkflowCard
					serialNo="3"
					className="space-y-4 rounded-2xl bg-purple-300 p-8"
				>
					<img
						src={StarIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-4"
					/>
				</WorkflowCard>
			</section>
			<section className="mt-8 rounded-3xl bg-pink-100 p-8 md:space-y-24">
				<h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
					How it works
				</h1>
				{howItWorks.map((props, i) => (
					<HowItWorksCard {...props} key={i}>
						<img
							src={StarIcon}
							alt="Lightning Bolt Icon"
							className="mx-auto w-[80%] py-4 md:w-64 md:py-0"
						/>
					</HowItWorksCard>
				))}
			</section>
		</section>
	);
};
