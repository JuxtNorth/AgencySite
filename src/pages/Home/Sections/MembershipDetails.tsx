import { FC } from 'react';

const Card: FC = () => {
	return (
		<article className="mx-auto w-64 text-center md:mx-0 md:w-fit">
			<h1 className="mx-auto w-48 text-3xl font-semibold">Design Board</h1>
			<p className="text-sm leading-tight">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum error,
				sed et sit magnam unde.
			</p>
		</article>
	);
};

export const MembershipDetails: FC = () => {
	return (
		<section className="grid grid-cols-1 grid-rows-6 gap-8 p-8 md:grid-cols-3 md:grid-rows-2">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</section>
	);
};
