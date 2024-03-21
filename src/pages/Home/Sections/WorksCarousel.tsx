import { FC } from 'react';
import { Carousel } from '@/components';

export const WorksCarousel: FC = () => {
	return (
		<section className="mt-12 text-center">
			<div>
				<h1 className="text-7xl font-bold text-slate-700">Our Work</h1>
				<p className="text-lg">Making your vision a reality</p>
			</div>
			<Carousel />
		</section>
	);
};
