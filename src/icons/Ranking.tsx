import { FC } from 'react';
import { IconProps } from '@/icons';

/*
Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
*/
export const RankingIcon: FC<IconProps> = (props) => {
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
				<path d="m20.5,16h-3.5v-3.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v.5h-3.5c-1.93,0-3.5,1.57-3.5,3.5v4c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5Zm-11.5-3.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v9.5h-6v-9.5Zm-7,8v-4c0-.827.673-1.5,1.5-1.5h3.5v7h-3.5c-.827,0-1.5-.673-1.5-1.5Zm20,0c0,.827-.673,1.5-1.5,1.5h-3.5v-4h3.5c.827,0,1.5.673,1.5,1.5v1ZM8.041,2.857c.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Ranking Icon'}</span>
		</>
	);
};
