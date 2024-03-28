import { FC } from 'react';

export interface HeaderProps {
	title: string;
	description: string;
}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<header className="space-y-loose rounded-2xl bg-purple-200 p-loose py-relaxed text-center lg:rounded-3xl">
			<h1 className="font-bold leading-tight">{props.title}</h1>
			<h3 className="text-sm md:text-base lg:text-lg">{props.description}</h3>
		</header>
	);
};
