import { FC } from 'react';

interface TestimonialProps {}

export const Testimonial: FC<TestimonialProps> = () => {
	return (
		<article className="w-96 shrink-0 space-y-4 rounded-2xl bg-white p-8 shadow-md md:w-[32rem]">
			<header className="flex justify-between">
				<div className="flex gap-2">
					<div className="h-9 w-9 rounded-full bg-pink-400"></div>
					<div className="leading-tight">
						<h1 className="font-semibold">Astro Dog</h1>
						<p className="text-xs">Professional Ipsum</p>
					</div>
				</div>
				<p className="text-xs text-muted">1 / 5</p>
			</header>
			<section>
				<p className="ml-2 text-sm leading-tight">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugiat
					ipsa amet possimus dolore earum totam praesentium placeat, repellat!
					Quis optio fugiat, adipisci obcaecati, recusandae quod cupiditate id
					omnis reprehenderit.
				</p>
			</section>
		</article>
	);
};

export * from './ClientAvatar';
