import { FC } from 'react';
import { FAQAccordion } from '@/components';
import { FAQs } from '@/constants';

export const Faq: FC = () => {
	return (
		<section className="space-y-4 p-8">
			<h1 className="mb-8 text-center text-4xl">Frequently Asked Questions</h1>

			{FAQs.map((props, i) => (
				<FAQAccordion {...props} key={i} />
			))}
		</section>
	);
};
