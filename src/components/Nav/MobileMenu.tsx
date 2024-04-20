import { CrossIcon } from '@/icons';
import { FC, useEffect, useRef } from 'react';
import anime from 'animejs';
import { jumpToSection } from '@/lib/utils';

export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	const closeBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (closeBtnRef.current) {
			if (isOpen) {
				anime({
					targets: closeBtnRef.current,
					translateY: [80, 0],
					rotateZ: ['90deg', '0deg']
				});
			} else {
				anime({
					targets: closeBtnRef.current,
					translateY: [0, 80],
					rotateZ: ['0deg', '90deg']
				});
			}
		}
	}, [isOpen]);

	return (
		<section
			data-open={isOpen}
			className="fixed z-[100] flex h-dvh w-screen flex-col items-center justify-between bg-font-primary p-snug py-12 transition-[clip-path] duration-500 [clip-path:circle(0px_at_50%_-20px)] before:fixed before:left-0 before:top-0 before:-z-40 before:h-screen before:w-screen before:bg-font-primary before:content-[''] [&[data-open='false']]:delay-150 [&[data-open='true']]:[clip-path:circle(120vmax_at_50%_-20px)]"
		>
			<h1 className="text-center text-4xl font-extrabold text-surface">
				Hi Reach Media
			</h1>
			<menu className="space-y-2 text-center font-display text-4xl font-extrabold text-surface">
				<li className="mx-auto w-fit rounded-full border border-slate-500 px-8 py-2">
					<button
						onClick={() => {
							onClose();
							jumpToSection('workflow');
						}}
					>
						Workflow
					</button>
				</li>
				<li className="mx-auto w-fit rounded-full border border-slate-500 px-8 py-2">
					<button
						onClick={() => {
							onClose();
							jumpToSection('works');
						}}
					>
						Our Works
					</button>
				</li>
				<li className="mx-auto w-fit rounded-full border border-slate-500 px-8 py-2">
					<button
						onClick={() => {
							onClose();
							jumpToSection('pricing');
						}}
					>
						Pricing
					</button>
				</li>
				<li className="mx-auto w-fit rounded-full border border-slate-500 px-8 py-2">
					<button
						onClick={() => {
							onClose();
							jumpToSection('questions');
						}}
					>
						FAQs
					</button>
				</li>
			</menu>
			<button
				ref={closeBtnRef}
				onClick={onClose}
				className="w-fit rounded-full bg-blood-red p-snug text-xl"
			>
				<CrossIcon />
			</button>
		</section>
	);
};
