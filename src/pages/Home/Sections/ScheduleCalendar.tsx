import { FC } from 'react';
import { InlineWidget } from 'react-calendly';

export const ScheduleCalendar: FC = () => {
	return (
		<section className="overflow-hidden pt-loose">
			<InlineWidget url="https://calendly.com/anant-d9-m" />
		</section>
	);
};
