import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';

const avatarVariants = cva('mb-2 size-20 rounded-full bg-primary md:size-36', {
	variants: {
		variant: {
			default: '',
			bordered:
				"relative before:content-[''] before:size-full before:rounded-full before:bg-surface-new before:-z-[1] mb-4 before:absolute before:scale-[1.14] before:brightness-125 before:left-0 before:top-0"
		}
	}
});

export interface AvatarProps {
	profileUrl?: string;
	name?: string;
	stat?: string;
	variant?: 'default' | 'bordered';
	className?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
	const { variant = 'default' } = props;

	return (
		<div className={cn("flex flex-col items-center", props.className)}>
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
			<p className="font-display text-xs font-semibold text-blood-red">
				{props?.stat}
			</p>
		</div>
	);
};
