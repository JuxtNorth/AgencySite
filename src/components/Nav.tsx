import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {
	CrossIcon,
	BurgerIcon,
	LinkedInIcon,
	XIcon,
	InstagramIcon
} from '@/icons';
import Trend from '@/assets/scribbles/Trend.svg';

interface MenuProps {
	setOpened: Dispatch<SetStateAction<boolean>>;
}

const menuOptions = ['Perks', 'Testimonials', 'How it works', 'Pricing'];

const Menu: FC<MenuProps> = ({ setOpened }) => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => setAnimate(true), []);

	const close = () => {
		setAnimate(false);
		setTimeout(() => setOpened(false), 800);
	};

	return (
		<section
			className="fixed left-0 top-0 z-50 h-dvh w-screen bg-[#B7ECAD] transition-[clip-path] duration-700 ease-[cubic-bezier(.8,0,.36,.9)] [clip-path:circle(24px_at_calc(50vw)_calc(-8vh))] md:hidden [&[data-opened='true']]:[clip-path:circle(100%_at_50vh_50vh)]"
			data-opened={animate}
		>
			<header>
				<button
					onClick={close}
					className="ml-auto mr-4 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl transition-transform delay-100 duration-[1200ms] ease-in-out md:hidden [&[data-opened='false']]:rotate-180"
					data-opened={animate}
				>
					<CrossIcon />
				</button>
			</header>
			<menu className="mt-[20%] space-y-2 text-center font-extrabold">
				{menuOptions.map((option, i) => (
					<li
						key={option}
						data-opened={animate}
						style={{ transitionDelay: `${i * 120 + (animate ? 0 : 500)}ms`}}
						className="translate-y-16 font-display text-[2.5rem] opacity-0 transition-[transform,opacity] duration-700 ease-out [&[data-opened='true']]:translate-y-0 [&[data-opened='true']]:opacity-100"
					>
						{option}
					</li>
				))}
			</menu>
			<section className="gsap-menu-footer absolute bottom-4 flex w-full flex-col items-center gap-2">
				<p>
					Email us at <a href="mailto:foo@bar.com">foo@bar.com</a>
				</p>
				<ul className="flex gap-2">
					<li className="rounded-xl bg-yellow-100 p-2 text-xl">
						<LinkedInIcon />
					</li>
					<li className="rounded-xl bg-yellow-100 p-2 text-xl">
						<XIcon />
					</li>
					<li className="rounded-xl bg-yellow-100 p-2 text-xl">
						<InstagramIcon />
					</li>
				</ul>
			</section>
		</section>
	);
};

export const Nav: FC = () => {
	const [opened, setOpened] = useState(false);
	return (
		<>
			{opened && <Menu setOpened={setOpened} />}
			<div className="sticky top-0 z-10 box-border flex h-16 items-center justify-between bg-background px-snug text-center md:justify-center">
				<div className="flex items-center gap-2">
					<img className="h-5 w-5" src={Trend} />
					<p className="font-comfortaa text-base font-bold">Hi Reach Media</p>
				</div>
				<button
					onClick={() => setOpened(true)}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl md:hidden"
				>
					<BurgerIcon className="text-lg" />
				</button>
			</div>
		</>
	);
};
