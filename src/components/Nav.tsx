import { FC, useState } from 'react';
import {
	CrossIcon,
	BurgerIcon,
	LinkedInIcon,
	XIcon,
	InstagramIcon
} from '@/icons';
import Trend from '@/assets/scribbles/Trend.svg';

const Menu: FC<{ onClose: () => void }> = (prop) => {
	return (
		<section className="fixed left-0 top-0 z-50 h-dvh w-screen bg-[#B7ECAD] md:hidden">
			<header>
				<button
					onClick={prop.onClose}
					className="ml-auto mr-4 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl md:hidden"
				>
					<CrossIcon />
				</button>
			</header>
			<menu className="mt-[20%] space-y-2 text-center text-[2.5rem] font-extrabold">
				<li className="font-display">Perks</li>
				<li className="font-display">Testimonials</li>
				<li className="font-display">How it works</li>
				<li className="font-display">Pricing</li>
			</menu>
			<section className="absolute bottom-4 flex w-full flex-col items-center gap-2">
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
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <Menu onClose={() => setOpen(false)} />}
			<div className="sticky top-0 z-10 box-border flex h-16 items-center justify-between bg-background px-snug text-center md:justify-center">
				<div className="flex items-center gap-2">
					<img className="h-5 w-5" src={Trend} />
					<p className="text-base font-comfortaa font-bold">Hi Reach Media</p>
				</div>
				<button
					onClick={() => setOpen(true)}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl md:hidden"
				>
					<BurgerIcon className="text-lg" />
				</button>
			</div>
		</>
	);
};
