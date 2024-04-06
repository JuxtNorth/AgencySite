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
import { GlowyBlob } from '@/components/ui';

export const Home: FC = () => {
	return (
		<>
			<Nav />
			<div className="absolute h-screen w-full overflow-hidden bg-gradient-to-b from-transparent from-60% to-background">
				<GlowyBlob />
			</div>
			<main>
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
		</>
	);
};
