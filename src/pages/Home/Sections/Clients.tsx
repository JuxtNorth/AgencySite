import { FC } from 'react';
import { Avatar } from '@/components/ui';
import Sparkles from '@/assets/scribbles/sparkles.svg';
import WavyArrow from '@/assets/scribbles/wavy-arrow-up.svg';

const Impact: FC = () => {
	return (
		<section className="mt-16 w-full max-w-[100rem] rounded-3xl bg-green-100 py-loose md:pb-16 md:pt-12 mx-auto">
			<h2 className="rounded-2xl text-center font-semibold">Our Impact</h2>
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
	);
};

// Change grid classes if the number of avatars are changed.

export const Clients: FC = () => {
	return (
		<section className="flex max-w-[100rem] flex-col mx-auto items-center p-snug md:p-loose">
			<section className="w-full rounded-2xl bg-lime-100 p-snug py-loose text-center lg:flex lg:justify-between lg:p-loose lg:text-left xl:p-relaxed">
				<div className="lg:flex lg:flex-col lg:justify-between">
					<div>
						<h1 className="font-extrabold leading-none">
							Our <br />
							Clients
						</h1>
						<p className="text-sm lg:text-lg">
							Lorem Ipsum Doler Imet Constrctuer
						</p>
					</div>
					<img
						className="mx-auto mt-loose h-24 w-24 lg:h-44 lg:w-44"
						src={Sparkles}
						alt="An image of three sparkles"
					/>
				</div>
				<div>
					<div className="mx-auto grid w-fit grid-cols-3 grid-rows-2 gap-4 p-loose">
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
						<Avatar />
					</div>
					<img
						className="mx-auto h-24 w-24 lg:h-36 lg:w-36"
						src={WavyArrow}
						alt="An image of three sparkles"
					/>
				</div>
			</section>
			<Impact />
		</section>
	);
};
