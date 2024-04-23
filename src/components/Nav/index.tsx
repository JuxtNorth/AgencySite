import { FC, useCallback, useEffect, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';
import { BurgerIcon } from '@/icons';
import { MobileMenu } from './MobileMenu';
import { HashLink } from 'react-router-hash-link';

export const Nav: FC = () => {
	const [blur, setBlur] = useState(0);
	const [open, setOpen] = useState(false);

	const onScroll: EventListener = useCallback(() => {
		const { scrollTop } = document.documentElement;
		if (scrollTop > 64) {
			setBlur(40);
		} else {
			setBlur(0);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	return (
		<>
			<MobileMenu isOpen={open} onClose={() => setOpen(false)} />
			<nav
				className="fixed top-0 z-50 box-border flex w-full items-center justify-between p-snug px-snug transition-[backdrop-filter]"
				style={{ backdropFilter: `blur(${blur}px)` }}
			>
				<div className="flex items-center gap-2">
					<img className="size-5 invert" src={Trend} />
					<HashLink to="/" className="font-body text-xs font-bold">
						Hi Reach Media
					</HashLink>
				</div>
				<div className="flex items-center gap-2 ">
					<menu className="mr-loose hidden gap-snug text-sm lg:flex">
						<li>
							<HashLink className="hover:underline font-bold" to="/#works">
								Our Work
							</HashLink>
						</li>
						<li>
							<HashLink className="hover:underline font-bold" to="/#workflow">
								Workflow
							</HashLink>
						</li>
						<li>
							<HashLink className="hover:underline font-bold" to="/#testimonials">
								Reviews
							</HashLink>
						</li>
						<li>
							<HashLink className="hover:underline font-bold" to="/#services">
								Services
							</HashLink>
						</li>
					</menu>
					<HashLink
						className="flex grow-0 items-center justify-center rounded-full bg-blood-red px-6 py-2 font-display text-sm leading-7"
						to="/#pricing"
					>
						See Pricing
					</HashLink>
					<button
						onClick={() => setOpen(true)}
						data-open={open}
						className="flex items-center justify-center rounded-full bg-blood-red p-3.5 text-xl transition-transform lg:hidden [&[data-open='true']]:translate-x-16"
					>
						<BurgerIcon />
					</button>
				</div>
			</nav>
		</>
	);
};
