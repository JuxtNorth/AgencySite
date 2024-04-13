import { EyeIcon, GlitterIcon, MoneyIcon } from '@/icons';
import { FC } from 'react';
import { AnimatedStat } from '@/components/ui';

export const Impact: FC = () => {
	return (
		<section className="mx-auto z-10 my-16 w-full max-w-[100rem] rounded-3xl py-loose md:pb-24 md:pt-12 lg:px-2">
			<h2 className="text-center text-4xl font-semibold md:text-5xl mb-relaxed">
				Our Impact
			</h2>
			<div className="mt-loose md:flex flex-col items-center md:space-y-0">
				<div className='flex flex-col gap-relaxed md:gap-0 md:flex-row w-full justify-between mb-relaxed'>
					<div className="mx-auto text-center">
						<h2 className="gsap-header text-4xl font-bold text-primary md:text-7xl">
							<AnimatedStat target={2400000} />+
						</h2>
						<p className="gsap-para text-sm text-muted">
							<EyeIcon className="mr-1 inline text-primary" />
							organic views
						</p>
					</div>
					<div className="mx-auto text-center">
						<h2 className="gsap-header text-4xl font-bold text-accent md:text-7xl">
							<AnimatedStat target={1200000} />+
						</h2>
						<p className="gsap-para text-sm text-muted">
							<GlitterIcon className="mr-1 inline text-accent" />
							gained followers
						</p>
					</div>
				</div>
				<div className="mx-auto text-center">
					<h2 className="gsap-header text-4xl font-bold text-secondary md:text-7xl">
						&#36;
						<AnimatedStat target={400000} />+
					</h2>
					<p className="gsap-para text-sm text-muted">
						<MoneyIcon className="mr-1 inline text-secondary" />
						revenue generated
					</p>
				</div>
			</div>
		</section>
	);
};
