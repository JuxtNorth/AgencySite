import { FC, useEffect, useRef } from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/constants';
import {
	RankingIcon,
	ContentIcon,
	TrendIcon,
	SalesIcon,
	CustomisationIcon,
	LeadIcon
} from '@/icons';

const icons = [
	<RankingIcon className="text-2xl text-accent md:text-3xl" />,
	<ContentIcon className="text-2xl text-accent md:text-3xl" />,
	<TrendIcon className="text-2xl text-accent md:text-3xl" />,
	<SalesIcon className="text-2xl text-accent md:text-3xl" />,
	<CustomisationIcon className="text-2xl text-accent md:text-3xl" />,
	<LeadIcon className="text-2xl text-accent md:text-3xl" />
];

export const Services: FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const hintRef = useRef<HTMLDivElement>(null);
	const hintWrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const { current: section } = sectionRef;

		const onMouseOver = () => {
			hintWrapperRef.current!.style.display = 'block';
			hintRef.current!.animate(
				{
					transform: 'scale(1)',
					opacity: 1
				},
				{ duration: 400, fill: 'forwards' }
			);
		};

		const onMouseLeave = () => {
			const animation = hintRef.current!.animate(
				{
					transform: 'scale(0.4)',
					opacity: 0
				},
				{ duration: 400, fill: 'forwards' }
			);
			animation.addEventListener('finish', () => {
				hintWrapperRef.current!.style.display = 'hidden';
			});
		};

		const onMouseMove = (event: MouseEvent) => {
			hintWrapperRef.current!.animate(
				{
					left: `${event.clientX}px`,
					top: `${event.clientY}px`
				},
				{
					fill: 'forwards',
					duration: 3000,
					easing: 'cubic-bezier(.33,1.32,.58,1.41)'
				}
			);
		};

		window.addEventListener('mousemove', onMouseMove);

		section!.addEventListener('mouseover', onMouseOver);
		section!.addEventListener('mouseleave', onMouseLeave);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			section!.removeEventListener('mouseover', onMouseOver);
			section!.removeEventListener('mouseout', onMouseLeave);
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="mx-auto max-w-[80rem] p-snug text-center md:p-loose"
		>
			<div
				className="fixed left-[50%] top-[50%] z-40 hidden size-32 -translate-x-full -translate-y-full"
				ref={hintWrapperRef}
			>
				<div
					ref={hintRef}
					className="size-full rounded-full bg-primary opacity-0 box-border p-6 flex justify-center items-center font-display font-semibold"
				>Don't click</div> 
			</div>
			<div className="rounded-3xl">
				<h2 className="mb-12 mt-snug font-semibold">Our Services</h2>
				<section>
					{services.map((props, i) => (
						<ServiceCard key={i} serialNo={`0${i + 1}`} {...props}>
							{icons[i]}
						</ServiceCard>
					))}
				</section>
			</div>
		</section>
	);
};
