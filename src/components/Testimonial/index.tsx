import { FC, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';

export const TestimonialCard: FC = () => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="flex min-h-[32rem] min-w-0 max-w-[100rem] flex-[0_0_100%] p-loose md:px-24 lg:min-h-[30rem] lg:px-60">
			<div
				className="relative h-fit min-h-full w-full rounded-3xl bg-[#B8D7FF] transition-[rotate] duration-300 [perspective:1000px] [transform-style:preserve-3d] [&[data-flipped='true']]:[rotate:y_180deg]"
				data-flipped={flipped}
			>
				<article className="absolute flex h-full w-full flex-col p-6 [backface-visibility:hidden] md:flex-row md:gap-loose md:p-loose">
					<div className="hidden aspect-[11.5/16] h-full rounded-3xl bg-pink-100 xl:block"></div>
					<div className="flex min-h-full flex-col justify-between">
						<header className="flex w-full justify-between">
							<div className="flex items-center gap-2">
								<div className="h-12 w-12 rounded-full bg-green-200" />
								<div className="flex flex-col text-left leading-tight">
									<h1 className="text-xl font-bold">Lorem Ipsum</h1>
									<p className="text-sm">Lorem Ipsum</p>
								</div>
							</div>
						</header>
						<p className="pl-tight text-left font-display text-[1.36rem] font-semibold leading-snug lg:leading-relaxed xl:text-3xl ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
							molestiae excepturi earum tenetur porro iste hic saepe amet
							voluptatibus facilis, id minima optio!
						</p>
						<footer className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFEDA]">
									<img className="h-5 w-5" src={Trend} alt="Trend Icon" />
								</div>
								<p className="lg:text-base text-xs md:text-sm xl:text-lg">
									Gained 400k followers
								</p>
							</div>
							<button
								className="lg:text-base rounded-full bg-[#FFFEDA] px-snug py-2 font-display text-xs font-semibold md:hidden md:text-sm xl:text-lg"
								onClick={() => setFlipped(!flipped)}
							>
								See Work
							</button>
						</footer>
					</div>
				</article>
				<article className="absolute flex h-full w-full items-center justify-center [backface-visibility:hidden] [rotate:y_180deg]">
					<button onClick={() => setFlipped(!flipped)}>Flip Back</button>
				</article>
			</div>
		</div>
	);
};
