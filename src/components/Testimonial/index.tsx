import { FC, ReactNode, useState } from 'react';
import { Video } from '@/components';
import { EyeLightIcon, MoneyIcon, TrendIcon } from '@/icons';

const Stat: FC<{ children: ReactNode; text: string }> = ({
	children,
	text
}) => {
	return (
		<div className="flex items-center gap-2">
			<div className="rounded-full bg-[#b2ffa3] p-2">{children}</div>
			<p className="text-[12px] font-semibold lg:text-[16px]">{text}</p>
		</div>
	);
};

export const TestimonialCard: FC = () => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="flex min-h-[32rem] min-w-0 max-w-[100rem] flex-[0_0_100%] p-loose md:px-24 lg:min-h-[30rem] lg:px-60">
			<div
				className="relative h-fit min-h-full w-full rounded-3xl bg-[#ebfddd] transition-[rotate] duration-300 [perspective:1000px] [transform-style:preserve-3d] [&[data-flipped='true']]:[rotate:y_180deg]"
				data-flipped={flipped}
			>
				<article className="absolute flex h-full w-full flex-col p-6 [backface-visibility:hidden] md:flex-row md:gap-loose md:p-loose">
					<div className="hidden aspect-[11.5/16] h-full xl:block">
						<Video
							className="size-full overflow-clip rounded-3xl object-cover"
							poster="https://ik.imagekit.io/Hireachmedia/OurWork/thumbnails/tr:pr-true,q-80,w-580/poster-2.jpg"
						/>
					</div>
					<div className="flex min-h-full flex-col justify-between">
						<header className="flex w-full justify-between">
							<div className="flex items-center gap-2">
								<div className="h-12 w-12 rounded-full bg-green-200" />
								<div className="flex flex-col text-left leading-tight">
									<h1 className="text-xl font-bold">Lorem Ipsum</h1>
									<p className="text-sm">Lorem Ipsum</p>
								</div>
							</div>
							<div className="flex max-h-loose items-center rounded-full bg-[#b2ffa3] px-snug">
								<p className="mt-px font-semibold">1.5M</p>
							</div>
						</header>
						<p className="pl-tight text-left font-display text-[18px] font-semibold leading-snug lg:leading-relaxed xl:text-3xl ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
							molestiae excepturi earum tenetur porro iste hic saepe amet
							voluptatibus facilis, id minima optio!
						</p>
						<footer className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-0">
							<section className="flex w-full justify-between">
								<Stat text="400k+">
									<TrendIcon />
								</Stat>
								<Stat text="12M+">
									<EyeLightIcon />
								</Stat>
								<Stat text="$60k+">
									<MoneyIcon />
								</Stat>
							</section>
							<button
								className="w-full rounded-full bg-[#b2ffa3] py-3 font-display text-xs font-semibold md:hidden md:text-sm lg:text-base xl:text-lg"
								onClick={() => setFlipped(!flipped)}
							>
								See Work
							</button>
						</footer>
					</div>
				</article>
				<article className="absolute flex h-full w-full items-center justify-center [backface-visibility:hidden] [rotate:y_180deg]">
					<div className="size-full rounded-3xl bg-rose-100">
						<Video />
					</div>
				</article>
			</div>
		</div>
	);
};
