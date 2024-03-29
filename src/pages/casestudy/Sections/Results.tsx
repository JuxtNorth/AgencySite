import { FC } from 'react';
export interface ResultProps {}

export const Results: FC<ResultProps> = () => {
	return (
		<section className="grid grid-flow-row grid-cols-1 gap-snug md:grid-cols-2 lg:grid-cols-3">
			<div className="h-16 rounded-2xl bg-rose-500"></div>
			<div className="h-16 rounded-2xl bg-rose-500"></div>
			<div className="h-16 rounded-2xl bg-rose-500"></div>
			<div className="h-16 rounded-2xl bg-rose-500"></div>
			<div className="h-16 rounded-2xl bg-rose-500"></div>
			<div className="h-16 rounded-2xl bg-rose-500"></div>
		</section>
	);
};
