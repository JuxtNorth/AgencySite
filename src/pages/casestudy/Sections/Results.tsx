import { FC } from 'react';
export interface ResultProps {}

export const Results: FC<ResultProps> = () => {
	return (
		<section className="grid grid-flow-row grid-cols-1 gap-snug md:grid-cols-2 lg:grid-cols-3">
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
			<div className="flex h-16 items-center justify-center rounded-full bg-red-200">
				<p className="font-semibold">Lorem ipsum</p>
			</div>
		</section>
	);
};
