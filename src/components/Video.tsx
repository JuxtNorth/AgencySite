import { FC, ReactNode, VideoHTMLAttributes } from 'react';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
	children?: ReactNode;
	placeContentAtBottom?: boolean;
}

export const Video: FC<VideoProps> = ({
	placeContentAtBottom,
	children,
	...restProps
}) => {
	if (placeContentAtBottom) {
		return (
			<div className="h-full w-full">
				<video {...restProps} />
				{children}
			</div>
		);
	}
	return (
		<div className="h-full w-full">
			{children}
			<video {...restProps} />
		</div>
	);
};
