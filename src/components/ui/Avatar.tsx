import { FC } from 'react';

export interface AvatarProps {
	profileUrl?: string;
	name?: string;
	stat?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="mb-2 size-20 rounded-full bg-primary object-cover md:size-36">
				{props.profileUrl && (
					<img
						className="aspect-[1/1] size-full rounded-full object-cover"
						width={400}
						src={props.profileUrl}
						alt={`An image of ${props?.name}`}
					/>
				)}
			</div>
			<h3 className="text-sm">{props?.name}</h3>
			<p className="text-xs font-semibold text-primary">{props?.stat}</p>
		</div>
	);
};
