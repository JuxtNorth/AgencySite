import { FC } from 'react';

export interface ResultProps {
	highlights: string[];
	images: Array<{ src: string; alt: string }>;
}

export const Results: FC<ResultProps> = (props) => {
	return (
		<>
			<section className="!mt-12 lg:!mt-32 lg:px-[8vw]">
				<h1 className="mb-snug text-center text-4xl font-extrabold text-blood-red md:text-[clamp(2.5rem,6vw,6rem)] lg:mb-relaxed">
					Results & Impacts
				</h1>
				<div className="grid grid-flow-row grid-cols-1 gap-snug p-snug md:grid-cols-2 lg:grid-cols-3">
					{props.highlights.map((text, index) => (
						<div
							key={index}
							className="flex h-24 items-center justify-center rounded-2xl border border-gray-500 bg-surface"
						>
							<p className="text-[20px] font-semibold text-blood-red">{text}</p>
						</div>
					))}
				</div>
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
