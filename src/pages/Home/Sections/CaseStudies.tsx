import { FC } from 'react';

export const CaseStudies: FC = () => {
	return (
		<section className="m-4 mx-auto max-w-[100rem] rounded-2xl p-8 pt-16 text-center">
			<h2 className="font-semibold">Case Study</h2>
			<p>on client results</p>
			<div className="mx-auto mt-12 w-[90%] space-y-2 md:w-[48%] md:space-y-4">
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="h-10 w-10 shrink-0 rounded-full bg-lime-400 md:h-14 md:w-14"></div>
					<h3 className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
						Lorem Chaudhary →
					</h3>
				</div>
				<hr className="border-slate-300" />
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="h-10 w-10 shrink-0 rounded-full bg-lime-400 md:h-14 md:w-14"></div>
					<h3 className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
						Lorem Sharma →
					</h3>
				</div>
			</div>
		</section>
	);
};
