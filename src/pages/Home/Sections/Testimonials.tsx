import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-12 min-h-[86vh] space-y-4 overflow-hidden text-center lg:min-h-fit">
			<h2 className="font-semibold">Client Reviews</h2>
			<Carousel buttonXPosition="center">
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</Carousel>
		</section>
	);
};
