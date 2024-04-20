import { FC } from 'react';

export interface HeaderProps {
	title: string;
	description: string;
}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<header className="space-y-tight rounded-2xl py-snug text-center md:py-relaxed">
			<h1 className="mb-snug text-4xl font-bold text-blood-red md:text-[clamp(2.5rem,6vw,5rem)]">
				{props.title}
			</h1>
			<p className="text-sm text-muted md:text-base lg:text-lg">
				{props.description}
			</p>
		</header>
	);
};
