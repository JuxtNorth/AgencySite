import { FC } from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/constants';

export const Services: FC = () => {
	return (
		<section className="p-8 text-center">
			<h1 className="mb-12 text-5xl font-medium md:text-7xl">
				Our <span className="text-rose-500">Services</span>
			</h1>
			<section className="grid grid-rows-6 gap-4 md:grid-cols-3 md:grid-rows-2">
				{services.map((props, i) => (
					<ServiceCard {...props} key={i} />
				))}
			</section>
		</section>
	);
};
