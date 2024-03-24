import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-loose min-h-[86vh] space-y-4 overflow-hidden overflow-visible text-center">
			<h1 className="text-5xl font-semibold">Client Reviews</h1>
			<Carousel buttonXPosition="center">
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</Carousel>
		</section>
	);
};
