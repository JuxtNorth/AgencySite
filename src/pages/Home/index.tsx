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
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Home: FC = () => {
	useGSAP(() => {
		gsap.fromTo('.gsap-text', { y: -12 }, { y: 0 });
	});

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
