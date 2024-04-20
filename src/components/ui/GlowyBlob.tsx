import { useMediaQuery } from '@/hooks';
import { FC, useCallback, useEffect, useRef } from 'react';

export interface GlowyBlobProps {}

export const GlowyBlob: FC<GlowyBlobProps> = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { match: isDesktop } = useMediaQuery();

	const onMove = useCallback((e: MouseEvent) => {
		const { clientX, clientY } = e;
		const x = `${clientX}px`;
		const y = `${clientY}px`;
		
		ref.current!.animate(
			{ left: x, top: y },
			{ duration: 4200, fill: 'forwards' }
		);
	}, []);

	useEffect(() => {
		if (isDesktop) {
			window.addEventListener('mousemove', onMove);
			return () => {
				window.removeEventListener('mousemove', onMove);
			};
		}
	}, [isDesktop, onMove]);

	return (
		<div
			ref={ref}
			className="absolute left-[80%] top-[90%] -z-[11] size-[14rem] animate-blob rounded-[50%] bg-gradient-to-l from-blood-red to-[#d93690] opacity-80 blur-md brightness-50 [translate:-50%_-50%] lg:size-[23vmax]"
		></div>
	);
};
