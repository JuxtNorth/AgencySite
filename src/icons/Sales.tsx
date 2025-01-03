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
				<path d="m11,10v1c0,.552-.448,1-1,1h-5c-.552,0-1-.448-1-1v-1c0-.552.448-1,1-1h5c.552,0,1,.448,1,1Zm13-3.5v10.5c0,.357-.19.688-.5.866-.309.178-.69.178-.999,0l-2.17-1.25-1.767,1.209c-.172.118-.369.175-.563.175-.319,0-.633-.152-.826-.436-.312-.455-.195-1.077.261-1.39l2.285-1.564c.315-.217.731-.234,1.063-.041l1.216.7V6.5c0-2.481-2.019-4.5-4.5-4.5-2.249,0-4.097,1.624-4.431,3.815,1.164.814,1.931,2.16,1.931,3.685v10c0,2.481-2.019,4.5-4.5,4.5h-6c-2.481,0-4.5-2.019-4.5-4.5v-10c0-1.557.795-2.93,2-3.738v-.762C2,2.243,4.243,0,7,0h10.5c3.584,0,6.5,2.916,6.5,6.5Zm-11,3c0-1.379-1.121-2.5-2.5-2.5h-6c-1.379,0-2.5,1.121-2.5,2.5v10c0,1.379,1.121,2.5,2.5,2.5h6c1.379,0,2.5-1.121,2.5-2.5v-10Zm-1.836-4.433c.263-1.183.837-2.233,1.635-3.067h-5.799c-1.654,0-3,1.346-3,3v.051c.166-.019.329-.051.5-.051h6c.227,0,.446.034.664.067Zm-1.164,8.933h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1s-.447-1-1-1Zm0,4h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1s-.447-1-1-1Zm-4-4h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1s-.447-1-1-1Zm0,4h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1s-.447-1-1-1Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Sales Icon'}</span>
		</>
	);
};
