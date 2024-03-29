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
				buttonXPosition="either"
				buttonYPosition="middle"
				className="gap-snug 2xl:gap-loose"
				plugins={[ClassNames()]}
			>
				{new Array(24).fill(0).map((_, i) => (
					<div className="last:mr-snug 2xl:last:mr-loose">
						<Slide key={i} variant="vertical" className="overflow-hidden">
							<Video
								className="w-full rounded-2xl object-cover blur-[4px] transition-[filter] duration-300 lg:rounded-3xl"
								poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${(i % 8) + 1}.jpg`}
							/>
						</Slide>
						<div className="_stat_ flex justify-between py-1 px-2 opacity-0 duration-300 bg-rose-500 rounded-full mt-2">
							<p className="text-xs font-semibold text-white">
								Lorem, ipsum.
							</p>
							<p className="text-xs font-semibold text-white">
								10M+
							</p>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};
