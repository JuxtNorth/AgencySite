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
		<section className="space-y-snug p-snug text-sm md:space-y-snug md:p-[46px] md:text-[1.1rem] md:leading-7 lg:px-[12vw]">
			<h1 className="mb-snug text-center text-4xl font-extrabold text-blood-red md:text-[clamp(2.5rem,10vw,6rem)] lg:mb-relaxed">
				Outcome
			</h1>
			<p>{props.contentBlock1}</p>
			<ul className="space-y-3 pl-2">
				{props.list.map((content, index) => (
					<li key={index}>
						<StarIcon className="mb-1 mr-2 inline overflow-visible text-blood-red" />
						{content}
					</li>
				))}
			</ul>
			<p className="!mb-28">{props.contentBlock2}</p>
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
