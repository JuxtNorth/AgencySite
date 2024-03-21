import { FC } from 'react';

export const CaseStudies: FC = () => {
	return (
		<section className="m-4 rounded-2xl p-8 pt-16 text-center">
			<h1 className="text-4xl font-extrabold md:text-5xl">Case Study</h1>
			<h2 className="text-md md:text-lg">on client results</h2>
			<div className="mx-auto mt-12 w-[90%] space-y-2 md:w-[48%] md:space-y-4">
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="h-12 w-12 shrink-0 rounded-full bg-lime-400 md:h-14 md:w-14"></div>
					<h1 className="whitespace-nowrap text-3xl font-semibold md:text-3xl">
						Lorem Chaudhary →
					</h1>
				</div>
				<hr className="border-slate-300" />
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="h-12 w-12 shrink-0 rounded-full bg-lime-400 md:h-14 md:w-14"></div>
					<h1 className="whitespace-nowrap text-3xl font-semibold md:text-3xl">
						Lorem Sharma →
					</h1>
				</div>
			</div>
		</section>
	);
};
