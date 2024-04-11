import { GoIcon } from '@/icons';
import { FC } from 'react';

export const CaseStudies: FC = () => {
	return (
		<div className="m-4 mx-auto max-w-[100rem] p-8 pt-16 text-center">
			<section className="size-full rounded-[4.2rem] bg-surface p-relaxed text-left">
				<h1 className="text-8xl">Case Study</h1>
				<h2 className="text-5xl mb-loose">
					on client <span className="text-secondary">results</span>
				</h2>
				<div className="bg-[#fff] p-loose py-relaxed rounded-[3.8rem] space-y-loose text-5xl font-semibold">
					<div className='flex gap-snug w-full border-b border-slate-600 pb-loose pl-loose items-center'>
						<img className='aspect-square rounded-full object-cover h-20 mr-snug' src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg" alt="An image of foo bar" />
						<h1 className='font-body text-slate-800'>John Doe</h1>
						<GoIcon className='text-slate-800 text-lg'/>
					</div>
					<div className='flex gap-snug w-full border-b border-slate-600 pb-loose pl-loose items-center'>
						<img className='aspect-square rounded-full object-cover h-20 mr-snug' src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/profile.jpg" alt="An image of foo bar" />
						<h1 className='font-body text-slate-800'>Jane Doe</h1>
						<GoIcon className='text-slate-800 text-lg'/>
					</div>
					<div className='flex gap-snug w-full border-b border-slate-600 pb-loose pl-loose items-center last:border-none last:pb-0'>
						<img className='aspect-square rounded-full object-cover h-20 mr-snug' src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/profile.jpg" alt="An image of foo bar" />
						<h1 className='font-body text-slate-800'>Lorem Ipsum</h1>
						<GoIcon className='text-slate-800 text-lg'/>
					</div>
				</div>
			</section>
		</div>
	);
};
