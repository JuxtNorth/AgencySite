import { FC, ReactNode, useState } from 'react';
import { Video } from '@/components';
import { CrossIcon, EyeLightIcon, MoneyIcon, TrendIcon } from '@/icons';

const Stat: FC<{ children: ReactNode; text: string }> = ({
	children,
	text
}) => {
	return (
		<div className="flex items-center gap-2">
			<div className="rounded-full bg-blood-red p-2">{children}</div>
			<p className="text-[12px] font-semibold lg:text-[16px]">{text}</p>
		</div>
	);
};

export interface TestimonialCardProps {
	author: string;
	authorOccupation: string;
	authorFollowerCount: string;
	testimonial: string;
	benefitedBy: {
		reach: string;
		views: string;
		revenue: string;
	};
	index: number;
}

export const TestimonialCard: FC<TestimonialCardProps> = (props) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="flex min-h-[32rem] min-w-0 max-w-[100rem] flex-[0_0_100%] p-loose md:px-24 lg:min-h-[30rem] lg:px-60">
			<div
				className="relative h-fit min-h-full w-full rounded-3xl bg-surface-new transition-[rotate] duration-300 [perspective:1000px] [transform-style:preserve-3d] [&[data-flipped='true']]:[rotate:y_180deg]"
				data-flipped={flipped}
			>
				<article className="absolute flex h-full w-full flex-col p-6 [backface-visibility:hidden] md:flex-row md:gap-loose md:p-loose">
					<div className="hidden aspect-[11.5/16] h-full xl:block">
						<Video
							className="size-full overflow-clip rounded-3xl object-cover"
							poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${props.index}.jpg`}
							src={`https://ik.imagekit.io/Hireachmedia/Testimonials/${props.index}.mp4`}
							controls
							observe
						/>
					</div>
					<div className="flex min-h-full flex-col justify-between">
						<header className="flex w-full justify-between">
							<div className="flex items-center gap-2">
								<div className="h-12 w-12 rounded-full bg-blood-red">
									<img
										width={120}
										className="size-full rounded-full object-cover"
										src={`https://ik.imagekit.io/Hireachmedia/Testimonials/profile/tr:pr-true,w-120,q-80/${props.index}.jpg`}
										alt={`An image of ${props.author}`}
									/>
								</div>
								<div className="flex flex-col text-left leading-tight">
									<h1 className="text-xl font-bold text-blood-red">
										{props.author}
									</h1>
									<p className="text-sm text-muted">{props.authorOccupation}</p>
								</div>
							</div>
							<div className="flex max-h-loose items-center rounded-full bg-blood-red px-snug">
								<p className="mt-px font-display font-bold lg:text-sm">
									{props.authorFollowerCount}
								</p>
							</div>
						</header>
						<p className="pl-tight text-left font-display text-[18px] font-semibold leading-snug lg:leading-relaxed xl:text-3xl ">
							{props.testimonial}
						</p>
						<footer className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-0">
							<section className="flex w-full justify-between">
								<Stat text={props.benefitedBy.reach}>
									<TrendIcon />
								</Stat>
								<Stat text={props.benefitedBy.views}>
									<EyeLightIcon />
								</Stat>
								<Stat text={props.benefitedBy.revenue}>
									<MoneyIcon />
								</Stat>
							</section>
							<button
								className="w-full rounded-full bg-surface-new py-3 font-display text-xs font-semibold brightness-125 hover:brightness-150 md:hidden md:text-sm lg:text-base xl:text-lg"
								onClick={() => setFlipped(true)}
							>
								See Work
							</button>
						</footer>
					</div>
				</article>
				<article className="absolute flex h-full w-full items-center justify-center [backface-visibility:hidden] [rotate:y_180deg]">
					<div className="relative size-full overflow-hidden rounded-3xl">
						<button
							onClick={() => setFlipped(false)}
							className="absolute right-0 top-0 z-[1] m-4 rounded-full bg-blood-red p-2.5 text-lg"
						>
							<CrossIcon />
						</button>
						<Video
							className="size-full object-cover"
							src={`https://ik.imagekit.io/Hireachmedia/Testimonials/${props.index}.mp4`}
							poster={`https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-${props.index}.jpg`}
							shouldPause={!flipped}
							controls
							observe
						/>
					</div>
				</article>
			</div>
		</div>
	);
};
