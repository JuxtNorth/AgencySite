import { useMediaQuery } from '@/hooks';
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
		<article className="lg:space-y-loose">
			<h3 className="mb-4 text-[1.6rem] md:text-[1.8rem] lg:text-[2.4rem] leading-[1.4] font-semibold">
				{props.index}. {props.title}
			</h3>
			<p className="leading-6 xl:leading-[2rem] text-sm lg:text-base">{props.description}</p>
		</article>
	);
};

export const HowItWorksCard: FC<HowItWorksCardProps> = (props) => {
	const { match: isDesktop } = useMediaQuery();

	if (props.alternate && isDesktop) {
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
