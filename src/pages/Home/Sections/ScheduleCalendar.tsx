import { FC } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

export const ScheduleCalendar: FC = () => {
	useCalendlyEventListener({
		onEventScheduled: (e) => console.log(e.data.payload),
	});
	return (
		<section className="overflow-hidden pt-loose">
			<div id="schedule" />
			<InlineWidget
				url="https://calendly.com/d/cn7w-x63-h2p/one-off-meeting"
				styles={{
					minWidth: '320px',
					height: '630px',
					position: 'relative'
				}}
			/>
		</section>
	);
};
