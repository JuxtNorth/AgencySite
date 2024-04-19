import { type PerkCardProps } from '@/components';

// Change in length of this array also requires updating the grid values of the associated react component.
export const perks: Omit<PerkCardProps, 'children'>[] = [
	{
		title: 'World Class Team',
		description:
			'Best editors, designers, copywriters and strategist on your side'
	},
	{
		title: 'Universal Grip',
		description: 'Grow on instagram, tiktok, youtube all at once'
	},
	{
		title: 'Flash like delivery',
		description: 'Get your content out within 48hrs of shooting'
	},
	{
		title: '24/7 Support',
		description: 'We work at your timings and at your steps'
	},
	{
		title: 'Targeted Leads',
		description:
			'Get leads through targeted content creation along with paid ads'
	},
	{
		title: 'Monetized Audience',
		description:
			'Increase your revenue with our funnels and sales infrastructure'
	}
];
