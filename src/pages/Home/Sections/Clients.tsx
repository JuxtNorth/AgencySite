import { FC } from 'react';
import { Avatar } from '@/components/ui';
import Sparkles from '@/assets/scribbles/sparkles.svg';
import { clients } from '@/content';

export const Clients: FC = () => {
	return (
		<section className="z-20 mx-auto flex max-w-[76rem] flex-col items-center p-snug md:p-loose">
			<section className="w-full rounded-3xl p-snug py-loose text-center lg:flex lg:justify-between lg:p-loose lg:text-left xl:p-relaxed">
				<div className="lg:flex lg:flex-col lg:justify-between">
					<div className="_anime_stagger_observe">
						<h1 className="text-4xl font-semibold leading-none text-blood-red opacity-0 lg:text-7xl">
							Our <br className="hidden lg:inline" />
							Clients
						</h1>
						<p className="text-sm font-semibold text-muted lg:text-lg">
							Lorem Ipsum Doler Imet Constrctuer
						</p>
					</div>
					<img
						className="mx-auto mb-loose mt-snug size-24 md:mb-0 lg:size-44"
						src={Sparkles}
						alt="An image of three sparkles"
					/>
				</div>
				<div>
					<div className="mx-auto grid w-fit grid-flow-row grid-cols-2 gap-x-[2.4rem] gap-y-loose px-loose pb-loose lg:grid-cols-3">
						{clients.map((props, i) => (
							<Avatar
								variant="bordered"
								profileUrl={`https://ik.imagekit.io/Hireachmedia/Clients/tr:w-400,pr-true/${i + 1}.jpg`}
								className="_anime_generic opacity-0"
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
