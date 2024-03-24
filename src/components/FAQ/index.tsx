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
		<Accordion
			type="single"
			className="rounded-2xl border bg-yellow-100 px-8 py-snug"
			collapsible
		>
			<AccordionItem className="border-none" value="item-1">
				<AccordionTrigger className="md:text-2xl">
					{props.question}
				</AccordionTrigger>
				<AccordionContent className="md:text-xl">
					{props.answer}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
