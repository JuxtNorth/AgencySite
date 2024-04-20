import { StarIcon } from '@/icons';
import { FC } from 'react';

export interface OutcomeProps {
	contentBlock1: string;
	list: string[];
	contentBlock2: string;
	images: Array<{ src: string; alt: string }>;
}

export const Outcome: FC<OutcomeProps> = (props) => {
	return (
		<section className="space-y-snug text-lg md:space-y-loose">
			<h1 className="text-4xl font-semibold text-blood-red md:text-5xl">
				Outcome
			</h1>
			<p>{props.contentBlock1}</p>
			<ul className="space-y-3 pl-2">
				{props.list.map((content, index) => (
					<li key={index}>
						<StarIcon className="mb-1 mr-2 inline text-blood-red" />
						{content}
					</li>
				))}
			</ul>
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
