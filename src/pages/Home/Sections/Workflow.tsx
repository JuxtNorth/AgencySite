import { FC } from 'react';
import { WorkflowCard } from '@/components';
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
				<WorkflowCard serialNo="1" className="rounded-2xl bg-rose-300 p-8">
					<img
						src={BoltIcon}
						alt="Lightning Bolt Icon"
						className="w-full py-4"
					/>
				</WorkflowCard>
				<WorkflowCard serialNo="2" className="rounded-2xl bg-green-300 p-8">
					<img
						src={LeafIcon}
						alt="Lightning Bolt Icon"
						className="w-full py-4"
					/>
				</WorkflowCard>
				<WorkflowCard serialNo="3" className="rounded-2xl bg-purple-300 p-8">
					<img
						src={StarIcon}
						alt="Lightning Bolt Icon"
						className="w-full py-4"
					/>
				</WorkflowCard>
			</section>
		</section>
	);
};
