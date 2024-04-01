import { Grid } from '@/components/ui';
import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<header className="mx-auto flex min-h-[min(100vh,72rem)] max-w-[100rem] flex-col items-center justify-center">
			<div className="relative mb-2 text-center text-[1.86rem] font-semibold leading-[2.3rem]">
				<div className='absolute -top-[42px]'>
					<Grid />
				</div>
				<h1>FORGING</h1>
				<h1 className="to-secondary inline-block bg-gradient-to-r from-primary from-10% bg-clip-text text-transparent">
					PERSONAL BRAND
				</h1>
				<h1>
					FOR{' '}
					<span className="inline-block bg-gradient-to-r from-accent to-primary to-60% bg-clip-text text-transparent">
						SOCIAL VIRALITY
					</span>
				</h1>
			</div>
			<p className="w-[80%] text-center text-xs">
				Subscription here makes brands go viral there, grab your seats.
			</p>
			<a
				className="mt-16 rounded-lg border border-primary px-8 py-4 text-xs"
				href="#"
			>
				See Plans
			</a>
		</header>
	);
};
