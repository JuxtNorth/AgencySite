import { FC } from 'react';
import {
	Hero,
	Clients,
	WorksCarousel,
	Testimonials,
	CaseStudies,
	Services,
	Benefits,
	Workflow,
	MembershipDetails,
	Pricing,
	Faq,
	ScheduleCalendar
} from './Sections';
import { Nav, FloatingNav, Footer } from '@/components';

export const Home: FC = () => {
	return (
		<main>
			<Nav />
			<FloatingNav />
			<Hero />
			<Clients />
			<WorksCarousel />
			<Testimonials />
			<CaseStudies />
			<Services />
			<Benefits />
			<Workflow />
			<MembershipDetails />
			<Pricing />
			<Faq />
			<ScheduleCalendar />
			<Footer />
		</main>
	);
};
