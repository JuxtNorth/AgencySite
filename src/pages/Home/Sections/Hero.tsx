import { FC } from 'react';
import Arrow from '@/assets/scribbles/arrow.svg';
import Star from '@/assets/scribbles/star.svg';
import Planet from '@/assets/scribbles/planet.svg';

export const Hero: FC = () => {
	return (
		<header className="p-4 pt-1 md:min-h-fit md:p-12">
			<div className="relative flex min-h-[calc(100vh-7rem)] flex-col justify-between rounded-3xl bg-[#FFFEDA] py-16 md:min-h-fit">
				<img className="absolute right-[5%] top-[3%] h-32 w-32" src={Planet} />
				<div className="my-auto mt-32 md:mt-auto">
					<div className="text-center text-[2.5rem] font-semibold leading-tight md:text-5xl md:leading-snug">
						<h1>Forging</h1>
						<h1 className="mx-auto w-fit rounded-2xl bg-[#D7C6FF] px-4 font-display font-bold md:-mb-1">
							Personal Brand
						</h1>
						<h1>for Social Virality</h1>
					</div>
					<div className="relative mx-auto w-fit">
						<img
							className="absolute -left-[3%] top-[12%] scale-75 md:left-[5%] md:scale-[0.64]"
							src={Arrow}
						/>
						<p className="mx-auto mt-0.5 w-[72%] text-center text-sm md:w-[64%] md:text-lg">
							Subscription here makes your brands go viral there, grab your
							seats.
						</p>
					</div>
				</div>
				<div className="relative mx-auto mt-24 flex w-[60%] flex-col gap-4 md:mt-12 md:w-fit md:flex-row">
					<button className="rounded-full bg-[#D7C6FF] px-7 py-5 font-display text-[1.3rem] font-semibold">
						See Pricing
					</button>
					<button className="rounded-full bg-[#B8D7FF] px-7 py-5 font-display text-[1.3rem] font-semibold">
						Book a Call
					</button>
					<img
						className="absolute left-full top-[40%] scale-[0.64] md:scale-[1.08]"
						src={Star}
					/>
				</div>
			</div>
		</header>
	);
};
