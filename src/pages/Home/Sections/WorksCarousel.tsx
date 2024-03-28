import { FC } from 'react';
import { Carousel, Slide, Video } from '@/components';
import ClassNames from 'embla-carousel-class-names';

export const WorksCarousel: FC = () => {
	return (
		<section className="mt-12 overflow-hidden text-center">
			<div className="mb-loose xl:mb-16">
				<h2 className="font-semibold">Our Work</h2>
				<p>Making your vision a reality</p>
			</div>
			<Carousel
				buttonXPosition="center"
				className="gap-loose"
				plugins={[ClassNames()]}
			>
				{new Array(8).fill(0).map((_, i) => (
					<Slide key={i} variant="vertical" className="overflow-hidden last:mr-loose">
						<Video
							className="h-full rounded-2xl object-cover blur-sm transition-[filter] duration-300 lg:rounded-3xl"
							poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${(i % 8) + 1}.jpg`}
						/>
					</Slide>
				))}
			</Carousel>
		</section>
	);
};
