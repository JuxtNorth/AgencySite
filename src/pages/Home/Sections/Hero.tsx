import { FC } from 'react';
import Arrow from '@/assets/scribbles/arrow.svg';
import Star from '@/assets/scribbles/star.svg';
import Planet from '@/assets/scribbles/planet.svg';

export const Hero: FC = () => {
	return (
		<header className="min-h-[calc(100vh-4rem)] p-4 pt-1 md:min-h-fit">
			<div className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-between rounded-3xl bg-[#FFFEDA] py-24">
				<img className="absolute right-[5%] top-[3%]" src={Planet} />
				<div className="my-auto">
					<div className="text-center text-[2.5rem] font-semibold leading-tight">
						<h1>Forging</h1>
						<h1 className="mx-auto w-fit rounded-2xl bg-[#D7C6FF] px-4 font-display font-bold">
							Personal Brand
						</h1>
						<h1>for Social Virality</h1>
					</div>
					<div className="relative">
						<img className="absolute top-[42%] scale-75" src={Arrow} />
						<p className="mx-auto mt-0.5 w-[72%] text-center text-sm">
							Subscription here makes your brands go viral there, grab your
							seats.
						</p>
					</div>
				</div>
				<div className="relative mx-auto mt-24 flex w-[60%] flex-col gap-4">
					<button className="rounded-full bg-[#D7C6FF] px-7 py-5 font-display text-[1.3rem] font-semibold">
						See Pricing
					</button>
					<button className="rounded-full bg-[#B8D7FF] px-7 py-5 font-display text-[1.3rem] font-semibold">
						Book a Call
					</button>
					<img
						className="absolute left-full top-[40%] scale-[0.64]"
						src={Star}
					/>
				</div>
			</div>
		</header>
	);
};
