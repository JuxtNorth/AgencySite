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
	buttonXPosition?: 'edge' | 'center' | 'either';
	buttonYPosition?: 'middle' | 'default';
	plugins?: EmblaPluginType[];
	className?: string;
}

const buttonVariants = cva('w-full flex gap-snug pointer-events-none', {
	variants: {
		buttons: {
			edge: 'ml-snug',
			center: 'justify-center',
			either: 'justify-between'
		},
		vertical: {
			middle:
				'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[calc(50%+2.3rem)] max-w-[80rem]',
			default: ''
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
	const { buttonYPosition = 'default' } = props;

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="relative mx-auto space-y-4 overflow-hidden">
			<div
				className="cursor-grab overflow-hidden active:cursor-grabbing"
				ref={emblaRef}
			>
				<div className={cn('flex gap-24', props.className)}>
					{props.children}
				</div>
			</div>
			<div
				className={buttonVariants({
					buttons: buttonXPosition,
					vertical: buttonYPosition
				})}
			>
				<button
					className="pointer-events-auto cursor-pointer rounded-full bg-primary p-snug md:p-6 md:text-2xl"
					onClick={scrollPrev}
				>
					<ChevronLeftIcon />
				</button>
				<button
					className="pointer-events-auto cursor-pointer rounded-full bg-primary p-snug md:p-6 md:text-2xl"
					onClick={scrollNext}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</section>
	);
};

export { Slide };
