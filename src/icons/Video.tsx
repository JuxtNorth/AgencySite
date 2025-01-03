import { FC } from 'react';
import { IconProps } from '@/icons';

export const CustomisationIcon: FC<IconProps> = (props) => {
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
				<path d="m24,4v2c0,.553-.447,1-1,1s-1-.447-1-1v-2c0-1.103-.897-2-2-2h-2c-.553,0-1-.447-1-1s.447-1,1-1h2c2.206,0,4,1.794,4,4Zm-1,8c-.553,0-1,.447-1,1v2c0,1.103-.897,2-2,2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2c2.206,0,4-1.794,4-4v-2c0-.553-.447-1-1-1ZM6,7c.553,0,1-.447,1-1v-2c0-1.103.897-2,2-2h2c.553,0,1-.447,1-1s-.447-1-1-1h-2c-2.206,0-4,1.794-4,4v2c0,.553.447,1,1,1Zm12.914,5.792c.162-.349.089-.763-.183-1.036l-1.946-1.946,1.244-2.622c.159-.348.085-.759-.186-1.03s-.682-.345-1.03-.186l-2.622,1.244-1.946-1.946c-.272-.272-.685-.345-1.034-.184-.349.161-.56.523-.529.907l.287,2.797-2.567,1.346c-.345.18-.539.558-.484.944.029.201.122.381.259.518.126.126.288.215.47.251l1.742.345L.293,22.293c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l10.119-10.119.378,1.792c.081.38.393.669.78.72.387.05.763-.149.938-.498l1.298-2.568,2.784.284c.384.033.748-.178.91-.527Z" />
			</svg>
			<span className="sr-only">{props?.label || 'Video Icon'}</span>
		</>
	);
};
