import { FC } from 'react';
import { Avatar } from '@/components/ui';

// Change grid classes if the number of avatars are changed.

export const Clients: FC = () => {
	return (
		<section className="flex flex-col items-center py-8">
			<div className="w-72 space-y-4 pb-12 text-center md:w-[32rem]">
				<h1 className="text-5xl font-medium md:text-7xl">Our Clients</h1>
				<p className="text-md leading-tight md:text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<section className="grid grid-cols-2 grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-2">
				<Avatar info="1.2m" />
				<Avatar info="1.8m" />
				<Avatar info="1.3m" />
				<Avatar info="800k" />
				<Avatar info="200k" />
				<Avatar info="1m" />
			</section>
		</section>
	);
};
