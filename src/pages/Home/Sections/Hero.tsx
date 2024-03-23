import { FC } from 'react';
import { GlitterIcon } from '@/icons';

export const Hero: FC = () => {
	return (
		<header className="flex flex-col items-center gap-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] py-16 [background-size:16px_16px]">
			<div className="w-96 text-center md:w-[48rem]">
				<h1 className="font-display text-5xl font-medium md:text-6xl">
					Forging{' '}
					<span className="whitespace-nowrap rounded-2xl bg-purple-200 px-3 font-display mix-blend-multiply">
						personal brand
					</span>{' '}
					for social dominance
				</h1>
				<p className="mt-4 text-lg leading-tight md:text-xl">
					Subscription here makes brands go viral there, grab your seats.
				</p>
			</div>
			<a
				href="#pricing"
				className="block flex items-center justify-center gap-4 rounded-xl bg-slate-900 px-6 py-4 text-lg text-white"
			>
				<GlitterIcon />
				See plans
			</a>
			<div className="flex items-center gap-2">
				<span className="block h-3 w-3 rounded-full bg-green-500">
					<span className="block h-3 w-3 animate-ping rounded-full bg-green-500"></span>
				</span>
				<p className="text-md text-slate-800">Available now</p>
			</div>
		</header>
	);
};
