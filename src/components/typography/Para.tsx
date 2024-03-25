import { FC, type HTMLProps, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParaProps extends HTMLProps<HTMLParagraphElement> {
	children: ReactNode;
}

export const Para: FC<ParaProps> = ({ className, children, ...restProps }) => {
	return (
		<p
			className={cn(
				'text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl',
				className
			)}
			{...restProps}
		>
			{children}
		</p>
	);
};
