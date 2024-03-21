import { FC, ReactNode } from 'react';

export interface AsideCardProps {
	children: ReactNode;
	title: string;
	description: string;
}

export const AsideCard: FC<AsideCardProps> = (props) => {
	return (
		<article className="flex gap-4">
			<div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime-200">
				{props.children}
			</div>
			<div>
				<h1 className="mb-2 text-4xl font-bold">{props.title}</h1>
				<p className="text-lg">{props.description}</p>
			</div>
		</article>
	);
};
