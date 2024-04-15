import { GoIcon } from '@/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: FC = () => {
	return (
		<div className="m-4 mx-auto max-w-[100rem] p-2 pt-16 text-center lg:p-8">
			<section className="size-full rounded-3xl p-snug text-center md:rounded-[4.2rem] lg:p-loose">
				<h1 className="text-4xl lg:text-7xl">Case Study</h1>
				<h2 className="mb-loose text-xl lg:text-4xl">
					on client <span className="text-secondary">results</span>
				</h2>
				<div className="space-y-snug rounded-2xl bg-surface p-snug text-lg font-semibold lg:space-y-0 lg:p-loose lg:py-loose lg:text-3xl">
				<Link
						to="/casestudy/b"
						className="flex w-full items-center gap-snug border-b border-slate-600 py-2 hover:bg-white/10 md:pl-loose lg:py-7"
					>
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/tr:q-80,pr-true,w-320/profile.jpg"
							alt="An image of foo bar"
						/>
						<h1 className="font-body text-[currentColor]">Jane Doe</h1>
						<GoIcon className="text-sm lg:text-lg" />
					</Link>
					<Link
						to="/casestudy/b"
						className="flex w-full items-center gap-snug border-b border-slate-600 py-2 hover:bg-white/10 md:pl-loose lg:py-7"
					>
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/tr:q-80,pr-true,w-320/profile.jpg"
							alt="An image of foo bar"
						/>
						<h1 className="font-body text-[currentColor]">John Doe</h1>
						<GoIcon className="text-sm lg:text-lg" />
					</Link>
					<Link
						to="/casestudy/c"
						className="flex w-full items-center gap-snug py-2 hover:bg-white/10 md:pl-loose lg:py-7"
					>
						<img
							className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/tr:q-80,pr-true,w-320/profile.jpg"
							alt="An image of foo bar"
						/>
						<h1 className="font-body text-[currentColor]">Jane Doe</h1>
						<GoIcon className="text-sm lg:text-lg" />
					</Link>
				</div>
			</section>
		</div>
	);
};
