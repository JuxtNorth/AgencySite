import { FC } from 'react';
import { Carousel } from '@/components';
import AutoPlay from 'embla-carousel-autoplay';

export const WorksCarousel: FC = () => {
	return (
		<section className="mt-12 text-center">
			<div className="xl:mb-12">
				<h2 className="font-semibold">Our Work</h2>
				<p>Making your vision a reality</p>
			</div>
			<Carousel buttonXPosition='center' plugins={[AutoPlay({ duration: 1400 })]} />
		</section>
	);
};
