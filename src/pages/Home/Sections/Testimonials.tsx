import { FC } from 'react';
import { Carousel, TestimonialCard } from '@/components';

export const Testimonials: FC = () => {
	return (
		<section className="relative mt-loose min-h-[86vh] space-y-4 overflow-hidden overflow-visible text-center">
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
