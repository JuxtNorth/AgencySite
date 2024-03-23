import { FC } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';

export const Nav: FC = () => {
	return (
		<div className="box-border flex flex h-16 items-center justify-between px-4 text-center">
			<div className="flex items-center gap-2">
				<img className="h-5 w-5" src={Trend} />
				<p className="text-md font-comfortaa font-bold">Hi Reach Media</p>
			</div>
			<div className="h-12 w-12 rounded-full bg-purple-100" />
		</div>
	);
};
