import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const statIconVarients = cva('rounded-full p-2', {
	variants: {
		variant: {
			a: 'bg-blue',
			b: 'bg-blood-red',
			c: 'bg-green'
		}
	}
});

export interface StatProps {
	children: ReactNode;
	text: string;
	variant?: 'a' | 'b' | 'c';
}

export const Stat: FC<StatProps> = ({ children, text, variant = 'a' }) => {
	return (
		<div className="flex items-center gap-2">
			<div className={statIconVarients({ variant })}>{children}</div>
			<p className="text-[12px] font-semibold lg:text-[16px]">{text}</p>
		</div>
	);
};
