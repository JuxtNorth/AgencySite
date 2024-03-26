import { FC } from 'react';
import { Carousel3D, Video } from '@/components';

export const WorksCarousel: FC = () => {
	return (
		<section className="mt-12 overflow-hidden text-center">
			<div className="mb-loose xl:mb-16">
				<h2 className="font-semibold">Our Work</h2>
				<p>Making your vision a reality</p>
			</div>
			<Carousel3D>
				{[...new Array(10)].map(() => (
					<Video
						className="h-[32rem] w-auto rounded-[1rem] object-cover p-[5px] "
						src="https://ik.imagekit.io/Hireachmedia/OurWork/1.mp4"
						poster="https://ik.imagekit.io/Hireachmedia/default-image.jpg?updatedAt=1710837663835"
						autoPlay
						controls
					></Video>
				))}
			</Carousel3D>
		</section>
	);
};
