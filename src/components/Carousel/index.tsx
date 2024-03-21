import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import { Slide } from './Slide';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaPluginType } from 'embla-carousel';

const plugins: EmblaPluginType[] = [Autoplay({ delay: 2400 })];

export const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			skipSnaps: true
		},
		plugins
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="mx-auto space-y-4 overflow-hidden">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex gap-9">
					<Slide>Slide 1</Slide>
					<Slide>Slide 2</Slide>
					<Slide>Slide 3</Slide>
					<Slide>Slide 4</Slide>
					<Slide>Slide 5</Slide>
				</div>
			</div>
			<div className="ml-4 flex gap-4">
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
