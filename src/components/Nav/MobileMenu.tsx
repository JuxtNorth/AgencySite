import { CrossIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/icons';
import { FC, useEffect, useRef } from 'react';
import anime from 'animejs';

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
			className="fixed z-[100] flex h-dvh w-screen flex-col justify-between items-center py-12 bg-font-primary p-snug transition-[clip-path] duration-500 [clip-path:circle(0px_at_50%_-20px)] before:fixed before:left-0 before:top-0 before:-z-40 before:h-screen before:w-screen before:bg-font-primary before:content-[''] [&[data-open='false']]:delay-150 [&[data-open='true']]:[clip-path:circle(120vmax_at_50%_-20px)]"
		>
			<h1 className="text-center text-4xl font-extrabold text-surface">
				Hi Reach Media
			</h1>
			<menu className="space-y-2 text-center font-display text-4xl font-extrabold text-surface">
				<li className="py-2 mx-auto px-8 w-fit rounded-full border-slate-500 border">Workflow</li>
				<li className="py-2 mx-auto px-8 w-fit rounded-full border-slate-500 border">Our Works</li>
				<li className="py-2 mx-auto px-8 w-fit rounded-full border-slate-500 border">Pricing</li>
				<li className="py-2 mx-auto px-8 w-fit rounded-full border-slate-500 border">FAQs</li>
			</menu>
			<button
				ref={closeBtnRef}
				onClick={onClose}
				className="rounded-full bg-primary p-snug text-xl w-fit"
			>
				<CrossIcon />
			</button>
		</section>
	);
};
