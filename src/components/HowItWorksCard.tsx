import { FC } from "react";

export interface CardProps {
	index: number;
	title: string;
	description: string;
	alternate: boolean;
	visible: boolean;
}

export const HowItWorksCard: FC<CardProps> = (props) => {
	return (
		<article
			className="relative space-y-4 rounded-2xl border border-gray-700 bg-surface p-7 before:absolute before:-left-[1.5rem] before:top-[50%] before:-z-10 before:block before:size-0 before:-translate-x-1 before:-translate-y-[50%] before:border-[10px] before:border-y-transparent before:border-l-blood-red before:border-r-transparent before:content-[''] md:max-w-[28rem] [&[data-alternate='true']]:before:-right-[2rem] [&[data-alternate='true']]:before:left-auto [&[data-alternate='true']]:before:border-l-transparent [&[data-alternate='true']]:before:border-r-blood-red [&[data-visible='false']]:invisible"
			aria-hidden={props.visible}
			data-visible={props.visible}
			data-alternate={props.alternate}
		>
			<header className="flex gap-2 md:text-xl">
				<span className="font-display font-bold text-muted">
					{props.index.toString().padStart(2, '0')}
				</span>
				<h1>{props.title}</h1>
			</header>
			<p className="text-xs text-muted md:text-sm">{props.description}</p>
		</article>
	);
};
