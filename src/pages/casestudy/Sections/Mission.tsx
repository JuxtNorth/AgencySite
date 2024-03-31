import { FC } from 'react';

export interface MissionProps {
	contentBlock1: string;
	contentBlock2: string;
	list: string[];
	picture: {
		src: string;
		alt: string;
	};
}

export const Mission: FC<MissionProps> = (props) => {
	return (
		<section className="space-y-snug rounded-2xl bg-purple-300 p-loose md:rounded-3xl md:p-relaxed lg:grid lg:grid-cols-[64%_36%]">
			<article className="space-y-snug md:my-loose lg:pr-loose">
				<h2 className="mb-snug font-bold leading-tight">
					Mission &<br className="md:hidden" /> Challenge
				</h2>
				<p>{props.contentBlock1}</p>
				<ul className="list-disc space-y-2 pl-snug">
					{props.list.map((item) => (
						<li className="ml-2">
							<p>{item}</p>
						</li>
					))}
				</ul>
				<p>{props.contentBlock2}</p>
			</article>
			<img
				src={props.picture.src}
				alt={props.picture.alt}
				width={720}
				className="mx-auto h-[24rem] md:h-[36rem] lg:h-[42rem] w-full max-w-[28rem] rounded-2xl object-cover md:rounded-3xl"
			/>
		</section>
	);
};
