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
		<section className="space-y-snug rounded-2xl bg-surface-new p-loose md:rounded-3xl md:p-relaxed lg:grid lg:grid-cols-[64%_36%]">
			<article className="space-y-snug md:space-y-loose lg:pr-12">
				<h1 className="text-4xl font-semibold md:text-5xl text-blood-red">
					Mission &<br className="md:hidden" /> Challenge
				</h1>
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
				className="mx-auto h-[24rem] w-full max-w-[28rem] rounded-2xl object-cover md:h-[36rem] md:rounded-3xl lg:h-[42rem]"
			/>
		</section>
	);
};
