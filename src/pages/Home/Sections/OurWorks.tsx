import { FC } from 'react';
import { Carousel, Slide, Video } from '@/components';
import ClassNames from 'embla-carousel-class-names';
import AutoPlay from 'embla-carousel-autoplay';
import { EyeIcon } from '@/icons';

export const Works: FC = () => {
	return (
		<section className="mx-auto mt-12 max-w-[125rem] overflow-hidden text-center">
			<div className="mb-loose xl:mb-16">
				<h2 className="text-4xl font-semibold md:text-5xl">Our Work</h2>
				<p className="text-sm md:text-base">Making your vision a reality</p>
			</div>
			<Carousel
				buttonXPosition="either"
				buttonYPosition="middle"
				className="gap-snug 2xl:gap-loose"
				plugins={[ClassNames(), AutoPlay({ duration: 1200 })]}
			>
				{new Array(12).fill(0).map((_, i) => (
					<div key={i} className="last:mr-snug 2xl:last:mr-loose">
						<Slide variant="vertical" className="overflow-hidden">
							<Video
								className="w-full rounded-2xl object-cover blur-[4px] transition-[filter] duration-300 lg:rounded-3xl"
								poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${(i % 8) + 1}.jpg`}
							/>
						</Slide>
						<div className="_stat_ mt-2 flex justify-between rounded-full py-1 opacity-0 duration-300">
							<p className="rounded-lg px-2 py-1 text-xs font-semibold">
								Lorem Ipsum
							</p>
							<p className="rounded-lg px-2 py-1 text-xs font-semibold">
								<EyeIcon className="inline" /> 10M+
							</p>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};