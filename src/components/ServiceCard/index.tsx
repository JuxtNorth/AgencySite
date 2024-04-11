import { FC, ReactNode, useState } from 'react';
import { Dialog, type DialogProps } from './Dialog';
import { ArrowIcon } from '@/icons';

export interface ServiceCardProps {
	children?: ReactNode; // Icon
	serialNo: string;
	title: string;
	description: string;
	dialog: Omit<DialogProps, 'title' | 'isOpen' | 'onClose'>;
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
	const [dialogOpen, setDialogOpen] = useState(false);

	const onClick = () => {
		setDialogOpen(true);
	};

	return (
		<>
			<Dialog
				isOpen={dialogOpen}
				title={props.title}
				{...props.dialog}
				onClose={() => setDialogOpen(false)}
			/>
			<article className="relative md:static flex items-start flex-col md:flex-row gap-snug rounded-2xl md:bg-surface p-snug md:p-loose after:content-[''] after:w-full after:absolute after:h-px after:bg-slate-700 after:bottom-0 after:right-0">
				<div className="pt-2">{props.children}</div>
				<div className="flex h-full flex-col items-start justify-between text-left">
					<div>
						<h1 className="mb-snug mt-1 text-2xl md:text-4xl font-semibold">
							{props.title}
						</h1>
						<p className="pb-4 text-sm font-semibold leading-7 text-[#aaa]">
							{props.description}
						</p>
					</div>
					<button
						onClick={onClick}
						className="text-display mt-auto md:text-base font-semibold md:bg-transparent bg-primary-varient px-4 py-2 md:p-0 rounded-full text-xs flex items-center gap-2 mb-8"
					>
						Learn more
						<ArrowIcon className='md:hidden'/>
					</button>
				</div>
			</article>
		</>
	);
};
