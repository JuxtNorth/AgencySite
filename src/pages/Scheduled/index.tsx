import { FC } from 'react';

export const Scheduled: FC = () => {
	return (
		<main className="p-snug md:p-relaxed xl:p-relaxed">
			<section className="max-w-[100rem] space-y-4 text-center">
				<div className="space-y-4">
					<h1>Important Next Steps</h1>
					<p>Step 1: Watch this video as it is important before we speak</p>
				</div>
				<div className="aspect-video w-full rounded-2xl bg-blue-400"></div>
				<p>
					PS: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
					perferendis a dignissimos placeat quae.
				</p>
				<div className="flex justify-center gap-4">
					<button className="cursor-pointer rounded-full bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">
						Button 1
					</button>
					<button className="cursor-pointer rounded-full bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">
						Button 2
					</button>
					<button className="cursor-pointer rounded-full bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">
						Button 3
					</button>
				</div>
			</section>
		</main>
	);
};
