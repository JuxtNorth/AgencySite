import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {
	CrossIcon,
	BurgerIcon,
	LinkedInIcon,
	XIcon,
	InstagramIcon
} from '@/icons';
import Trend from '@/assets/scribbles/Trend.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface MenuProps {
	setOpened: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ setOpened }) => {
	const [animate, setAnimate] = useState(false);

	useGSAP(() => {
		gsap.fromTo(
			'.gsap-menu-item',
			{ x: 60, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.09,
				ease: 'circ.out',
				delay: 0.34,
				duration: 0.4
			}
		);

		gsap.fromTo(
			'.gsap-menu-footer',
			{ y: -32, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.09,
				ease: 'circ.out',
				delay: 0.7,
				duration: 0.4
			}
		);
	});

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
			<menu className="mt-[20%] space-y-2 text-center text-[2.5rem] font-extrabold">
				<li className="gsap-menu-item font-display">Perks</li>
				<li className="gsap-menu-item font-display">Testimonials</li>
				<li className="gsap-menu-item font-display">How it works</li>
				<li className="gsap-menu-item font-display">Pricing</li>
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
