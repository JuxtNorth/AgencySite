import { FC } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui';

export interface FAQAccordionProps {
	question: string;
	answer: string;
}

export const FAQAccordion: FC<FAQAccordionProps> = (props) => {
	return (
		<Accordion type="single" className="relative py-tight hover:transition-colors hover:before:bg-white/10 before:content-[''] before:h-full before:w-[calc(100%+3.8rem)] before:rounded-md before:absolute before:top-0 before:left-[50%] before:-translate-x-[50%] before:-z-[1]" collapsible>
			<AccordionItem className="border-none" value="item-1">
				<AccordionTrigger className="text-[1.08rem] xl:text-[1.4rem] hover:no-underline font-bold">
					{props.question}
				</AccordionTrigger>
				<AccordionContent className="">{props.answer}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
