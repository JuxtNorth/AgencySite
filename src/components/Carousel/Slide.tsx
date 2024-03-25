import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const slideVariants = cva(
	'max-h-screen bg-lime-200 flex items-center justify-center text-7xl text-slate-700 font-bold rounded-2xl',
	{
		variants: {
			variant: {
				horizontal: 'w-full aspect-video',
				vertical: 'h-full md:h-fit md:w-56 aspect-[9/16]'
			}
		}
	}
);

const containerVariants = cva(
	'flex h-[28rem] min-w-0 items-center justify-center rounded-2xl last:mr-24 md:h-[32rem] md:rounded-3xl md:p-0',
	{
		variants: {
			variant: {
				horizontal: 'flex-[0_0_86%] md:flex-[0_0_48rem]',
				vertical: 'flex-[0_0_48%] md:flex-[0_0_22rem]'
			}
		}
	}
);

export interface SlideProps {
	children: ReactNode;
	variant?: 'vertical' | 'horizontal';
	className?: string;
}

export const Slide: FC<SlideProps> = (props) => {
	const { variant = 'horizontal' } = props;

	return (
		<div className={containerVariants({ variant })}>
			<div className={slideVariants({ variant })}>{props.children}</div>
		</div>
	);
};
