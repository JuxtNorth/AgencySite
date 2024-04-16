import { CrossIcon, GiftIcon, ScheduleIcon, StarIcon } from '@/icons';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { GlowButton } from '@/components/ui';
import { PieChart } from 'react-minimal-pie-chart';

export interface DialogProps {
	title: string;
	paragraphs: string[];
	emphasis: string;
	deliverables: string[];
	onClose: () => void;
	isOpen: boolean;
	stat: {
		title: string;
		value: number;
	};
}

export const Dialog: FC<DialogProps> = (props) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [visible, setVisibility] = useState(false);

	const { isOpen, onClose: onCloseResponse } = props;

	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
			setVisibility(true);
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);

	const onClose = useCallback(() => {
		setVisibility(false);
		setTimeout(() => {
			onCloseResponse();
		}, 280);
	}, [onCloseResponse]);

	useEffect(() => {
		// Close modal if user clicks outside it's main content
		const onClick = (event: Event) => {
			if (event.target === dialogRef.current!) {
				onClose();
			}
		};

		window.addEventListener('click', onClick);

		return () => {
			window.removeEventListener('click', onClick);
		};
	}, [onClose]);

	return (
		<dialog
			ref={dialogRef}
			data-open={visible}
			className="w-[80%] max-w-[100rem] scale-[2] overflow-visible bg-transparent opacity-0 duration-300 ease-[cubic-bezier(0.165,0.840,0.440,1.000)] backdrop:bg-black/80 backdrop:backdrop-blur-sm xl:w-[70%] [&[data-open='true']]:scale-[1] [&[data-open='true']]:opacity-100 [&[data-open='true']]:duration-[400ms]"
		>
			<div className="flex size-full flex-col items-center gap-loose rounded-3xl bg-surface p-loose text-font-primary lg:hidden">
				<GiftIcon className="text-[72px] text-accent" />
				<p>
					View the website on a desktop to get a{' '}
					<span className="bg-gradient-to-r from-primary to-secondary to-80% bg-clip-text text-transparent">
						free gift
					</span>
					.
				</p>
				<button
					onClick={onClose}
					className="w-full rounded-full py-snug outline outline-1 outline-slate-600"
				>
					Close Modal
				</button>
			</div>
			<button
				className="absolute -right-12 hidden rounded-full bg-surface p-3 text-font-primary transition-[filter] hover:brightness-125 lg:block"
				onClick={onClose}
			>
				<CrossIcon />
			</button>
			<div className="relative hidden size-full grid-cols-[auto_24%] gap-x-loose rounded-[2.6rem] bg-surface p-9 lg:grid">
				<article className="text-left">
					<h1 className="mb-snug text-4xl">{props.title}</h1>
					<div className="pl-2 text-sm text-font-primary xl:text-[15px]">
						{props.paragraphs.map((content) => (
							<p className="text-base">{content}</p>
						))}
						<p className="continuous-gradient my-2 bg-clip-text text-lg text-transparent">
							{props.emphasis}
						</p>
						<ul className="space-y-2">
							{props.deliverables.map((content) => (
								<li>
									<StarIcon className="-mt-1 mr-2 inline text-primary" />
									{content}
								</li>
							))}
						</ul>
					</div>
				</article>
				<section className="space-y-snug">
					<div className="grid aspect-square w-full grid-cols-1 grid-rows-1 place-items-center rounded-[2.5rem] border border-slate-600 p-snug">
						<p className="col-start-1 row-start-1 text-center text-sm text-primary">
							{props.stat.title}
						</p>
						<PieChart
							className="col-start-1 row-start-1"
							data={[
								{
									title: 'value',
									color: 'rgb(var(--primary))',
									value: props.stat.value
								},
								{
									title: 'container',
									color: 'rgba(var(--primary-varient),0.3)',
									value: 100 - props.stat.value
								}
							]}
							rounded
							lineWidth={24}
						/>
					</div>
					<GlowButton
						variant="b"
						className="flex w-full items-center justify-center gap-snug rounded-full bg-transparent py-snug font-display text-accent outline outline-1 outline-slate-600 hover:bg-accent hover:text-font-primary hover:outline-0"
					>
						<GiftIcon className="text-xl" />
						Get your Gift
					</GlowButton>
					<GlowButton className="flex w-full items-center justify-center gap-snug rounded-full bg-transparent py-snug font-display text-font-primary outline outline-1 outline-slate-600 hover:bg-primary hover:outline-0">
						<ScheduleIcon className="text-xl" />
						Book a call
					</GlowButton>
				</section>
			</div>
		</dialog>
	);
};
