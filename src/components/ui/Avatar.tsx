import { FC } from 'react';

interface AvatarProps {
	url?: string;
}

export const Avatar: FC<AvatarProps> = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-20 w-20 rounded-full bg-lime-400 md:h-36 md:w-36"></div>
		</div>
	);
};
