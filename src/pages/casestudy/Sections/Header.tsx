import { FC } from 'react';

export interface HeaderProps {
	title: string;
	description: string;
}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<header className="space-y-tight rounded-2xl py-snug text-center md:py-relaxed">
			<h1 className="text-4xl font-semibold md:text-[clamp(2.5rem,6vw,5rem)] text-blood-red mb-snug">{props.title}</h1>
			<p className="text-sm md:text-base lg:text-lg text-muted">{props.description}</p>
		</header>
	);
};
