import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export interface GlowButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className: string;
	children: ReactNode;
	variant?: 'a' | 'b' | 'c';
}

const variants = cva(
	'relative box-border overflow-hidden rounded-xl px-loose py-snug hover:ring-2 transition-all',
	{
		variants: {
			variant: {
				a: 'bg-blue hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--blue),0.6)]',
				b: 'bg-blood-red hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--blood-red),0.6)]',
				c: 'bg-green hover:[box-shadow:0px_0px_4px_1px_#fff2,0px_0px_32px_4px_rgba(var(--green),0.6)]'
			}
		}
	}
);

export const GlowButton: FC<GlowButtonProps> = ({
	variant = 'a',
	children,
	className,
	...restProps
}) => {
	return (
		<button {...restProps} className={cn(variants({ variant }), className)}>
			{children}
		</button>
	);
};
