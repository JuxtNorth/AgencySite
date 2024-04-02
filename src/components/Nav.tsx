import { FC, useEffect, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';
import { BurgerIcon } from '@/icons';
import { Link } from 'react-router-dom';

export const Nav: FC = () => {
	const [blur, setBlur] = useState(0);

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
			<nav
				className="fixed top-0 z-50 box-border flex h-16 w-full items-center justify-between px-snug transition-[backdrop-filter]"
				style={{ backdropFilter: `blur(${blur}px)` }}
			>
				<div className="flex items-center gap-2">
					<img className="h-5 w-5 invert" src={Trend} />
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
						className="flex h-10 grow-0 items-center justify-center rounded-full border border-primary px-6 font-display text-xs leading-7"
						href="#schedule"
					>
						Book a call
					</a>
					<button className="flex size-10 items-center justify-center rounded-full bg-primary text-xl text-font-primary lg:hidden">
						<BurgerIcon />
					</button>
				</div>
			</nav>
		</>
	);
};
