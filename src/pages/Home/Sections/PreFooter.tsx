import { GlitterIcon } from '@/icons';
import { FC } from 'react';

export const PreFooter: FC = () => {
	return (
		<section className="relative mx-auto mt-24 max-w-[100rem] px-snug lg:px-loose py-32 text-center">
			<div className="absolute left-0 top-0 -z-[1] size-full [background-image:url('/plus-long.svg')] [background-size:48px_48px]">
				<div className="size-full bg-[radial-gradient(ellipse_at_center,transparent,rgb(var(--background)))] mix-blend-multiply" />
			</div>
			<h1 className="mb-24 text-3xl lg:text-6xl font-bold">
				Enough of generic videos edited for the sake of editing
			</h1>
			<p className="pb-12">
				Pick a plan of your choice today and spice up your{' '}
				<span className="continuous-gradient bg-clip-text text-transparent">
					online presence
				</span>{' '}
				today.
			</p>
			<button className="relative overflow-hidden rounded-2xl px-loose py-snug font-display text-xl outline outline-1 outline-[#667] before:absolute before:-bottom-5 before:left-[50%] before:-z-[1] before:block before:size-5 before:-translate-x-[50%] before:rounded-full before:bg-primary before:transition-transform before:duration-500 before:content-[''] hover:outline-surface hover:before:scale-[15]">
				<GlitterIcon className="mr-2 inline text-secondary" />
				Start now
			</button>
		</section>
	);
};
