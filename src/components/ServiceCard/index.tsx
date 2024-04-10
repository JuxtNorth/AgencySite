import { FC, ReactNode, useState } from 'react';
import { Dialog, type DialogProps } from './Dialog';

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
			<article className="flex items-start gap-snug rounded-2xl bg-surface p-loose">
				<div className="pt-2 text-2xl">{props.children}</div>
				<div className="flex h-full flex-col items-start justify-between text-left">
					<div>
						<h1 className="mb-snug mt-1 text-4xl font-semibold">
							{props.title}
						</h1>
						<p className="pb-4 text-sm font-semibold leading-7 text-[#aaa]">
							{props.description}
						</p>
					</div>
					<button
						onClick={onClick}
						className="text-display mt-auto text-base font-semibold"
					>
						Learn more
					</button>
				</div>
			</article>
		</>
	);
};
