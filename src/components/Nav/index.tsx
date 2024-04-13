import { FC, useEffect, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';
import { BurgerIcon } from '@/icons';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

export const Nav: FC = () => {
	const [blur, setBlur] = useState(0);
	const [open, setOpen] = useState(true);

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
				className="fixed top-0 z-50 box-border flex p-snug w-full items-center justify-between px-snug transition-[backdrop-filter]"
				style={{ backdropFilter: `blur(${blur}px)` }}
			>
				<div className="flex items-center gap-2">
					<img className="size-5 invert" src={Trend} />
					<p className="font-body text-xs font-bold">Hi Reach Media</p>
				</div>
				<div className="flex items-center gap-2 ">
					<menu className="mr-loose hidden gap-snug text-xs lg:flex">
						<li>
							<Link className="hover:underline" to="#">
								Our Work
							</Link>
						</li>
						<li>
							<Link className="hover:underline" to="#">
								Pricing
							</Link>
						</li>
						<li>
							<Link className="hover:underline" to="#">
								Reviews
							</Link>
						</li>
						<li>
							<Link className="hover:underline" to="#">
								About
							</Link>
						</li>
					</menu>
					<a
						className="flex py-2 grow-0 items-center justify-center rounded-full border border-primary px-6 font-display text-sm leading-7"
						href="#schedule"
					>
						Book a call
					</a>
					<button
						onClick={() => setOpen(true)}
						data-open={open}
						className="flex p-3.5 text-xl items-center justify-center rounded-full bg-primary transition-transform lg:hidden [&[data-open='true']]:translate-x-16"
					>
						<BurgerIcon />
					</button>
				</div>
			</nav>
		</>
	);
};