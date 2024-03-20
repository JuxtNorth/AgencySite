import { FC } from 'react';
import { IconProps } from '@/icons';

export const SalesIcon: FC<IconProps> = (props) => {
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
				<path d="m11,7H3c-1.654,0-3,1.346-3,3v14h14v-14c0-1.654-1.346-3-3-3Zm-5,14h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm1-4H3v-3h8v3Zm1.08-8H2C2,2.243,4.243,0,7,0h8.413c-1.768,1.061-3.027,2.876-3.334,5Zm11.92,1v12.594l-3.126-1.9-2.874,1.807-2-1.257v-7.243c0-1.628-.791-3.064-2-3.976v-.024c0-2.757,2.243-5,5-5s5,2.243,5,5Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Magic Wand'}</span>
		</>
	);
};
