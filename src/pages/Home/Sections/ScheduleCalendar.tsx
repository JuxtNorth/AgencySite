import { FC } from 'react';
import { InlineWidget } from 'react-calendly';

export const ScheduleCalendar: FC = () => {
	return (
		<section className="bg-violet-200">
			<InlineWidget url="https://calendly.com/anant-d9-m" />
		</section>
	);
};
