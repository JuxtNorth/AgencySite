import { FC, ReactNode } from "react";

export interface SlideProps {
	children: ReactNode;
}

export const Slide: FC<SlideProps> = props => {
	return (
		<div className="aspect-video w-[90%] min-w-0 flex-[0_0_80%] rounded-2xl bg-rose-100 last:mr-4">
			{props.children}
		</div>
	);
};
