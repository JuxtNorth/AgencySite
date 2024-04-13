import { FC } from 'react';
import {
	Hero,
	Clients,
	Impact,
	Works,
	Testimonials,
	CaseStudies,
	HowItWorks,
	Services,
	Workflow,
	MembershipPerks,
	Pricing,
	Faq,
	ScheduleCalendar,
	PreFooter
} from './Sections';
import { Nav, Footer } from '@/components';
import { GlowyBlob } from '@/components/ui';

export const Home: FC = () => {
	return (
		<>
			<Nav />
			<div className="absolute top-0 -z-20 h-screen w-full overflow-hidden">
				<div className="size-full bg-gradient-to-b from-transparent from-60% to-background" />
				<GlowyBlob />
			</div>
			<main>
				<Hero />
				<Clients />
				<Impact />
				<Works />
				<Workflow />
				<Testimonials />
				<CaseStudies />
				<HowItWorks />
				<Services />
				<Pricing />
				<MembershipPerks />
				<Faq />
				<ScheduleCalendar />
				<PreFooter />
				<Footer />
			</main>
		</>
	);
};
