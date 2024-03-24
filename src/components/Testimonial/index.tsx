import { FC, useState } from 'react';
import Trend from '@/assets/scribbles/Trend.svg';

export const TestimonialCard: FC = () => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className="flex h-[67vh] min-w-0 flex-[0_0_100%] p-loose">
			<div
				className="relative h-full w-full rounded-2xl bg-[#B8D7FF] transition-[rotate] duration-300 [perspective:1000px] [transform-style:preserve-3d] [&[data-flipped='true']]:[rotate:y_180deg]"
				data-flipped={flipped}
			>
				<article className="absolute flex h-full w-full flex-col justify-between p-6 [backface-visibility:hidden]">
					<header className="flex w-full w-full justify-between">
						<div className="flex items-center gap-2">
							<div className="h-12 w-12 rounded-full bg-green-200" />
							<div className="flex flex-col text-left leading-tight">
								<h1 className="text-xl font-bold">Lorem Ipsum</h1>
								<p className="text-sm">Lorem Ipsum</p>
							</div>
						</div>
						<button className="h-fit rounded-full bg-[#FFFEDA] px-snug pb-1.5 pt-2 text-sm font-bold leading-tight">
							1.2M+
						</button>
					</header>
					<p className="pl-tight text-left font-display text-[1.36rem] font-semibold">
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
							className="rounded-full bg-[#FFFEDA] px-snug py-2 font-display text-sm font-semibold"
							onClick={() => setFlipped(!flipped)}
						>
							See Work
						</button>
					</footer>
				</article>
				<article className="absolute flex h-full w-full items-center justify-center [backface-visibility:hidden] [rotate:y_180deg]">
					<button onClick={() => setFlipped(!flipped)}>Flip Back</button>
				</article>
			</div>
		</div>
	);
};
