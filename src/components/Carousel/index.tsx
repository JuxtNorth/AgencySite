import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import { Slide } from './Slide';

export const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		skipSnaps: true
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="w-full space-y-4 overflow-hidden p-8">
			<div ref={emblaRef}>
				<div className="flex gap-4">
					<Slide>Slide 1</Slide>
					<Slide>Slide 2</Slide>
					<Slide>Slide 3</Slide>
					<Slide>Slide 4</Slide>
					<Slide>Slide 5</Slide>
				</div>
			</div>
			<div className="flex gap-4">
				<button className="rounded-full bg-rose-500 p-4" onClick={scrollPrev}>
					<ChevronLeftIcon />
				</button>
				<button className="rounded-full bg-rose-500 p-4" onClick={scrollNext}>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
};
