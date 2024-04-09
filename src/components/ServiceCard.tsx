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
		<article className="flex items-start gap-snug rounded-2xl bg-surface p-loose">
			<div className="pt-2 text-2xl">{props.children}</div>
			<div className="text-left">
				<p className="pb-4 text-sm font-semibold leading-7 text-[#aaa]">
					{props.description}
				</p>
				
				<button className="text-display text-base font-semibold text-white">
					Learn more
				</button>
			</div>
		</article>
	);
};
