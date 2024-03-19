import { FC } from 'react';

interface ServiceCardProps {}

export const ServiceCard: FC<ServiceCardProps> = () => {
	return (
		<article className="flex gap-4 rounded-2xl px-4 py-6 text-left">
			<div className="h-12 w-12 shrink-0 rounded-full bg-slate-800"></div>
			<div className="space-y-2">
				<h1 className="text-3xl font-bold text-slate-800">
					Positional Strategy
				</h1>
				<p className="w-[80%] text-sm leading-tight">
					Manage and optimise online profiles on your behalf so you don’t have
					to.
				</p>
				<p>
					<a href="#">Learn More →</a>
				</p>
			</div>
		</article>
	);
};
