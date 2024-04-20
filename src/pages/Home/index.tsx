import { FC } from 'react';
import {
	Hero,
	Clients,
	Impact,
	OurWorks,
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
import { Nav, Footer /* PageLoader */ } from '@/components';
import { GlowyBlob } from '@/components/ui';
import { useAnimation } from '@/hooks/useAnimation';

export const Home: FC = () => {
	useAnimation();
	return (
		<>
			{/* <PageLoader /> */}
			<Nav />
			<div className="absolute top-0 -z-20 h-screen w-full overflow-hidden">
				<div className="size-full bg-gradient-to-b from-transparent from-60% to-background backdrop-blur-[8vmax]" />
				<GlowyBlob />
			</div>
			<main>
				<Hero />
				<Clients />
				<Impact />
				<OurWorks />
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
			</main>
			<Footer />
		</>
	);
};
