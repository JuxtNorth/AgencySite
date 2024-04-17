import { cva } from 'class-variance-authority';
import { FC } from 'react';

const avatarVariants = cva('mb-2 size-20 rounded-full bg-primary md:size-36', {
	variants: {
		variant: {
			default: '',
			bordered:
				"relative before:content-[''] before:size-full before:rounded-full before:border before:border-slate-500 mb-4 before:absolute before:scale-[1.1]"
		}
	}
});

export interface AvatarProps {
	profileUrl?: string;
	name?: string;
	stat?: string;
	variant?: 'default' | 'bordered';
}

export const Avatar: FC<AvatarProps> = (props) => {
	const { variant = 'default' } = props;

	return (
		<div className="flex flex-col items-center">
			<div className={avatarVariants({ variant })}>
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
