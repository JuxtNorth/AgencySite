import { FC } from 'react';
import { IconProps } from '@/icons';

export const BurgerIcon: FC<IconProps> = (props) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				viewBox={props?.viewBox || '0 0 490 490'}
				width={props?.size || '1em'}
				height={props?.size || '1em'}
				className={props?.className}
				fill={props?.color || 'currentColor'}
			>
				<g>
					<path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z" />
					<path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z" />
					<path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z" />
				</g>
			</svg>
			<span className="sr-only">{props?.label || 'Heart'}</span>
		</>
	);
};
