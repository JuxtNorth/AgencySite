import { FC, useState } from "react";
import Trend from "@/assets/scribbles/Trend.svg";

export const TestimonialCard: FC = () => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="flex h-[32rem] min-w-0 flex-[0_0_100%] p-loose md:px-24 lg:px-52">
			<div
				className="relative h-full w-full rounded-2xl bg-[#B8D7FF] transition-[rotate] duration-300 [perspective:1000px] [transform-style:preserve-3d] [&[data-flipped='true']]:[rotate:y_180deg]"
				data-flipped={flipped}
			>
				<article className="absolute flex h-full w-full flex-col p-6 [backface-visibility:hidden] md:flex-row md:gap-loose md:p-loose">
					<div className="hidden aspect-[9/16] h-full rounded-2xl bg-pink-100 md:block "></div>
					<div className="flex h-full flex-col justify-between">
						<header className="flex w-full justify-between">
							<div className="flex items-center gap-2">
								<div className="h-12 w-12 rounded-full bg-green-200" />
								<div className="flex flex-col text-left leading-tight">
									<h1 className="text-xl font-bold">Lorem Ipsum</h1>
									<p className="text-sm">Lorem Ipsum</p>
								</div>
							</div>
						</header>
						<p className="pl-tight text-left font-display text-[1.36rem] font-semibold md:text-2xl lg:text-[1.7rem]">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
							molestiae excepturi earum tenetur porro iste hic saepe amet
							voluptatibus facilis, id minima optio!
						</p>
						<footer className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFEDA]">
									<img className="h-5 w-5" src={Trend} alt="Trend Icon" />
								</div>
								<p>Gained 400k followers</p>
							</div>
							<button
								className="rounded-full bg-[#FFFEDA] px-snug py-2 font-display text-sm font-semibold md:hidden"
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
