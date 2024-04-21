import { FC } from 'react';

export interface ResultProps {
	highlights: string[];
	images: Array<{ src: string; alt: string }>;
}

export const Results: FC<ResultProps> = (props) => {
	return (
		<>
			<section className="grid grid-flow-row grid-cols-1 gap-snug p-snug md:grid-cols-2 lg:grid-cols-3">
				{props.highlights.map((text, index) => (
					<div
						key={index}
						className="flex h-24 items-center justify-center rounded-2xl border border-gray-800 bg-surface"
					>
						<p className="text-[20px] font-semibold text-blood-red">{text}</p>
					</div>
				))}
			</section>
			<section className="space-y-snug">
				{props.images.map((props, index) => (
					<img
						className="lg:ronded-3xl mx-auto my-loose aspect-video w-full max-w-[80rem] rounded-2xl object-cover lg:my-relaxed"
						key={index}
						{...props}
					/>
				))}
			</section>
		</>
	);
};
