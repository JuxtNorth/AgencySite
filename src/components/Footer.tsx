import { FC } from 'react';
import { HeartIcon } from '@/icons';
import { LinkedInIcon, XIcon, InstagramIcon } from '@/icons';
import { SocialLink } from '@/components/ui';

export const Footer: FC = () => {
	return (
		<div className="h-fit w-full bg-surface">
			<footer className="mx-auto mt-relaxed flex max-w-[100rem] justify-between p-8 md:p-16">
				<section className="flex flex-col items-start space-y-2 md:space-y-8">
					<div className=" md:space-y-4">
						<h1 className="w-44 text-xl font-normal md:w-72 md:text-4xl">
							Hi-Reach Media
						</h1>
						<p className="pb-snug text-left text-xs font-light md:text-2xl">
							Email us at <a href="mailto:foo@bar.com">foo@bar.com</a>{' '}
						</p>
						<ul className="flex gap-2">
							<SocialLink to="#">
								<LinkedInIcon className="text-[#00a0dc]" />
							</SocialLink>
							<SocialLink to="#">
								<XIcon />
							</SocialLink>
							<SocialLink to="#">
								<InstagramIcon className="text-rose-500" />
							</SocialLink>
						</ul>
					</div>
					<p className="pt-snug text-xs md:text-xl">
						2024 &copy; All rights reserved
					</p>
				</section>
				<section className="flex flex-col justify-between pt-1">
					<ul className="mx-auto w-full space-y-1.5 text-xs md:text-xl">
						<li>
							<a className="hover:underline" href="/privacy">
								Privacy Policy
							</a>
						</li>
						<li>
							<a className="hover:underline" href="/terms">
								Terms and Conditions
							</a>
						</li>
						<li>
							<a className="hover:underline" href="/refund-policy">
								Refund Policy
							</a>
						</li>
					</ul>
					<p className="mx-auto flex items-center gap-1 whitespace-nowrap text-xs md:mx-0 md:text-xl">
						Made with <HeartIcon className="text-rose-500" /> by Kiron Dey
					</p>
				</section>
			</footer>
		</div>
	);
};
