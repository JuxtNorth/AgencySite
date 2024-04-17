import { FC } from 'react';
import { Avatar } from '@/components/ui';
import Sparkles from '@/assets/scribbles/sparkles.svg';
import { clients } from '@/constants';

export const Clients: FC = () => {
	
	return (
		<section className="z-20 mx-auto flex max-w-[76rem] flex-col items-center p-snug md:p-loose">
			<section className="w-full rounded-3xl p-snug py-loose text-center lg:flex lg:justify-between lg:p-loose lg:text-left xl:p-relaxed">
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
						className="mx-auto mb-loose mt-snug size-24 invert md:mb-0 lg:size-44"
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
				</div>
			</section>
		</section>
	);
};
