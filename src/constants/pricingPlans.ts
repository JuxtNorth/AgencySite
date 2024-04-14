import { type PricingCardProps } from '@/components';

// Emphasis property refers to deliverable
export const pricingPlans: Omit<PricingCardProps, 'children'>[] = [
	{
		name: 'Linkedin Operator',
		pricing: '$1499',
		emphasis: 'Your toolkit for wild-fire virality on linkedin',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'Rebranding and Profile makeover optimized for conversions',
			'Strategy, Ideation and scripting',
			'Expert Copywriter, Ghostwriter and designers',
			'Lead generation and Sales System',
			'Building funnels, Linkedin Ads and appt. setting',
			'Weekly Check-ins with strategy session',
			'Dedicated Linkedin Manager',
			'Monthly growth reports',
			'Pause or cancel anytime'
		],
		bestFor: 'Built for LinkedIn maverick'
	},
	{
		name: 'Virality Assistant',
		pricing: '$2999',
		emphasis: 'Complete organic growth package for instagram',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'Positioning strategy, content ideation and scripting',
			'Personalized video branding',
			'World-class video editors and animators',
			'Organic lead generation',
			'Bi-weekly Check-ins and strategy session',
			'Unlimited Revision',
			'Dedicated Personal Brand Manager',
			'Monthly growth report',
			'Pause or cancel anytime'
		],
		bestFor: 'Tailored to increase reach of your brand.',
		recommended: true
	},
	{
		name: 'Growth Partner',
		pricing: '$3999',
		emphasis: 'Your All-in-One Solution to Grow and Monetize your brand',
		buttonLabel: 'Book an Appointment',
		buttonTo: '#',
		features: [
			'<strong>Everything you get in</strong> Virality Assistant <strong>Plus:</strong>',
			'Revenue Growth through content creation and/or running ads',
			'Complete Lead generation and Sales infrastructure setup',
			'Funnel building, VSL scripting and appointment setting',
			'Automation Setup'
		],
		bestFor: 'Best choice for business growth.'
	}
];
