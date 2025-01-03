import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';
import { testimonials } from '@/content';
import AutoPlay from 'embla-carousel-autoplay';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-12 min-h-[86vh] space-y-4 overflow-hidden text-center lg:min-h-fit">
			<h1
				id="testimonials"
				className="text-4xl font-semibold text-blood-red md:text-5xl"
			>
				Client Reviews
			</h1>
			<Carousel
				buttonStyle="mono"
				buttonXPosition="center"
				plugins={[AutoPlay({ duration: 1200, stopOnInteraction: true })]}
			>
				{testimonials.map((props, index) => (
					<TestimonialCard {...props} index={index + 1} />
				))}
			</Carousel>
		</section>
	);
};
