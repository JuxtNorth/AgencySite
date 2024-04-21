import { FC } from 'react';
import { IconProps } from '@/icons';

export const ContentIcon: FC<IconProps> = (props) => {
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
				<path d="M17,16c-.552,0-1,.448-1,1v1h-2v-1c0-.552-.448-1-1-1s-1,.448-1,1v5H6V11c0-.552-.448-1-1-1h-.5c-2.481,0-4.5,2.019-4.5,4.5v5c0,2.481,2.019,4.5,4.5,4.5H13.5c2.481,0,4.5-2.019,4.5-4.5v-2.5c0-.552-.448-1-1-1Zm-13,0v2H2v-2h2Zm0-3.95v1.95h-1.945c.2-.977,.968-1.75,1.945-1.95Zm-1.945,7.95h1.945v1.95c-.978-.199-1.745-.972-1.945-1.95Zm11.945,1.949v-1.949h1.949c-.199,.978-.971,1.75-1.949,1.949ZM19,0h-6c-2.757,0-5,2.243-5,5v4c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM10,5c0-1.654,1.346-3,3-3h6c1.147,0,2.134,.654,2.638,1.602l-3.457,3.464-.475-.48c-.736-.737-1.896-.789-2.705-.113l-4.621,3.961c-.235-.428-.381-.911-.381-1.433V5Zm9,7h-6c-.395,0-.771-.081-1.117-.221l4.406-3.784,.475,.48c.779,.78,2.049,.781,2.829,0l2.408-2.408v2.932c0,1.654-1.346,3-3,3Zm-8-7.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Content Icon'}</span>
		</>
	);
};
