import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';
import { testimonials } from '@/constants';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-12 min-h-[86vh] space-y-4 overflow-hidden text-center lg:min-h-fit">
			<h1 id="testimonials" className="text-4xl font-semibold md:text-5xl text-blood-red">
				Client Reviews
			</h1>
			<Carousel buttonStyle='mono' buttonXPosition="center">
				{testimonials.map((props, index) => (
					<TestimonialCard {...props} index={index + 1} />
				))}
			</Carousel>
		</section>
	);
};
