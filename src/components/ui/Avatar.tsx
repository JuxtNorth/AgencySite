import { FC } from 'react';

export interface AvatarProps {
	profileUrl?: string;
	name?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-20 w-20 rounded-full bg-lime-400 object-cover md:h-36 md:w-36">
				{props.profileUrl && (
					<img
						className="aspect-[1/1] size-full rounded-full object-cover"
						width={400}
						src={props.profileUrl}
						alt={`An image of ${props?.name}`}
					/>
				)}
			</div>
		</div>
	);
};
