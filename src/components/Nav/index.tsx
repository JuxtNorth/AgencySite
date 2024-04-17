import { FC, useEffect, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';
import { BurgerIcon } from '@/icons';
import { MobileMenu } from './MobileMenu';

export const Nav: FC = () => {
	const [blur, setBlur] = useState(0);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const { scrollTop } = document.documentElement;
			if (scrollTop > 64) {
				setBlur(40);
			} else {
				setBlur(0);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<MobileMenu isOpen={open} onClose={() => setOpen(false)} />
			<nav
				className="fixed top-0 z-50 box-border flex w-full items-center justify-between p-snug px-snug transition-[backdrop-filter]"
				style={{ backdropFilter: `blur(${blur}px)` }}
			>
				<div className="flex items-center gap-2">
					<img className="size-5 invert" src={Trend} />
					<a href="#" className="font-body text-xs font-bold">Hi Reach Media</a>
				</div>
				<div className="flex items-center gap-2 ">
					<menu className="mr-loose hidden gap-snug text-xs lg:flex">
						<li>
							<a className="hover:underline" href="#works">
								Our Work
							</a>
						</li>
						<li>
							<a className="hover:underline" href="#workflow">
								Workflow
							</a>
						</li>
						<li>
							<a className="hover:underline" href="#testimonials">
								Reviews
							</a>
						</li>
						<li>
							<a className="hover:underline" href="#services">
								Services
							</a>
						</li>
					</menu>
					<a
						className="flex grow-0 items-center justify-center rounded-full border border-primary px-6 py-2 font-display text-sm leading-7"
						href="#pricing"
					>
						See Pricing
					</a>
					<button
						onClick={() => setOpen(true)}
						data-open={open}
						className="flex items-center justify-center rounded-full bg-primary p-3.5 text-xl transition-transform lg:hidden [&[data-open='true']]:translate-x-16"
					>
						<BurgerIcon />
					</button>
				</div>
			</nav>
		</>
	);
};
