import { EyeIcon, GlitterIcon, MoneyIcon } from '@/icons';
import { FC } from 'react';
import { AnimatedStat } from '@/components/ui';

export const Impact: FC = () => {
	return (
		<section className="z-10 mx-auto my-16 w-full max-w-[100rem] py-loose [background-image:url('/plus.svg')] [background-size:36px_36px] md:pb-24 md:pt-12 lg:px-2">
			<h2 className="mb-relaxed text-center text-4xl font-semibold md:text-5xl">
				Our Impact
			</h2>
			<div className="mt-loose flex-col items-center md:flex md:space-y-0">
				<div className="mb-16 flex w-full flex-col justify-between gap-16 md:flex-row md:gap-0">
					<div className="mx-auto text-center">
						<h2 className="_anime_heading text-4xl font-bold text-[#d93667] md:text-7xl">
							<AnimatedStat target={2400000} />+
						</h2>
						<p className="_anime_paragraph text-sm text-muted">
							<EyeIcon className="mr-1 inline text-[#d93667]" />
							organic views
						</p>
					</div>
					<div className="mx-auto text-center">
						<h2 className="_anime_heading text-4xl font-bold text-blood-red md:text-7xl">
							<AnimatedStat target={1200000} />+
						</h2>
						<p className="_anime_paragraph text-sm text-muted">
							<GlitterIcon className="mr-1 inline text-blood-red" />
							gained followers
						</p>
					</div>
				</div>
				<div className="mx-auto text-center">
					<h2 className="_anime_heading text-4xl font-bold text-[#d95736] md:text-7xl">
						&#36;
						<AnimatedStat target={400000} />+
					</h2>
					<p className="_anime_paragraph text-sm text-muted">
						<MoneyIcon className="mr-1 inline text-[#d95736]" />
						revenue generated
					</p>
				</div>
			</div>
		</section>
	);
};
