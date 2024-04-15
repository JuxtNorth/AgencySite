import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';
import { testimonials } from '@/constants';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-12 min-h-[86vh] space-y-4 overflow-hidden text-center lg:min-h-fit">
			<h2 className="text-4xl font-semibold md:text-5xl">Client Reviews</h2>
			<Carousel buttonXPosition="center">
				{testimonials.map((props, index) => (
					<TestimonialCard {...props} index={index + 1} />
				))}
			</Carousel>
		</section>
	);
};
