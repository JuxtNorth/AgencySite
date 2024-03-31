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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const Home: FC = () => {
	useGSAP(() => {
		gsap.fromTo(
			new SplitType('.gsap-header', { types: 'chars' }).chars,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 2.4,
				stagger: 0.06,
				scrollTrigger: '.gsap-header',
				ease: "circ.in"
			}
		);

		gsap.fromTo(
			'.gsap-para',
			{ opacity: 0, y: 32 },
			{ opacity: 1, y: 0, duration: 1, scrollTrigger: '.gsap-para' }
		);
	});

	return (
		<>
			<Nav />
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
