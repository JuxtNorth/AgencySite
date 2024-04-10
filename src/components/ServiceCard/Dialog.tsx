import { CrossIcon, GiftIcon, ScheduleIcon } from '@/icons';
import { FC, useEffect, useRef } from 'react';
import { GlowButton } from '@/components/ui';
import ReactHtmlParser from 'react-html-parser';
import { PieChart } from 'react-minimal-pie-chart';

export interface DialogProps {
	title: string;
	markdownContent: string;
	onClose: () => void;
	isOpen: boolean;
	stat: {
		title: string;
		value: number;
	};
}

export const Dialog: FC<DialogProps> = (props) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const { isOpen } = props;

	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);

	return (
		<dialog
			ref={dialogRef}
			className="w-[76%] max-w-[74rem] overflow-visible bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm"
		>
			<button
					className="absolute -right-12 block rounded-full bg-surface p-3 text-font-primary transition-[filter] hover:brightness-125"
					onClick={props.onClose}
				>
					<CrossIcon />
				</button>
			<div className="bg-surface rounded-[2.6rem] relative grid size-full grid-cols-[auto_24%] gap-x-loose p-9">
				<article className="text-left overflow-scroll">
					<h1 className="mb-snug text-4xl">{props.title}</h1>
					<div className="text-font-primary">
						{ReactHtmlParser(props.markdownContent)}
					</div>
				</article>
				<section className="space-y-snug">
					<div className="aspect-square w-full rounded-[2.5rem] border border-slate-600 p-snug grid grid-cols-1 grid-rows-1 place-items-center">
						<p className='text-sm row-start-1 col-start-1 text-primary text-center'>Some Stat</p>
						<PieChart
						className='row-start-1 col-start-1'
							data={[
								{
									title: 'foo',
									color: 'rgb(var(--primary))',
									value: 80
								},
								{
									title: 'bar',
									color: 'rgba(var(--primary-varient),0.3)',
									value: 20
								}
							]}
							rounded
							lineWidth={24}
						/>
					</div>
					<GlowButton
						variant="c"
						className="flex w-full items-center justify-center gap-snug rounded-full border border-slate-600 bg-transparent py-snug font-display text-accent hover:text-font-primary"
					>
						<GiftIcon className="text-xl" />
						Get your Gift
					</GlowButton>
					<GlowButton className="flex w-full items-center justify-center gap-snug rounded-full border border-slate-600 bg-transparent py-snug font-display text-font-primary">
						<ScheduleIcon className="text-xl" />
						Book a call
					</GlowButton>
				</section>
			</div>
		</dialog>
	);
};
