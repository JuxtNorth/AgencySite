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
			<h1 className=" text-3xl font-semibold">{props.title}</h1>
			<p className="mb-8 text-sm leading-tight">{props.description}</p>
		</article>
	);
};
