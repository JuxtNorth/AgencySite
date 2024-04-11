import { GoIcon } from '@/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: FC = () => {
	return (
		<div className="m-4 mx-auto max-w-[100rem] p-8 pt-16 text-center">
			<section className="size-full rounded-3xl md:rounded-[4.2rem] bg-surface p-snug lg:p-relaxed text-center lg:text-left">
				<h1 className="text-4xl lg:text-8xl">Case Study</h1>
				<h2 className="mb-loose text-xl lg:text-5xl">
					on client <span className="text-secondary">results</span>
				</h2>
				<div className="space-y-snug lg:space-y-loose rounded-2xl bg-[#fff] lg:p-loose p-snug py-loose lg:py-relaxed text-xl lg:text-5xl font-semibold">
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug lg:pb-loose md:pl-loose">
						<img
							className="lg:mr-snug aspect-square h-12 lg:h-20 rounded-full object-cover"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/a">
							<h1 className="font-body text-slate-800">John Doe</h1>
						</Link>
						<GoIcon className="lg:text-lg text-sm text-slate-800" />
					</div>
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug lg:pb-loose md:pl-loose">
						<img
							className="lg:mr-snug aspect-square h-12 lg:h-20 rounded-full object-cover"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/b">
							<h1 className="font-body text-slate-800">Jane Doe</h1>
						</Link>
						<GoIcon className="lg:text-lg text-sm text-slate-800" />
					</div>
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug lg:pb-loose md:pl-loose last:border-none last:pb-0">
						<img
							className="lg:mr-snug aspect-square h-12 lg:h-20 rounded-full object-cover"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/a">
							<h1 className="font-body text-slate-800">Lorem Ipsum</h1>
						</Link>
						<GoIcon className="lg:text-lg text-sm text-slate-800" />
					</div>
				</div>
			</section>
		</div>
	);
};
