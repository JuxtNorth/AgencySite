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
		<article className="bg-surface p-loose flex gap-snug items-start rounded-2xl">
			<div className="text-2xl pt-2">
				{props.children}
			</div>
			<div className='text-left'>
				<p className="text-sm font-semibold leading-7 text-[#aaa] pb-4">
					{props.description}
				</p>
				<button className="text-display text-base font-semibold text-white">
					Learn more
				</button>
			</div>
		</article>
	);
};
