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
		<section className="mx-auto space-y-4 overflow-hidden">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex gap-24">
					<Slide>1</Slide>
					<Slide>2</Slide>
					<Slide variant="vertical">3</Slide>
					<Slide>4</Slide>
					<Slide>5</Slide>
					<Slide variant="vertical">6</Slide>
					<Slide variant="vertical">7</Slide>
					<Slide>8</Slide>
					<Slide>9</Slide>
					<Slide>10</Slide>
					<Slide>11</Slide>
					<Slide>12</Slide>
				</div>
			</div>
			<div className="ml-4 flex gap-4">
				<button
					className="rounded-full bg-lime-200 p-4 md:p-6 md:text-2xl"
					onClick={scrollPrev}
				>
					<ChevronLeftIcon />
				</button>
				<button
					className="rounded-full bg-lime-200 p-4 md:p-6 md:text-2xl"
					onClick={scrollNext}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
};
