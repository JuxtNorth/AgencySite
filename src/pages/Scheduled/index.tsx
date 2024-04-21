import { FC } from 'react';
import { Footer, Nav } from '@/components';

// TODO: Move to Content directory
const embedSRCs = [
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	},
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	},
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	},
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	},
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	},
	{
		src: 'https://www.youtube.com/embed/OA3Txp94pjs?si=MBG5GpQunaQXFejd',
		title: 'Lorem Ipsum Doler Imet'
	}
];

export const Scheduled: FC = () => {
	return (
		<>
			<Nav />
			<main className="mt-16 p-snug md:p-relaxed">
				<section className="mx-auto max-w-[100rem] space-y-loose text-center">
					<div className="space-y-4">
						<h1 className="text-4xl font-bold text-blood-red md:text-5xl">
							Important Next Steps
						</h1>
						<p>Step 1: Watch this video as it is important before we speak</p>
					</div>
					<iframe
						width="560"
						height="315"
						className="mx-auto aspect-video h-auto w-[80%]"
						src="https://www.youtube.com/embed/OA3Txp94pjs?si=DqLTe_BIrBxF4XZN"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
					<p className="text-sm md:text-base">
						PS: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
						perferendis a dignissimos placeat quae.
					</p>
					<div className="flex justify-center gap-4">
						<button className="cursor-pointer rounded-full bg-surface-new px-5 py-2 font-display text-sm text-blue hover:brightness-125">
							Button 1
						</button>
						<button className="cursor-pointer rounded-full bg-surface-new px-5 py-2 font-display text-sm text-blood-red hover:brightness-125">
							Button 2
						</button>
						<button className="cursor-pointer rounded-full bg-surface-new px-5 py-2 font-display text-sm text-green hover:brightness-125">
							Button 3
						</button>
					</div>
					<div className="rounded-2xl bg-surface-new p-snug py-loose">
						<p className="mb-2 lg:mb-loose">
							Step 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias nesciunt consequatur distinctio.
						</p>
						<div className="mb-4 grid grid-flow-row gap-snug gap-y-12 px-snug md:grid-cols-2 lg:grid-cols-3">
							{embedSRCs.map(({ src, title }) => (
								<div className="h-full w-full">
									<iframe
										width="560"
										height="315"
										className="mb-2 size-full"
										src={src}
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									></iframe>
									<p className="text-blue">{title}</p>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-loose pt-loose">
						<h1 className="text-4xl font-semibold text-blood-red md:text-5xl">
							Our Members' Results
						</h1>
						<div className="grid grid-flow-row gap-loose md:grid-cols-2 lg:grid-cols-3">
							{/* Replace with images, preferably store the src's and alt atribs in an array and load it here with the same classNames */}
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
							<div className="aspect-[4/3] w-full rounded-2xl bg-rose-400 object-cover"></div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};
