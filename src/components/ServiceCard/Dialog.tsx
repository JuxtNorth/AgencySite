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
			<div className="relative grid size-full grid-cols-[auto_24%] gap-x-loose rounded-[2.6rem] bg-surface p-9">
				<article className="overflow-scroll text-left">
					<h1 className="mb-snug text-4xl">{props.title}</h1>
					<div className="text-font-primary">
						{ReactHtmlParser(props.markdownContent)}
					</div>
				</article>
				<section className="space-y-snug">
					<div className="grid aspect-square w-full grid-cols-1 grid-rows-1 place-items-center rounded-[2.5rem] border border-slate-600 p-snug">
						<p className="col-start-1 row-start-1 text-center text-sm text-primary">
							Some Stat
						</p>
						<PieChart
							className="col-start-1 row-start-1"
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
						className="flex w-full items-center justify-center gap-snug rounded-full bg-transparent py-snug font-display text-accent outline outline-1 outline-slate-600 hover:outline-0 hover:text-font-primary "
					>
						<GiftIcon className="text-xl" />
						Get your Gift
					</GlowButton>
					<GlowButton className="flex w-full items-center justify-center gap-snug rounded-full bg-transparent py-snug font-display text-font-primary outline outline-1 outline-slate-600 hover:outline-0">
						<ScheduleIcon className="text-xl" />
						Book a call
					</GlowButton>
				</section>
			</div>
		</dialog>
	);
};
