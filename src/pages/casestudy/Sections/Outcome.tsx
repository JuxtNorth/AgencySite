import { FC } from 'react';

export interface OutcomeProps {
	contentBlock1: string;
	list: string[];
	contentBlock2: string;
	images: Array<{ src: string; alt: string }>;
}

export const Outcome: FC<OutcomeProps> = (props) => {
	return (
		<section>
			<h1 className="mb-snug font-bold">Outcome</h1>
			<p className="mb-snug">{props.contentBlock1}</p>
			<ol className="mb-snug list-decimal space-y-snug pl-snug lg:pl-loose">
				{props.list.map((content, index) => (
					<li key={index}>{content}</li>
				))}
			</ol>
			<p>{props.contentBlock2}</p>
			{props.images.map((props, index) => (
				<img
					className="lg:ronded-3xl mx-auto my-loose aspect-video w-full max-w-[80rem] rounded-2xl object-cover lg:my-relaxed"
					key={index}
					{...props}
				/>
			))}
		</section>
	);
};
