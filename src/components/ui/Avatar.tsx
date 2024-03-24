import { FC } from 'react';

interface AvatarProps {
	url?: string;
	info: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
	return (
		<div className="flex flex-col items-center space-y-2">
			<div className="h-32 w-32 rounded-full bg-rose-500 md:h-40 md:w-40"></div>
			<p className="text-md md:text-2xl">{props.info}</p>
		</div>
	);
};
