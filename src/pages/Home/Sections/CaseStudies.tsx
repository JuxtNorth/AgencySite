import { FC } from 'react';

export const CaseStudies: FC = () => {
	return (
		<section className="m-4 rounded-2xl bg-pink-200 p-8 pt-16">
			<h1 className="pb-2 text-3xl font-semibold md:text-5xl">Case Study on</h1>
			<h2 className="mb-4 text-5xl font-bold text-rose-500 md:mb-8 md:text-7xl">
				Client Results
			</h2>
			<div className="space-y-4 rounded-2xl bg-white p-4 text-2xl md:space-y-8 md:p-8 md:text-4xl">
				<h1 className="pl-2">Lorem Ipsum →</h1>
				<hr />
				<h1 className="pl-2">Doler Imet →</h1>
			</div>
		</section>
	);
};
