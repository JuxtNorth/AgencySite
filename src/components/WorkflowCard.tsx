import { FC } from 'react';

interface WorkflowCardProps {}

export const WorkflowCard: FC<WorkflowCardProps> = (props) => {
	return (
		<article className="w-96 rounded-2xl bg-green-300 p-8">
			<div className="flex items-center gap-3">
				<div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-2xl font-extrabold text-white">
					1
				</div>
				<h1 className="text-3xl font-semibold text-slate-800">Lorem Ipsum</h1>
			</div>
			<p className="ml-1 mt-4 w-[90%] text-lg leading-tight">
				Obtuse, rubber goose, green moose, guava juice. Giant snake, birthday
				cake, large fries, chocolate shake!
			</p>
		</article>
	);
};
