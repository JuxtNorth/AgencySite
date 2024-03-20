import { FC } from 'react';
import { IconProps } from '@/icons';

export const VideoIcon: FC<IconProps> = (props) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				viewBox={props?.viewBox || '0 0 24 24'}
				width={props?.size || '1em'}
				height={props?.size || '1em'}
				className={props?.className}
				fill={props?.color || 'currentColor'}
			>
				<path d="m9,4c0,2.209-1.791,4-4,4S1,6.209,1,4,2.791,0,5,0s4,1.791,4,4ZM14,0c-2.209,0-4,1.791-4,4s1.791,4,4,4,4-1.791,4-4S16.209,0,14,0Zm5,14v6c0,2.209-1.791,4-4,4H4c-2.209,0-4-1.791-4-4v-6c0-2.209,1.791-4,4-4h11c2.209,0,4,1.791,4,4Zm2.765-2.114l-.765.765v7.75l.765.765c.825.825,2.235.241,2.235-.926v-7.429c0-1.166-1.41-1.75-2.235-.926Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Magic Wand'}</span>
		</>
	);
};