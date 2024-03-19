import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<header className="flex flex-col items-center gap-6 bg-violet-200 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] py-16 [background-size:16px_16px]">
			<div className="w-72 text-center md:w-[48rem]">
				<h1 className="text-5xl font-medium md:text-8xl">
					A design agency with a twist.
				</h1>
				<p className="mt-4 text-lg leading-tight md:text-2xl">
					Design subscriptions for everyone. Pause or cancel anytime.
				</p>
			</div>
			<button className="rounded-xl bg-slate-900 px-12 py-4 text-lg text-white">
				See plans
			</button>
			<div className="flex items-center gap-2">
				<span className="block h-3 w-3 rounded-full bg-green-500">
					<span className="block h-3 w-3 animate-ping rounded-full bg-green-500"></span>
				</span>
				<p className="text-md text-slate-800">Available now</p>
			</div>
		</header>
	);
};
