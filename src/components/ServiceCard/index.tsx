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
			<article className="relative flex flex-col items-start gap-snug rounded-2xl p-snug after:absolute after:bottom-0 after:right-0 after:h-px after:w-full after:bg-slate-700 after:content-[''] md:static md:flex-row md:bg-surface md:p-loose">
				<div className="pt-2">{props.children}</div>
				<div className="flex h-full flex-col items-start justify-between text-left">
					<div>
						<h1 className="mb-snug mt-1 text-2xl font-semibold md:text-4xl">
							{props.title}
						</h1>
						<p className="pb-4 text-sm font-semibold leading-7 text-[#aaa]">
							{props.description}
						</p>
					</div>
					<button
						onClick={onClick}
						className="text-display mb-8 mt-auto flex items-center gap-2 rounded-full bg-primary-varient px-4 py-2 text-xs font-semibold md:bg-transparent md:p-0 md:text-base"
					>
						Learn more
						<ArrowIcon className="md:hidden" />
					</button>
				</div>
			</article>
		</>
	);
};
