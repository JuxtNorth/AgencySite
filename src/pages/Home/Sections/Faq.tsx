import { FC, useEffect } from 'react';
import { FAQAccordion } from '@/components';
import { FAQs } from '@/constants';
import Discover from '@/assets/scribbles/Discover.svg';
import { handleAnimation } from '@/hooks';
import anime from 'animejs';

export const Faq: FC = () => {
	useEffect(() => {
		return handleAnimation('._anime_stagger_observe', {}, (event) => {
			const target = event.target as HTMLElement;
			const targets = target.childNodes;
			anime({
				targets,
				translateY: [24, 0],
				opacity: [0, 1],
				duration: 400,
				delay: anime.stagger(60),
				easing: 'easeOutExpo'
			});
		});
	}, []);

	return (
		<section className="mx-auto mt-24 max-w-[100rem] space-y-4 md:mt-12 md:grid md:grid-cols-[70%_30%] md:p-loose">
			<section className="px-loose md:px-0 md:pr-loose">
				<div className="mb-loose md:mt-snug">
					<h1 className="text-center text-4xl font-semibold md:text-left md:text-6xl">
						Frequently Asked
						<br />
						Questions
					</h1>
				</div>
				<div className="space-y-tight _anime_stagger_observe">
					{FAQs.map((props, i) => (
						<FAQAccordion className='opacity-0' {...props} key={i} />
					))}
				</div>
			</section>
			<section className="px-loose pb-loose md:px-0 md:pb-0">
				<div className="rounded-2xl bg-surface p-6">
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
						className="flex w-full items-center justify-center rounded-full bg-primary py-snug font-display text-[1.3rem] font-semibold"
					>
						Book a Call
					</a>
				</div>
			</section>
		</section>
	);
};
