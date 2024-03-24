import { FC } from 'react';
import { Avatar } from '@/components/ui';

// Change grid classes if the number of avatars are changed.

export const Clients: FC = () => {
	return (
		<section className="flex flex-col items-center p-snug md:p-loose">
			<div className="w-72 space-y-4 pb-12 text-center md:w-[32rem]">
				<h1 className="text-5xl font-semibold">Our Clients</h1>
				<p className="text-md leading-tight md:text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>
			<section className="grid grid-cols-2 grid-rows-3 gap-loose md:grid-cols-3 md:grid-rows-2">
				<Avatar info="1.2m" />
				<Avatar info="1.8m" />
				<Avatar info="1.3m" />
				<Avatar info="800k" />
				<Avatar info="200k" />
				<Avatar info="1m" />
			</section>
			<section className="mt-16 w-full rounded-3xl bg-green-100 py-loose md:pb-16 md:pt-12 ">
				<h1 className="rounded-2xl text-center text-5xl font-extrabold">
					Our Impact
				</h1>
				<div className="mt-loose space-y-loose md:flex md:items-center md:gap-36 md:space-y-0">
					<div className="mx-auto space-y-1 text-center">
						<h2 className="text-5xl font-bold text-[#343247]">78,00,000+</h2>
						<p>Organic Views</p>
					</div>
					<div className="mx-auto space-y-1 text-center">
						<h2 className="text-5xl font-bold text-[#343247]">12,00,000+</h2>
						<p>Gained Followers</p>
					</div>
				</div>
			</section>
		</section>
	);
};
