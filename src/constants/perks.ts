import { type PerkCardProps } from '@/components';

// Change in length of this array also requires updating the grid values of the associated react component.
export const perks: Omit<PerkCardProps, 'children'>[] = [
	{
		title: 'Viral Growth',
		description:
			'Start getting viral  on Instagram, tiktok and YouTube together'
	},
	{
		title: 'Lead Generation',
		description: 'Make money through organic leads on you doorstep'
	},
	{
		title: 'Growth Team',
		description: 'Get your own dedicated growth team'
	},
	{
		title: 'Quick Turnaround Time',
		description: '2 days of max turnaround time'
	},
	{
		title: 'Effective Ads',
		description: 'Ads and funnels that fills your calender'
	}
];
