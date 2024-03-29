import { FC } from 'react';
import Arrow from '@/assets/scribbles/arrow.svg';
import Star from '@/assets/scribbles/star.svg';
import Planet from '@/assets/scribbles/planet.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero: FC = () => {
	useGSAP(() => {
		gsap.fromTo(
			'.gsap-hero',
			{ y: 80, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.12, delay: 0.8 }
		);
	});

	return (
		<header className="mx-auto min-h-fit max-w-[100rem] p-snug pt-tight md:p-loose md:pt-0">
			<div className="relative flex min-h-fit flex-col justify-between rounded-3xl bg-[#FFFEDA] py-16">
				<img className="absolute right-[5%] top-[3%] h-32 w-32" src={Planet} />
				<div className="my-auto mt-28 md:mt-auto">
					<div className="text-center font-semibold leading-tight md:space-y-2 md:leading-snug xl:space-y-3">
						<h1 className="gsap-hero">Forging</h1>
						<h1 className="gsap-hero mx-auto w-fit rounded-2xl bg-[#D7C6FF] px-snug font-display font-bold md:-mb-1">
							Personal Brand
						</h1>
						<h1 className="gsap-hero">for Social Virality</h1>
					</div>
					<div className="relative mx-auto w-fit lg:mb-snug 2xl:mb-loose">
						<img
							className="absolute -left-[3%] top-[12%] scale-[0.8] md:left-[5%] md:scale-[0.64]"
							src={Arrow}
						/>
						<p className="gsap-hero mx-auto mt-5 w-[72%] text-center text-[0.9rem] md:w-[64%] md:text-lg">
							Subscription here makes your brands go viral there, grab your
							seats.
						</p>
					</div>
				</div>
				<div className="relative mx-auto mt-20 flex w-[60%] max-w-56 flex-col gap-4 md:mt-12 md:w-fit md:max-w-fit md:flex-row 2xl:mt-0">
					<button className="gsap-hero rounded-full bg-[#D7C6FF] px-6 py-4 font-display text-[1.3rem] font-semibold">
						See Pricing
					</button>
					<button className="gsap-hero rounded-full bg-[#B8D7FF] px-6 py-4 font-display text-[1.3rem] font-semibold">
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
