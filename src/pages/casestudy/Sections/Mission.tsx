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
		<section className="space-y-snug rounded-2xl bg-surface p-loose md:rounded-3xl md:p-relaxed lg:grid lg:grid-cols-[64%_36%]">
			<article className="mb-loose space-y-snug text-base text-[#ddd] md:space-y-loose md:text-lg lg:mb-0 lg:pr-12">
				<h1 className="text-4xl font-bold text-blood-red md:text-5xl">
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
