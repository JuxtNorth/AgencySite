import { FC } from 'react';
import { Avatar } from '@/components/ui';

// Change grid classes if the number of avatars are changed.

export const Clients: FC = () => {
	return (
		<section className="flex flex-col items-center p-snug md:p-loose">
			<div className="space-y-tight pb-12 text-center">
				<h1 className="font-semibold">Our Clients</h1>
				<p className="leading-tight">
					Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
				</p>
			</div>
			<section className="grid grid-cols-2 grid-rows-3 gap-loose md:grid-cols-3 md:grid-rows-2 md:gap-14">
				<Avatar info="1.2m" />
				<Avatar info="1.8m" />
				<Avatar info="1.3m" />
				<Avatar info="800k" />
				<Avatar info="200k" />
				<Avatar info="1m" />
			</section>
			<section className="mt-16 w-full max-w-[100rem] rounded-3xl bg-green-100 py-loose md:pb-16 md:pt-12 ">
				<h1 className="rounded-2xl text-center text-4xl font-bold md:text-5xl">
					Our Impact
				</h1>
				<div className="mt-loose space-y-loose md:flex md:items-center md:gap-36 md:space-y-0">
					<div className="mx-auto text-center">
						<h2 className="text-4xl font-bold text-[#343247] md:text-5xl">
							78,00,000+
						</h2>
						<p>Organic Views</p>
					</div>
					<div className="mx-auto text-center">
						<h2 className="text-4xl font-bold text-[#343247] md:text-5xl">
							12,00,000+
						</h2>
						<p>Gained Followers</p>
					</div>
				</div>
			</section>
		</section>
	);
};
