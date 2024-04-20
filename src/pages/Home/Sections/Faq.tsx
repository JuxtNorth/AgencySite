import { FC } from 'react';
import { FAQAccordion } from '@/components';
import { FAQs } from '@/content';
import Discover from '@/assets/scribbles/Discover.svg';

export const Faq: FC = () => {
	return (
		<section className="mx-auto mt-24 max-w-[100rem] space-y-4 md:mt-12 md:grid md:grid-cols-[70%_30%] md:p-loose">
			<section className="px-loose md:px-0 md:pr-loose">
				<div className="mb-loose md:mt-snug">
					<h1 className="text-center text-4xl font-semibold md:text-left md:text-6xl" id="questions">
						Frequently Asked
						<br />
						Questions
					</h1>
				</div>
				<div className="_anime_stagger_observe space-y-tight">
					{FAQs.map((props, i) => (
						<FAQAccordion className="opacity-0" {...props} key={i} />
					))}
				</div>
			</section>
			<section className="px-loose pb-loose md:px-0 md:pb-0">
				<div className="rounded-2xl bg-surface-new p-6">
					<h1 className="mb-2 text-4xl font-semibold">Have more questions?</h1>
					<p className="text-lg leading-tight">
						Schedule a 15 minute call to have all your questions addressed.
					</p>
					<img
						className="mx-auto invert"
						src={Discover}
						alt="Person looking through a telescope"
					/>
					<a
						href="#"
						className="flex w-full items-center justify-center rounded-full bg-blood-red py-snug font-display text-[1.3rem] font-semibold"
					>
						Book a Call
					</a>
				</div>
			</section>
		</section>
	);
};
