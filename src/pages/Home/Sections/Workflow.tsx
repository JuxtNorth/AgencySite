import { FC } from 'react';
import { WorkflowCard } from '@/components';
import BoltIcon from '@/assets/scribbles/Artboard 11.svg';
import LeafIcon from '@/assets/scribbles/Artboard 33.svg';
import StarIcon from '@/assets/scribbles/Artboard 45.svg';

export const Workflow: FC = () => {
	return (
		<section className="mx-auto mt-12 max-w-[100rem] p-snug md:p-loose">
			<div className="mx-auto space-y-tight pb-8 text-center">
				<h2 className="font-semibold">Our Workflow</h2>
				<p className="leading-tight">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<section className="grid grid-rows-3 gap-loose md:grid-cols-3 md:grid-rows-none">
				<WorkflowCard
					serialNo="1"
					className="space-y-4 rounded-2xl bg-rose-300 p-8"
				>
					<img
						src={BoltIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-snug"
					/>
				</WorkflowCard>
				<WorkflowCard
					serialNo="2"
					className="space-y-4 rounded-2xl bg-green-300 p-8"
				>
					<img
						src={LeafIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-snug"
					/>
				</WorkflowCard>
				<WorkflowCard
					serialNo="3"
					className="space-y-4 rounded-2xl bg-purple-300 p-8"
				>
					<img
						src={StarIcon}
						alt="Lightning Bolt Icon"
						className="mx-auto w-[80%] py-snug"
					/>
				</WorkflowCard>
			</section>
		</section>
	);
};
