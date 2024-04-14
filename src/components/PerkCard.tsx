import { FC, ReactNode } from 'react';

export interface PerkCardProps {
	children: ReactNode;
	title: string;
	description: string;
}

export const PerkCard: FC<PerkCardProps> = (props) => {
	return (
		<article className="text-center md:mx-0 md:h-full md:w-full">
			{props.children}
			<h1 className="mb-1 text-lg md:text-3xl font-semibold">{props.title}</h1>
			<p className="hidden md:inline mx-auto max-w-[20rem] text-sm leading-tight">
				{props.description}
			</p>
		</article>
	);
};
