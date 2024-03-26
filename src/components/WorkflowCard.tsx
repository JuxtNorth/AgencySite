import { FC, ReactNode } from 'react';

interface WorkflowCardProps {
	children?: ReactNode;
	serialNo?: string;
	className?: string;
}

export const WorkflowCard: FC<WorkflowCardProps> = (props) => {
	return (
		<article className={props.className || ''}>
			<div className="flex aspect-[1/1] h-8 items-center justify-center rounded-full bg-slate-700 font-extrabold text-white md:h-12 md:text-2xl lg:h-14 lg:text-4xl xl:text-4xl">
				{props.serialNo}
			</div>
			{props.children}
			<div className="flex gap-3">
				<h3 className="font-semibold">Lorem Ipsum</h3>
			</div>
			<p className="ml-1 mt-4 leading-tight">
				Obtuse, rubber goose, green moose, guava juice. Giant snake, birthday
				cake, large fries, chocolate shake!
			</p>
		</article>
	);
};
