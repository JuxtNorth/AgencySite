import { ArrowIcon } from '@/icons';
import { FC, ReactNode } from 'react';

export interface ServiceCardProps {
	children?: ReactNode; // Icon
	serialNo: string;
	title: string;
	description: string;
}

const jumpToPricingSection = () => {
	setTimeout(() => {
		const elem = document.getElementById('pricing');
		if (elem) {
			elem.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}, 200);
};

export const ServiceCard: FC<ServiceCardProps> = (props) => {
	return (
		<article className="flex flex-col justify-between space-y-snug border-b border-[#555] py-6 text-left lg:aspect-square">
			<span className="font-display text-lg">{props.serialNo}</span>
			<div className="flex items-center gap-snug text-2xl">
				{props.children}
				<h1>{props.title}</h1>
			</div>
			<p className="text-sm font-semibold leading-7 text-[#aaa]">
				{props.description}
			</p>
			<button className="text-display w-fit rounded-full bg-primary px-4 py-2 text-xs font-semibold !mt-6 !mb-6">
				Learn more <ArrowIcon className="inline -rotate-45 scale-75" />
			</button>
		</article>
	);
};
