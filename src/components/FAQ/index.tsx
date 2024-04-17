import { FC } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui';
import { cn } from '@/lib/utils';

export interface FAQAccordionProps {
	question: string;
	answer: string;
	className?: string;
}

export const FAQAccordion: FC<FAQAccordionProps> = (props) => {
	return (
		<Accordion
			type="single"
			className={cn(
				"relative py-tight before:absolute before:left-[50%] before:top-0 before:-z-[1] before:h-full before:w-[calc(100%+3.8rem)] before:-translate-x-[50%] before:rounded-md before:content-[''] hover:transition-colors hover:before:bg-white/10",
				props.className
			)}
			collapsible
		>
			<AccordionItem className="border-none" value="item-1">
				<AccordionTrigger className="text-[1.08rem] font-bold hover:no-underline xl:text-[1.4rem]">
					{props.question}
				</AccordionTrigger>
				<AccordionContent className="">{props.answer}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
