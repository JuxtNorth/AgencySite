import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { Stars } from '@/components/ui';

export interface WorkflowCardProps {
	serialNo: string;
	header: string;
	description: string;
	aesthetics?: 'a' | 'b' | 'c';
}

const cardVariants = cva('size-8 rotate-45 rounded-lg', {
	variants: {
		aesthetics: {
			a: 'bg-primary [box-shadow:0px_0px_8px_4px_rgba(var(--primary),0.5),0px_0px_9px_12px_rgba(var(--primary),0.2)]',
			b: 'bg-accent [box-shadow:0px_0px_8px_4px_rgba(var(--accent),0.5),0px_0px_9px_12px_rgba(var(--accent),0.2)]',
			c: 'bg-secondary [box-shadow:0px_0px_8px_4px_rgba(var(--secondary),0.5),0px_0px_9px_12px_rgba(var(--secondary),0.2)]'
		}
	}
});

const blobVariants = cva('absolute rounded-full', {
	variants: {
		type: {
			a: 'size-24 blur-[48px] bottom-0 right-0 bg-primary',
			b: 'size-36 blur-[64px] bottom-0 right-12 bg-accent',
			c: 'size-24 blur-[50px] bottom-0 right-0 bg-secondary'
		}
	}
});

const containerVariants = cva(
	'relative mx-auto flex aspect-[3/3.6] w-[80%] max-h-[28rem] flex-col justify-between overflow-hidden rounded-3xl bg-surface p-6 md:w-full',
	{
		variants: {
			type: {
				a: '-rotate-[6deg]',
				b: 'rotate-[5deg]',
				c: '-rotate-[7deg]'
			}
		}
	}
);

export const WorkflowCard: FC<WorkflowCardProps> = (props) => {
	const { aesthetics = 'a' } = props;

	return (
		<div className={containerVariants({ type: aesthetics })}>
			<div className={cardVariants({ aesthetics })} />
			<div className="z-10">
				<p className="font-display font-semibold text-muted md:text-lg">
					{props.serialNo}
				</p>
				<h1 className="text-3xl md:text-2xl lg:text-[2.5rem] lg:leading-[108%]">
					{props.header}
				</h1>
			</div>
			<div className="absolute bottom-0 right-0 h-48 w-48">
				<Stars seed={Number(props.serialNo) + 1} />
			</div>
			<div className={blobVariants({ type: aesthetics })} />
		</div>
	);
};
