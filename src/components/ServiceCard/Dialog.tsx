import { CrossIcon, GiftIcon, ScheduleIcon } from '@/icons';
import { FC, useEffect, useRef } from 'react';
import { GlowButton } from '@/components/ui';
import Markdown from 'react-markdown'

export interface DialogProps {
	title: string;
	markdownContent: string;
	onClose: () => void;
	isOpen: boolean;
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
			className="w-[76%] max-w-[74rem]  overflow-visible rounded-2xl bg-surface"
		>
			<div className="relative grid size-full grid-cols-[auto_24%] gap-x-loose p-loose">
				<button
					className="absolute -right-12 block rounded-full bg-surface p-3 text-font-primary  transition-[filter] hover:brightness-125"
					onClick={props.onClose}
				>
					<CrossIcon />
				</button>
				<article className="text-left">
					<h1 className="mb-snug text-4xl">{props.title}</h1>
					<Markdown components={{
						p(props) {
							const {["node"]: _, ...rest} = props;
							return <p className='text-font-primary text-sm' {...rest} />
						},
						ul(props) {
							const {["node"]: _, ...rest} = props;
							return <ul className='text-font-primary text-sm pl-snug list-disc' {...rest} />
						}
					}}>{props.markdownContent}</Markdown>
				</article>
				<section className="space-y-snug">
					<div className="aspect-square w-full rounded-2xl border border-slate-600"></div>
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
