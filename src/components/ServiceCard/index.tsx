import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, type DialogProps } from './Dialog';
import { ArrowIcon } from '@/icons';

export interface ServiceCardProps {
	children?: ReactNode; // Icon
	serialNo: string;
	title: string;
	description: string;
	dialog: Omit<DialogProps, 'title' | 'isOpen' | 'onClose'>;
	mousePos: { x: number; y: number };
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
	const cardRef = useRef<HTMLDivElement>(null);
	const [rect, setRect] = useState(new DOMRect());

	const { current: card } = cardRef;

	useEffect(() => {
		if (card) setRect(card.getBoundingClientRect());
	}, [card]);

	const onResize = useCallback(() => {
		if (card) setRect(card.getBoundingClientRect());
	}, [card]);

	const onScroll = useCallback(() => {
		if (card) setRect(card.getBoundingClientRect());
	}, [card]);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [onResize]);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	if (card) {
		card.style.setProperty('--mouse-x', `${props.mousePos.x - rect.left}px`);
		card.style.setProperty('--mouse-y', `${props.mousePos.y - rect.top}px`);
	}

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
			{/* I'm sorry for whoever has to modify this :( */}
			<div
				ref={cardRef}
				className="_anime_generic service-card relative h-[18.5rem] rounded-2xl p-px opacity-0 before:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-px after:w-full after:bg-slate-600 after:content-[''] hover:before:opacity-100 md:size-full md:h-[360px] md:w-full md:bg-[rgba(255,255,255,0.1)] md:before:absolute md:before:left-0 md:before:z-[3] md:before:size-full md:before:rounded-[inherit] md:before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] md:before:opacity-0 md:before:transition-opacity md:before:duration-500 md:before:content-[''] md:after:top-0 md:after:z-[1] md:after:h-full md:after:rounded-[inherit] md:after:bg-transparent md:after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.4),transparent_40%)] md:after:opacity-0 md:after:transition-opacity md:after:duration-500"
			>
				<article className="absolute left-0 top-0 z-[2] size-full rounded-[inherit] md:p-px">
					<div className="group flex size-full flex-col items-start gap-snug rounded-[inherit] p-snug md:bg-surface md:p-loose">
						<div className="pt-2 transition-colors group-hover:text-muted">
							{props.children}
						</div>
						<div className="flex h-full flex-col items-start justify-between text-left">
							<div>
								<h1 className="mb-snug mt-1 text-2xl font-semibold transition-colors group-hover:text-blood-red md:text-4xl">
									{props.title}
								</h1>
								<p className="pb-4 text-sm font-semibold leading-7 text-[#aaa] transition-colors group-hover:text-font-primary">
									{props.description}
								</p>
							</div>
							<button
								onClick={onClick}
								className="text-display z-[4] mb-8 mt-auto flex items-center gap-2 rounded-full bg-blood-red px-4 py-2 text-xs font-extrabold md:bg-transparent md:p-0 md:text-base"
							>
								<span className="md:text-blood-red">Learn more</span>
								<ArrowIcon className="md:hidden" />
							</button>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};
