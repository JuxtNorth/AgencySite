import { FC, useState } from 'react';
import { Testimonial, ClientAvatar } from '@/components';

const clients = new Array(5).fill(0);

export const Testimonials: FC = () => {
	const [expandedIndex, setExpandedIndex] = useState(2);

	return (
		<section className="relative space-y-4 overflow-hidden">
			<h1 className="my-8 text-center text-4xl font-bold text-gray-800 md:my-12 md:text-7xl">
				Client Reviews
			</h1>
			<section className="grid place-items-center">
				<Testimonial />
			</section>
			<div className="flex items-center justify-center gap-2 py-4">
				{clients.map((_, i) => (
					<ClientAvatar
						key={i}
						isExpanded={expandedIndex === i}
						onClick={() => setExpandedIndex(i)}
					/>
				))}
			</div>
		</section>
	);
};
