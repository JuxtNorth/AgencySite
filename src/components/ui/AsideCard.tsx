import { FC } from 'react';

export interface AsideCardProps {
	image?: string;
	className?: string;
	title: string;
}

export const AsideCard: FC<AsideCardProps> = (props) => {
	return (
		<article
			className={
				'flex flex h-24 w-full items-center justify-evenly gap-4 rounded-2xl bg-rose-500 text-4xl font-semibold text-white ' +
				props?.className
			}
		>
			<h1>{props.title}</h1>
		</article>
	);
};
