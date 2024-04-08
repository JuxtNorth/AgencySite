import { ArrowIcon } from '@/icons';
import { FC, ReactNode } from 'react';

export interface ServiceCardProps {
	children?: ReactNode; // Icon
	serialNo: string;
	title: string;
	description: string;
}


// const jumpToPricingSection = () => {
// 	setTimeout(() => {
// 		const elem = document.getElementById('pricing');
// 		if (elem) {
// 			elem.scrollIntoView({
// 				behavior: 'smooth'
// 			});
// 		}
// 	}, 200);
// };

export const ServiceCard: FC<ServiceCardProps> = (props) => {
	return (
		<article className="flex flex-col md:grid md:grid-cols-[auto_30%_45%] md:items-center justify-between space-y-snug md:space-y-0 py-6 md:py-12 relative after:contents after:w-full after:bg-[#555] after:h-px after:bottom-0 after:absolute text-left">
			<span className="font-display text-lg">{props.serialNo}</span>
			<div className="flex items-center gap-snug text-2xl md:w-full">
				{props.children}
				<h1>{props.title}</h1>
			</div>
			<p className="text-sm font-semibold leading-7 text-[#aaa]">
				{props.description}
			</p>
			<button className="text-display md:hidden !mb-6 !mt-6 w-fit rounded-full bg-primary px-4 py-2 text-xs font-semibold">
				Learn more <ArrowIcon className="inline -rotate-45 scale-75" />
			</button>
		</article>
	);
};
