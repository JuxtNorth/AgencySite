import { FC } from "react";

export const Hero: FC = () => {
	return (
		<header className="bg-violet-200 py-16 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center gap-6">
			<div className="w-72 md:w-[48rem] text-center">
				<h1 className="text-5xl md:text-8xl font-medium">
					A design agency with a twist.
				</h1>
				<p className="text-lg mt-4 md:text-2xl leading-tight">
					Design subscriptions for everyone. Pause or cancel anytime.
				</p>
			</div>
			<button className="px-12 py-4 bg-slate-900 text-white rounded-xl text-lg">
				See plans
			</button>
			<div className="flex gap-2 items-center">
				<span className="h-3 w-3 bg-green-500 block rounded-full">
					<span className="h-3 w-3 bg-green-500 block rounded-full animate-ping"></span>
				</span>
				<p className="text-md text-slate-800">Available now</p>
			</div>
		</header>
	);
};
