import { type PricingCardProps } from '@/components';

export const pricingPlans: PricingCardProps[] = [
	{
		name: 'Standard',
		pricing: '$2599',
		emphasis: '7x posts per week including posts, carousels and video edits',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'Rebranding and Profile makeover optimized for conversions.',
			'Strategy, Ideation and scripting.',
			'Expert Copywriter, Ghostwriter and designers.',
			'Lead generation and Sales System setup (ads, funnels, email marketing)',
			'Weekly Check-ins with strategy session.',
			'Dedicated Linkedin Manager.',
			'Community building and Management.',
			'Monthly growth reports.',
			'Pause or cancel anytime.'
		],
		bestFor: 'Built for linkedin creators to ease their expansion there',
		className: 'bg-white'
	},
	{
		name: 'Standard',
		pricing: '$2999',
		emphasis: '25 **Short videos + text and visual content,**',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'World-class video editors and animators.',
			'Brand audit, positioning strategy, content ideation and scripting.',
			'Dedicated Personal Brand Manager.',
			'Unlimited Revision.',
			'Weekly Check-ins and strategy session',
			'Monthly growth report',
			'Community building and Management',
			'Pause or cancel anytime',
			'**Complete organic growth package**'
		],
		bestFor: 'Tailored for those dedicated towards personal branding',
		className: 'bg-white'
	},
	{
		name: 'Premium',
		pricing: '$3999',
		emphasis: 'Our deliverable → Unlimited requests + assistance',
		buttonLabel: 'Book an Appointment',
		buttonTo: '#',
		features: [
			'**Everything you get in Standard Plus:**',
			'Complete Lead generation and Sales infrastructure setup.',
			'Revenue Growth with Ads, Funnels and Email marketing.',
			'Automation Setup.',
			'Lorem ipsum doler.',
			'Your All-in-One Solution to Grow and Monetize your brand'
		],
		bestFor: 'Ideal for entrepreneurs looking to leverage social media',
		className: 'bg-white'
	}
];
