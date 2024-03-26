//@ts-nocheck

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import './index.css';

const MAX_VISIBILITY = 3;

export interface CardProps {
	active: boolean;
	children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, active }) => (
	<div className={'card ' + (active && 'active')}>
		<div className="h-full w-full">{children}</div>
	</div>
);

export interface Carousel3DProps {
	children: React.ReactNode;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ children }) => {
	const [active, setActive] = useState(2);
	const count = React.Children.count(children);

	return (
		<div className="carousel">
			{active > 0 && (
				<button className="nav left" onClick={() => setActive((i) => i - 1)}>
					<ChevronLeftIcon />
				</button>
			)}

			{React.Children.map(children, (child, i) => (
				<div
					className={'card-container'}
					style={{
						'--active': i === active ? 1 : 0,
						'--offset': (active - i) / 2,
						'--direction': Math.sign(active - i),
						'--abs-offset': Math.abs(active - i) / 3,
						'pointer-events': active === i ? 'auto' : 'none',
						opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
						display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
					}}
				>
					<Card active={i === active}>{child}</Card>
				</div>
			))}
			{active < count - 1 && (
				<button className="nav right" onClick={() => setActive((i) => i + 1)}>
					<ChevronRightIcon />
				</button>
			)}
		</div>
	);
};
