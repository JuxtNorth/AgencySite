import { FC, ReactNode } from 'react';

export interface VideoProps {
	children?: ReactNode;
	placeContentAtBottom?: boolean;
}

export const Video: FC<VideoProps> = (props) => {
	if (props?.placeContentAtBottom) {
		return (
			<div>
				<div className="aspect-[16/9] rounded-2xl bg-sky-300"></div>
				{props?.children}
			</div>
		);
	}
	return (
		<div>
			{props?.children}
			<div className="aspect-[16/9] rounded-2xl bg-sky-300"></div>
		</div>
	);
};
