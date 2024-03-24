import { FC, useState } from 'react';
import { Testimonial, ClientAvatar } from '@/components';

const clients = new Array(5).fill(0);

export const Testimonials: FC = () => {
	const [expandedIndex, setExpandedIndex] = useState(2);

	return (
		<section className="relative mt-loose space-y-4 overflow-hidden">
			<h1 className="my-8 text-center text-5xl font-semibold md:my-12">
				Client Reviews
			</h1>
			<section className="grid place-items-center">
				<Testimonial />
			</section>
			<div className="flex items-center justify-center gap-2 py-snug">
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
