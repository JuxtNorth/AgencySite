import { FC } from 'react';

export interface HeaderProps {
	title: string;
	description: string;
}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<header className="space-y-tight rounded-2xl px-snug py-relaxed text-center md:py-36">
			<h1 className="mb-snug text-[clamp(2.4rem,10vw,6rem)] font-extrabold text-blood-red lg:mb-relaxed">
				{props.title}
			</h1>
			<p className="text-xl text-font-primary md:text-base lg:text-2xl">
				{props.description}
			</p>
		</header>
	);
};
