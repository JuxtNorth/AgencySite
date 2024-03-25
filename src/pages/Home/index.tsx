import { FC } from 'react';
import {
	Hero,
	Clients,
	WorksCarousel,
	Testimonials,
	CaseStudies,
	HowItWorks,
	Services,
	Workflow,
	MembershipDetails,
	Pricing,
	Faq,
	ScheduleCalendar
} from './Sections';
import { Nav, /*FloatingNav, */ Footer } from '@/components';

export const Home: FC = () => {
	return (
		<main>
			<Nav />
			{/*<FloatingNav />*/}
			<Hero />
			<Clients />
			<WorksCarousel />
			<Workflow />
			<Testimonials />
			<CaseStudies />
			<HowItWorks />
			<Services />
			<Pricing />
			<MembershipDetails />
			<Faq />
			<ScheduleCalendar />
			<Footer />
		</main>
	);
};
