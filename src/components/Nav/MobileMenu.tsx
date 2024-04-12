import { CrossIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/icons';
import anime from 'animejs';
import { FC, useEffect, useRef } from 'react';

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
					translateX: [80, 0],
					translateY: [-50, 0],
					rotateZ: ['72deg', '0deg']
				});
			} else {
				anime({
					targets: closeBtnRef.current,
					translateX: 80,
					translateY: -50,
					rotateZ: '72deg'
				});
			}
		}
	}, [isOpen]);

	return (
		<section
			data-open={isOpen}
			className="fixed z-[100] flex h-dvh w-screen flex-col justify-between bg-font-primary p-loose transition-[clip-path] duration-500 [clip-path:circle(0px_at_50%_-20px)] [&[data-open='false']]:delay-150 [&[data-open='true']]:[clip-path:circle(120vh_at_50%_-20px)]"
		>
			<div>
				<button
					ref={closeBtnRef}
					onClick={onClose}
					className="float-right rounded-full bg-primary p-snug text-xl"
				>
					<CrossIcon />
				</button>
				<menu className="space-y-2 font-display text-5xl font-extrabold text-surface">
					<li>Review</li>
					<li>About</li>
					<li>Our Works</li>
					<li>Workflow</li>
					<li>Schedule</li>
				</menu>
			</div>
			<div className="space-y-3">
				<p className="text-sm text-surface">
					Email us at{' '}
					<a className="hover:underline" href="mailto:foo@bar.com">
						foo@bar.com
					</a>
				</p>
				<ul className="flex gap-2">
					<li className="rounded-lg bg-surface p-2">
						<InstagramIcon />
					</li>
					<li className="rounded-lg bg-surface p-2">
						<LinkedInIcon />
					</li>
					<li className="rounded-lg bg-surface p-2">
						<XIcon />
					</li>
				</ul>
			</div>
		</section>
	);
};
