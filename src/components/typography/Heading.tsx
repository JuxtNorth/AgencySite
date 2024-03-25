import { FC, type HTMLProps, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
	children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({
	className,
	children,
	...restProps
}) => {
	return (
		<h1
			className={cn(
				'text-[2.5rem] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl',
				className
			)}
			{...restProps}
		>
			{children}
		</h1>
	);
};
