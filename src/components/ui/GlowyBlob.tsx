import { useMediaQuery } from '@/hooks';
import { FC, useEffect, useRef } from 'react';

export interface GlowyBlobProps {}

export const GlowyBlob: FC<GlowyBlobProps> = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { match: isDesktop } = useMediaQuery();

	useEffect(() => {
		if (isDesktop) {
			const onMove = (e: MouseEvent) => {
				const { clientX, clientY } = e;
				const x = `${clientX}px`;
				const y = `${clientY}px`;

				ref.current!.animate(
					{
						left: x,
						top: y
					},
					{ duration: 4200, fill: 'forwards' }
				);
			};

			window.addEventListener('mousemove', onMove);

			return () => {
				window.removeEventListener('mousemove', onMove);
			};
		}
	}, [isDesktop]);

	return (
		<div
			ref={ref}
			className="absolute left-[80%] top-[90%] -z-[11] size-[14rem] animate-blob rounded-[50%] bg-gradient-to-l from-primary to-secondary brightness-75 blur-3xl [translate:-50%_-50%] lg:size-[36vmax] lg:saturate-[0.6]"
		>
			<div className="size-full scale-150 backdrop-blur-lg"></div>
		</div>
	);
};
