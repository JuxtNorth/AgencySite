import { FC, ReactNode } from 'react';

export interface PerkCardProps {
	children: ReactNode;
	title: string;
	description: string;
}

export const PerkCard: FC<PerkCardProps> = (props) => {
	return (
		<article className="_anime_generic text-center opacity-0 md:mx-0 md:h-full md:w-full">
			{props.children}
			<h1 className="mb-1 text-base font-semibold md:text-3xl">
				{props.title}
			</h1>
			<p className="mx-auto hidden max-w-[20rem] text-sm leading-tight md:inline-block">
				{props.description}
			</p>
		</article>
	);
};
