import { FC } from 'react';
import { HeartIcon } from '@/icons';

const SocialLink: FC = () => {
	return (
		<li className="h-8 w-8 rounded-lg bg-gray-700 md:h-10 md:w-10 md:rounded-xl">
			<a href=""></a>
		</li>
	);
};

export const Footer: FC = () => {
	return (
		<footer className="flex justify-between p-8 md:p-16">
			<section className="flex flex-col items-start space-y-4 md:space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl font-normal md:w-56 md:w-72 md:text-5xl">
						Hi-Reach Media
					</h1>
					<p className="text-left font-light md:text-2xl">
						Email us at <a href="mailto:foo@bar.com">foo@bar.com</a>{' '}
					</p>
					<ul className="flex gap-2">
						<SocialLink></SocialLink>
						<SocialLink></SocialLink>
						<SocialLink></SocialLink>
					</ul>
				</div>
				<p className="md:text-xl">2020 &copy; All rights reserved</p>
			</section>
			<section className="flex flex-col md:justify-between">
				<ul className="mx-auto">
					<li className="text-sm md:text-xl">
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a className="text-sm md:text-xl" href="#">
							Terms and Conditions
						</a>
					</li>
					<li>
						<a className="text-sm md:text-xl" href="#">
							Refund Policy
						</a>
					</li>
				</ul>
				<p className="mx-auto flex items-center gap-1 text-sm md:mx-0 md:text-xl">
					Made with <HeartIcon className="text-rose-500" /> by Kiron Dey
				</p>
			</section>
		</footer>
	);
};
