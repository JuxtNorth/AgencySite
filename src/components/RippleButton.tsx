import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';

export interface GlowButtonProps {
	className: string;
	children: ReactNode;
	variant?: 'a' | 'b' | 'c';
}

const variants = cva(
	'relative box-border overflow-hidden rounded-xl bg-slate-800 px-loose py-snug hover:ring-2  transition-all',
	{
		variants: {
			variant: {
				a: 'hover:bg-primary-varient hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--primary-varient),0.6)]',
				b: 'hover:bg-primary hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--primary),0.6)]',
				c: 'hover:bg-accent hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--accent),0.6)]'
			}
		}
	}
);

export const GlowButton: FC<GlowButtonProps> = (props) => {
	const { variant = 'a' } = props;

	return (
		<button className={cn(variants({ variant }), props.className)}>
			{props.children}
		</button>
	);
};
