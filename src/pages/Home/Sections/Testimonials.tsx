import { FC } from 'react';
import { Testimonial } from '@/components';

export const Testimonials: FC = () => {
	return (
		<section className="relative space-y-4 overflow-hidden">
			<h1 className="my-8 text-center text-4xl font-bold text-gray-800 md:my-12 md:text-7xl">
				Snippets of{' '}
				<span className="font-black text-rose-600">Satisfaction</span>
			</h1>
			<section className="scrollbar-hidden flex h-fit gap-8 overflow-x-auto p-8">
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</section>
			<section className="scrollbar-hidden flex h-fit gap-8 overflow-x-auto p-8">
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</section>
		</section>
	);
};
