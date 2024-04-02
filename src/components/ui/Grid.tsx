import { cn } from '@/lib/utils';
import { FC } from 'react';

export interface GridProps {
	width?: number;
	height?: number;
	gridX?: number;
	gridY?: number;
	className?: string;
}

export const Grid: FC<GridProps> = (props) => {
	const { gridX = 8, gridY = 8, width = 300, height = 300 } = props;
	const rects = [];
	const squareW = width / gridX;
	const squareH = height / gridY;

	for (let y = 0; y < gridY; y++) {
		for (let x = 0; x < gridX; x++) {
			const squareX = squareW * x;
			const squareY = squareH * y;
			rects.push({ x: squareX, y: squareY });
		}
	}

	return (
		<div className="relative -z-20 mix-blend-screen" style={{ width, height }}>
			<div
				className={cn(
					'absolute size-full bg-[radial-gradient(ellipse_60%_70%,var(--primary-varient),black_70%)] lg:bg-[radial-gradient(ellipse_80%_60%,var(--primary-varient),black_70%)] mix-blend-multiply',
					props.className
				)}
			></div>
			<svg
				width={width}
				height={height}
				aria-hidden
				xmlns="http://www.w3.org/2000/svg"
			>
				{rects.map((position) => (
					<rect
						{...position}
						width={squareW}
						height={squareH}
						stroke="white"
						strokeWidth={0.5}
					/>
				))}
			</svg>
		</div>
	);
};
