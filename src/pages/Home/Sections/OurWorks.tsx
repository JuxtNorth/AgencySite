import { FC, useEffect, useRef, useState } from 'react';
import { Carousel, Slide, Video } from '@/components';
import ClassNames from 'embla-carousel-class-names';
import AutoPlay from 'embla-carousel-autoplay';
import { EyeIcon } from '@/icons';
import { observeClassMutations } from '@/lib/observeClassMutations';
import { works } from '@/content';

interface VideoSlideProps {
	index: number;
	snappedIndex: number;
}

const VideoSlide: FC<VideoSlideProps> = ({ index, snappedIndex }) => {
	return (
		<Slide variant="vertical" className="overflow-hidden">
			<Video
				className="aspect-[3/4] h-full w-full rounded-sm object-cover blur-[4px] transition-[filter] duration-300"
				poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${index}.jpg`}
				src={`https://ik.imagekit.io/Hireachmedia/OurWork/${index}.mp4`}
				controls={index === snappedIndex}
				shouldPause={index !== snappedIndex}
				loop
				playsInline
				muted
			/>
		</Slide>
	);
};

export const OurWorks: FC = () => {
	const slideRefs = useRef<HTMLDivElement[]>([]);
	const [snappedIndex, setSnappedIndex] = useState(0);

	useEffect(() => {
		const observers: MutationObserver[] = [];

		if (slideRefs.current.length > 0) {
			slideRefs.current.forEach((slide, i) => {
				const observer = observeClassMutations(
					slide,
					'is-snapped',
					(exists) => {
						if (exists) setSnappedIndex(i);
					}
				);
				observers.push(observer);
			});
		}

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [slideRefs]);

	return (
		<section className="mx-auto mt-12 max-w-[125rem] overflow-hidden text-center">
			<div className="mb-loose xl:mb-16">
				<h1
					className="text-4xl font-semibold text-blood-red md:text-5xl"
					id="works"
				>
					Our Work
				</h1>
				<p className="text-sm md:text-base">Making your vision a reality</p>
			</div>
			<Carousel
				buttonXPosition="either"
				buttonYPosition="middle"
				className="gap-snug 2xl:gap-loose"
				plugins={[ClassNames(), AutoPlay({ duration: 1200 })]}
			>
				{works.map((_, i) => (
					<div
						key={i}
						ref={(elem) => (slideRefs.current[i] = elem!)}
						className="last:mr-snug 2xl:last:mr-loose"
					>
						<VideoSlide
							index={(i % 8) + 1}
							snappedIndex={(snappedIndex % 8) + 1}
						/>
						<div className="_stat_ mt-2 flex justify-between rounded-full py-1 text-blood-red opacity-0 duration-300">
							<p className="rounded-lg bg-surface px-2 py-1 text-sm font-bold">
								Lorem Ipsum
							</p>
							<p className="rounded-lg bg-surface px-2 py-1 font-display text-sm font-bold">
								<EyeIcon className="mb-[2px] inline text-white" /> 10M+
							</p>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};
