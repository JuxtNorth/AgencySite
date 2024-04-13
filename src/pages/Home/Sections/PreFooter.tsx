import { GlitterIcon } from '@/icons';
import { FC } from 'react';

export const PreFooter: FC = () => {
	return (
		<section className='max-w-[100rem] text-center mx-auto p-loose mt-36'>
			<h1 className='text-6xl font-bold mb-relaxed'>Enough of generic videos edited for the sake of editing</h1>
			<p className='pb-loose continuous-gradient bg-clip-text text-transparent'>
				Pick a plan of your choice today and spice up your online presence
				today.
			</p>
			<button className='text-xl rounded-2xl border border-surface px-loose py-snug'><GlitterIcon className='inline mr-2'/>Start now</button>
		</section>
	);
};
