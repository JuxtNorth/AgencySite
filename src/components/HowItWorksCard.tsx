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
		<div>
			<h1 className="mb-4 text-3xl font-semibold">
				<span className="rounded-full bg-pink-300 px-2 text-2xl">
					{props.index}
				</span>{' '}
				{props.title}
			</h1>
			<p className="leading-tight">{props.description}</p>
		</div>
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
