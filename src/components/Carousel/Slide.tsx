import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const slideVariants = cva(
	'max-h-screen flex items-center justify-center text-7xl text-slate-700 font-bold rounded-2xl',
	{
		variants: {
			variant: {
				horizontal: 'w-full aspect-video',
				vertical: 'h-full md:w-64 aspect-[3/4]'
			}
		}
	}
);

const containerVariants = cva(
	'flex h-[24rem] min-w-0 items-center justify-center rounded-2xl last:mr-24 md:rounded-3xl md:p-0',
	{
		variants: {
			variant: {
				horizontal: 'flex-[0_0_86%] md:flex-[0_0_48rem]',
				vertical: 'flex-[0_0_auto] md:flex-[0_0_auto]'
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
		<div className={cn(containerVariants({ variant }), props.className)}>
			<div className={slideVariants({ variant })}>{props.children}</div>
		</div>
	);
};
