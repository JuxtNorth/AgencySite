import { FC } from 'react';

export interface MissionProps {
	contentBlock1: string;
	contentBlock2: string;
	list: string[];
}

export const Mission: FC<MissionProps> = (props) => {
	return (
		<section className="space-y-snug rounded-2xl bg-purple-300 p-loose md:p-relaxed md:rounded-3xl lg:grid lg:grid-cols-[64%_36%] lg:gap-snug">
			<article className='space-y-snug'>
				<h2 className="mb-snug font-bold leading-tight">
					Mission &<br className="md:hidden" /> Challenge
				</h2>
				<p>{props.contentBlock1}</p>
				<ul className="list-disc space-y-2 pl-snug">
					{props.list.map((item) => (
						<li>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<p>{props.contentBlock2}</p>
			</article>
			<img
				src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/tr:w-720,pr-true/profile.jpg"
				alt="An Image"
				width={720}
				className="w-full rounded-2xl md:rounded-3xl object-cover"
			/>
		</section>
	);
};
