import { FC } from 'react';
import { FAQAccordion } from '@/components';
import { FAQs } from '@/constants';
import Discover from '@/assets/scribbles/Discover.svg';

export const Faq: FC = () => {
	return (
		<section className="space-y-4 md:p-loose md:grid md:grid-cols-[70%_30%]">
			<section className="px-loose md:px-0 md:pr-loose">
				<div className="mb-loose md:mt-snug">
					<h1 className="text-center text-4xl font-semibold md:text-left md:text-6xl">
						Frequently Asked<br />Questions
					</h1>
				</div>
				<div className="space-y-tight">
					{FAQs.map((props, i) => (
						<FAQAccordion {...props} key={i} />
					))}
				</div>
			</section>
			<section className="px-loose pb-loose md:px-0 md:pb-0">
				<div className="rounded-2xl bg-[#FFFEDA] p-6">
					<h1 className="mb-2 text-4xl font-semibold">Have more questions?</h1>
					<p className="text-lg leading-tight">
						Schedule a 15 minute call to have all your questions addressed.
					</p>
					<img className="mx-auto" src={Discover} alt="Person looking through a telescope" />
					<a
						href="#"
						className="block flex w-full items-center justify-center rounded-full bg-[#D7C6FF] py-snug font-display text-[1.3rem] font-semibold"
					>
						Book a Call
					</a>
				</div>
			</section>
		</section>
	);
};
