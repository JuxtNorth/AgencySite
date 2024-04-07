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
			<h3 className="mb-4 text-[1.6rem] font-semibold leading-[1.4] md:text-[1.8rem] lg:text-[2.4rem]">
				{props.index}. {props.title}
			</h3>
			<p className="text-sm leading-6 lg:text-base xl:leading-[2rem]">
				{props.description}
			</p>
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
