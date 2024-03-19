import { FC } from 'react';
import { ServiceCard } from '@/components';

export const Services: FC = () => {
	return (
		<section className="p-8 text-center">
			<h1 className="mb-12 text-5xl font-medium md:text-7xl">
				Our <span className="text-rose-500">Services</span>
			</h1>
			<section className="grid grid-rows-9 gap-4 md:grid-cols-3 md:grid-rows-3">
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</section>
		</section>
	);
};
