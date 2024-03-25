import { FC, ReactNode } from 'react';

export interface HowItWorksCardProps {
	title: string;
	description: string;
	index: number;
	children: ReactNode;
	alternate: boolean;
}

interface ContentProps {
	title: string;
	description: string;
	index: number;
}

const Content: FC<ContentProps> = (props) => {
	return (
		<article>
			<h3 className="mb-4  font-semibold lg:text-4xl">
				<span className="rounded-full bg-pink-300 px-2">{props.index}</span>{' '}
				{props.title}
			</h3>
			<p className="leading-tight">{props.description}</p>
		</article>
	);
};

export const HowItWorksCard: FC<HowItWorksCardProps> = (props) => {
	const isDesktop = window.matchMedia('(min-width: 768px)');

	if (props.alternate && isDesktop.matches) {
		return (
			<article className="grid md:grid-cols-2">
				<Content
					title={props.title}
					description={props.description}
					index={props.index}
				/>
				<div>{props.children}</div>
			</article>
		);
	}

	return (
		<article className="grid md:grid-cols-2">
			<div>{props.children}</div>
			<Content
				title={props.title}
				description={props.description}
				index={props.index}
			/>
		</article>
	);
};
