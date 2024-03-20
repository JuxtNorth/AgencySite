import { FC, Suspense, createElement, lazy, ReactNode } from 'react';
import { MagicIcon } from '@/icons';

export interface ServiceCardProps {
	children: ReactNode; // Icon
	title: string;
	description: string;
}

export const ServiceCard: FC<ServiceCardProps> = (props) => {
	return (
		<article className="flex gap-4 rounded-2xl px-4 py-6 text-left">
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xl text-white">
				{props.children}
			</div>
			<div className="space-y-2">
				<h1 className="text-3xl font-bold text-slate-800">{props.title}</h1>
				<p className="w-[80%] text-sm leading-tight">{props.description}</p>
				<p>
					<a href="#">Learn More →</a>
				</p>
			</div>
		</article>
	);
};
