import { GoIcon } from '@/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: FC = () => {
	return (
		<section className="m-4 mx-auto max-w-[100rem] rounded-2xl p-8 pt-16 text-center">
			<h2 className="font-bold">Case Study</h2>
			<p>on client results</p>
			<div className="mx-auto mt-12 w-[90%] space-y-2 md:w-[48%] md:space-y-4">
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="size-10 shrink-0 overflow-hidden rounded-full md:size-14">
						<img
							width={300}
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/2/tr:q-2,w-300,pr-true/profile.jpg"
							alt="An image of lorem ipsum"
						/>
					</div>
					<h3 className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
						<Link to="/casestudy/a">Lorem Chaudhary <GoIcon className='inline text-xl ml-4' /></Link>
					</h3>
				</div>
				<hr className="border-slate-300" />
				<div className="flex h-12 items-center gap-5 md:gap-8">
					<div className="size-10 shrink-0 overflow-hidden rounded-full md:size-14">
						<img
							width={300}
							src="https://ik.imagekit.io/Hireachmedia/CaseStudy/1/tr:q-2,w-300,pr-true/profile.jpg"
							alt="An image of lorem ipsum"
						/>
					</div>
					<h3 className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
						<Link to="/casestudy/b">Lorem Sharma <GoIcon className='inline text-xl ml-4' /></Link>
					</h3>
				</div>
			</div>
		</section>
	);
};
