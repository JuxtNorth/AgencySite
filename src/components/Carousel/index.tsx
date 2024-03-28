import { FC, useCallback, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaPluginType } from 'embla-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import { Slide } from './Slide';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import './index.css';

interface CarouselProps {
	children?: ReactNode;
	buttonXPosition?: 'edge' | 'center';
	plugins?: EmblaPluginType[];
	className?: string;
}

const buttonVariants = cva('flex gap-snug', {
	variants: {
		buttons: {
			edge: 'ml-snug',
			center: 'justify-center'
		}
	}
});

export const Carousel: FC<CarouselProps> = (props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			skipSnaps: true
		},
		props.plugins
	);

	const { buttonXPosition = 'edge' } = props;

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="mx-auto space-y-4 overflow-hidden">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className={cn('flex gap-24', props.className)}>
					{props.children}
				</div>
			</div>
			<div className={buttonVariants({ buttons: buttonXPosition })}>
				<button
					className="rounded-full bg-lime-200 p-snug md:p-6 md:text-2xl"
					onClick={scrollPrev}
				>
					<ChevronLeftIcon />
				</button>
				<button
					className="rounded-full bg-lime-200 p-snug md:p-6 md:text-2xl"
					onClick={scrollNext}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
};

export { Slide };
