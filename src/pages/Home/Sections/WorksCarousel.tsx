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
				className="gap-snug"
				plugins={[ClassNames()]}
			>
				{new Array(8).fill(0).map((_, i) => (
					<div className="last:mr-snug">
						<Slide key={i} variant="vertical" className="overflow-hidden">
							<Video
								className="w-full rounded-2xl object-cover blur-[2px] transition-[filter] duration-300 lg:rounded-3xl"
								poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${(i % 8) + 1}.jpg`}
							/>
						</Slide>
						<div className="flex justify-between p-1">
							<p className="text-xs text-muted">Lorem, ipsum.</p>
							<p className="text-xs text-muted">10M+</p>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};
