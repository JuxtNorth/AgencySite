import { FC } from 'react';
import { Avatar } from '@/components/ui';
import Sparkles from '@/assets/scribbles/sparkles.svg';
import WavyArrow from '@/assets/scribbles/wavy-arrow-up.svg';
import { clients } from '@/constants';

const Impact: FC = () => {
	return (
		<section className="z-10 mx-auto mt-16 w-full max-w-[76rem] rounded-3xl bg-surface py-loose md:pb-16 md:pt-12">
			<h2 className="text-center text-4xl font-semibold md:text-5xl">
				Our Impact
			</h2>
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
		<section className="z-20 mx-auto flex max-w-[76rem] flex-col items-center p-snug md:p-loose">
			<section className="w-full rounded-3xl bg-surface p-snug py-loose text-center lg:flex lg:justify-between lg:p-loose lg:text-left xl:p-relaxed">
				<div className="lg:flex lg:flex-col lg:justify-between">
					<div>
						<h1 className="gsap-header text-4xl font-semibold leading-none lg:text-7xl">
							Our <br className="hidden lg:inline" />
							Clients
						</h1>
						<p className="gsap-para text-sm lg:text-lg">
							Lorem Ipsum Doler Imet Constrctuer
						</p>
					</div>
					<img
						className="mx-auto mb-loose mt-loose size-24 invert md:mb-0 lg:size-44"
						src={Sparkles}
						alt="An image of three sparkles"
					/>
				</div>
				<div>
					<div className="mx-auto grid w-fit grid-flow-row grid-cols-2 gap-loose px-loose pb-loose lg:grid-cols-3">
						{clients.map((props, i) => (
							<Avatar
								profileUrl={`https://ik.imagekit.io/Hireachmedia/Clients/tr:w-400,pr-true/${i + 1}.jpg`}
								{...props}
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
