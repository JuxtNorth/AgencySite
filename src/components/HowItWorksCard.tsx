import { FC, useEffect, useRef, useState } from 'react';

export interface CardProps {
	index: number;
	title: string;
	description: string;
	alternate: boolean;
	visible: boolean;
}

export const HowItWorksCard: FC<CardProps> = (props) => {
	const containerRef = useRef<HTMLElement>(null);
	const [intersectedCenter, setIntersectedCenter] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const container = containerRef.current;
			if (container) {
				const rect = container.getBoundingClientRect();
				const h = rect.top + 8 + rect.height / 2;
				setIntersectedCenter(h < window.innerHeight / 2);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<article
			ref={containerRef}
			className="relative space-y-4 rounded-2xl border border-gray-700 bg-surface p-7 !opacity-25 transition-[opacity,border-color] [--border-color:rgb(var(--surface))] before:absolute before:-left-[1.5rem] before:top-[50%] before:-z-10 before:block before:size-0 before:-translate-x-1 before:-translate-y-[50%] before:border-[10px] before:border-y-transparent before:border-l-[var(--border-color)] before:border-r-transparent before:transition-colors before:content-[''] md:max-w-[28rem] [&[data-alternate='true']]:before:-right-[2rem] [&[data-alternate='true']]:before:left-auto [&[data-alternate='true']]:before:border-l-transparent [&[data-alternate='true']]:before:border-r-[var(--border-color)] [&[data-intersected='true']]:border-blood-red [&[data-intersected='true']]:!opacity-100 [&[data-intersected='true']]:[--border-color:rgb(var(--blood-red))] [&[data-visible='false']]:invisible"
			aria-hidden={props.visible}
			data-visible={props.visible}
			data-alternate={props.alternate}
			data-intersected={intersectedCenter}
		>
			<header className="flex gap-2 text-lg md:text-xl">
				<span className="font-display font-bold text-muted">
					{props.index.toString().padStart(2, '0')}
				</span>
				<h1>{props.title}</h1>
			</header>
			<p className="text-[13px] text-muted md:text-sm">{props.description}</p>
		</article>
	);
};
