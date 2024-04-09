import { FC } from 'react';
import { Avatar } from '@/components/ui';
import Sparkles from '@/assets/scribbles/sparkles.svg';
import WavyArrow from '@/assets/scribbles/wavy-arrow-up.svg';

const Impact: FC = () => {
	return (
		<section className="mx-auto mt-16 w-full max-w-[100rem] rounded-3xl bg-surface py-loose md:pb-16 md:pt-12 z-10">
			<h2 className="text-4xl font-semibold md:text-5xl text-center">Our Impact</h2>
			<div className="mt-loose space-y-loose md:flex md:items-center md:gap-36 md:space-y-0">
				<div className="mx-auto text-center">
					<h2 className="gsap-header text-4xl font-bold md:text-5xl">
						78,00,000+
					</h2>
					<p className="gsap-para">Organic Views</p>
				</div>
				<div className="mx-auto text-center">
					<h2 className="gsap-header text-4xl font-bold md:text-5xl">
						12,00,000+
					</h2>
					<p className="gsap-para">Gained Followers</p>
				</div>
			</div>
		</section>
	);
};

// Change grid classes if the number of avatars are changed.

export const Clients: FC = () => {
	return (
		<section className="mx-auto flex max-w-[100rem] flex-col items-center p-snug md:p-loose z-20">
			<section className="w-full rounded-2xl bg-surface p-snug py-loose text-center lg:flex lg:justify-between lg:p-loose lg:text-left xl:p-relaxed">
				<div className="lg:flex lg:flex-col lg:justify-between">
					<div>
						<h1 className="gsap-header text-4xl lg:text-7xl font-semibold leading-none">
							Our <br className="hidden lg:inline" />
							Clients
						</h1>
						<p className="gsap-para text-sm lg:text-lg">
							Lorem Ipsum Doler Imet Constrctuer
						</p>
					</div>
					<img
						className="mx-auto mt-loose h-24 w-24 invert lg:h-44 lg:w-44"
						src={Sparkles}
						alt="An image of three sparkles"
					/>
				</div>
				<div>
					<div className="mx-auto grid w-fit grid-flow-row grid-cols-3 gap-4 px-loose pb-loose">
						{new Array(6).fill(0).map((_, i) => (
							<Avatar
								profileUrl={`https://ik.imagekit.io/Hireachmedia/Clients/tr:w-400,pr-true/${i + 1}.jpg`}
								name={i.toString()}
								key={i}
							/>
						))}
					</div>
					<img
						className="mx-auto hidden h-24 w-24 invert lg:block lg:h-36 lg:w-36"
						src={WavyArrow}
						alt="An image a wavy arrow pointing up"
					/>
				</div>
			</section>
			<Impact />
		</section>
	);
};
