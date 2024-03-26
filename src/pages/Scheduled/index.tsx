import { FC } from 'react';
import { Video } from '@/components';

export const Scheduled: FC = () => {
	return (
		<main className="p-snug md:p-relaxed">
			<section className="mx-auto max-w-[100rem] space-y-loose text-center">
				<div className="space-y-4">
					<h1>Important Next Steps</h1>
					<p>Step 1: Watch this video as it is important before we speak</p>
				</div>
				<div className="mx-auto aspect-video w-full max-w-[52rem] rounded-2xl bg-blue-400"></div>
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
				<div className="h-full space-y-4 rounded-2xl bg-pink-100 p-snug">
					<p>
						Step 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Molestias nesciunt consequatur distinctio.
					</p>
					<div className="grid grid-flow-row gap-snug md:grid-cols-2 lg:grid-cols-3">
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
					</div>
				</div>
				<div className="pt-loose">
					<h1>Our Members' Results</h1>
					<div className="mb-snug grid grid-flow-row gap-snug md:grid-cols-2 lg:grid-cols-3">
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
						<Video placeContentAtBottom>
							<h4 className="mb-snug">Lorem ipsum dolor sit amet.</h4>
						</Video>
					</div>
				</div>
				<div className="grid grid-flow-row gap-loose md:grid-cols-2">
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
					<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400"></div>
				</div>
			</section>
		</main>
	);
};
