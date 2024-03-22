import { FC, ReactNode } from 'react';

interface WorkflowCardProps {
	children?: ReactNode;
	serialNo?: string;
	className?: string;
}

export const WorkflowCard: FC<WorkflowCardProps> = (props) => {
	return (
		<article className={props.className || ''}>
			{props.children}
			<div className="flex items-center gap-3">
				<div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-2xl font-extrabold text-white">
					{props.serialNo}
				</div>
				<h1 className="text-3xl font-semibold text-slate-800">Lorem Ipsum</h1>
			</div>
			<p className="ml-1 mt-4 text-lg leading-tight">
				Obtuse, rubber goose, green moose, guava juice. Giant snake, birthday
				cake, large fries, chocolate shake!
			</p>
		</article>
	);
};
