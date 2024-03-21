import { FC, ReactNode } from 'react';

export interface SlideProps {
	children: ReactNode;
}

export const Slide: FC<SlideProps> = (props) => {
	return (
		<div className="aspect-video min-w-0 flex-[0_0_72%] rounded-2xl bg-rose-200 last:mr-9">
			{props.children}
		</div>
	);
};
