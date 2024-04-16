import { FC } from 'react';

export interface HeaderProps {
	title: string;
	description: string;
}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<header className="space-y-tight rounded-2xl py-snug">
			<h1 className="text-4xl font-semibold md:text-5xl">{props.title}</h1>
			<p className="text-sm md:text-base lg:text-lg">{props.description}</p>
		</header>
	);
};
