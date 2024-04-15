import { FC } from 'react';
import { InlineWidget } from 'react-calendly';

export const ScheduleCalendar: FC = () => {
	return (
		<section className="overflow-hidden pt-loose">
			<InlineWidget
				url="https://calendly.com/anant-d9-m"
				styles={{
					minWidth: '320px',
					height: '630px',
					position: 'relative',
				}}
			/>
		</section>
	);
};
