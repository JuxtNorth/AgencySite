import { GoIcon } from '@/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: FC = () => {
	return (
		<div className="m-4 mx-auto max-w-[100rem] p-8 pt-16 text-center">
			<section className="size-full rounded-3xl bg-surface p-snug text-center md:rounded-[4.2rem] lg:p-relaxed lg:text-left">
				<h1 className="text-4xl lg:text-8xl">Case Study</h1>
				<h2 className="mb-loose text-xl lg:text-5xl">
					on client <span className="text-secondary">results</span>
				</h2>
				<div className="space-y-snug rounded-2xl bg-[#fff] p-snug py-loose text-xl font-semibold lg:space-y-loose lg:p-loose lg:py-relaxed lg:text-5xl">
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug md:pl-loose lg:pb-loose">
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/a">
							<h1 className="font-body text-slate-800">John Doe</h1>
						</Link>
						<GoIcon className="text-sm text-slate-800 lg:text-lg" />
					</div>
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug md:pl-loose lg:pb-loose">
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/b">
							<h1 className="font-body text-slate-800">Jane Doe</h1>
						</Link>
						<GoIcon className="text-sm text-slate-800 lg:text-lg" />
					</div>
					<div className="flex w-full items-center gap-snug border-b border-slate-600 pb-snug last:border-none last:pb-0 md:pl-loose lg:pb-loose">
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg"
							alt="An image of foo bar"
						/>
						<Link to="/casestudy/a">
							<h1 className="font-body text-slate-800">Lorem Ipsum</h1>
						</Link>
						<GoIcon className="text-sm text-slate-800 lg:text-lg" />
					</div>
				</div>
			</section>
		</div>
	);
};
