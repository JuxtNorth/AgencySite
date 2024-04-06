import { seed } from '@/lib/utils';
import { FC } from 'react';

export interface StarProps {
	count?: number;
	scale?: number;
	seed?: number;
	scatter?: number;
}

export const Stars: FC<StarProps> = (props) => {
	const { count = 32, scale = 3, seed: s = 1234, scatter = 400 } = props;
	const random = seed(s);

	const positions: Array<{ x: number; y: number }> = [];

	for (let i = 0; i < count; i++) {
		const x = random() * scatter;
		const y = random() * scatter;

		positions.push({ x, y });
	}

	return (
		<svg aria-hidden viewBox="0 0 400 400" height="100%" width="100%">
			{positions.map(({ x, y }, i) => (
				<circle key={i} cx={x} cy={y} r={1 + scale * random()} fill="white" />
			))}
		</svg>
	);
};
