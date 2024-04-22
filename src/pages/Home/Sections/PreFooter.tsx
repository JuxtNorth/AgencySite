import { GlitterIcon } from '@/icons';
import { FC } from 'react';

export const PreFooter: FC = () => {
	return (
		<section className="relative mx-auto max-w-[100rem] px-snug pb-32 text-center lg:mt-24 lg:px-loose lg:py-32">
			<div className="absolute left-0 top-0 -z-[1] size-full [background-image:url('/plus-long.svg')] [background-size:48px_48px]">
				<div className="size-full bg-[radial-gradient(ellipse_at_center,transparent,rgb(var(--background)))] mix-blend-multiply" />
			</div>
			<h1 className="mb-24 text-3xl font-bold lg:text-6xl">
				Enough of generic videos edited for the sake of editing
			</h1>
			<p className="pb-12">
				Pick a plan of your choice today and spice up your{' '}
				<span className="continuous-gradient bg-clip-text text-transparent">
					online presence
				</span>{' '}
				today.
			</p>
			<button className="relative overflow-hidden rounded-2xl px-loose py-snug font-display text-xl after:absolute after:-bottom-5 after:left-[50%] after:-z-[1] after:block after:size-5 after:-translate-x-[50%] after:rounded-full after:bg-green after:transition-transform after:duration-500 after:content-[''] hover:after:scale-[15] before:content-[''] before:size-52 before:-z-[1] before:bg-blue  before:absolute before:top-0 before:left-0">
				<GlitterIcon className="mr-2 inline transition-colors" />
				Start now
			</button>
		</section>
	);
};
