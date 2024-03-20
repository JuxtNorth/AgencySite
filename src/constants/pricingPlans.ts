import { type PricingCardProps } from '@/components';

export const pricingPlans: PricingCardProps[] = [
	{
		name: 'Basic',
		pricing: 2599,
		emphasis: '20 Short Videos',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'Lorem ipsum dolor sit amet.',
			'Consectetur adipisicing elit.',
			'Praesentium vitae recusandae suscipit.',
			'Quidem odio quidem praesentium.',
			'Lorem ipsum doler.',
			'Quasi blanditiis corrupti nobis.'
		],
		bestFor: 'podcasters.',
		className: 'bg-white'
	},
	{
		name: 'Super',
		pricing: 7599,
		emphasis: '40 Short Videos',
		buttonLabel: 'Join Waitlist',
		buttonTo: '#',
		features: [
			'Lorem ipsum dolor sit amet.',
			'Quidem odio quidem praesentium.',
			'Quasi blanditiis corrupti nobis.',
			'Praesentium vitae recusandae suscipit.',
			'Consectetur adipisicing elit.',
			'Lorem ipsum doler.'
		],
		bestFor: 'Video Creators',
		className: 'bg-white'
	},
	{
		name: 'Ultra',
		pricing: 12999,
		emphasis: 'Infinite Short Videos',
		buttonLabel: 'Book an Appointment',
		buttonTo: '#',
		features: [
			'Praesentium vitae recusandae suscipit.',
			'Lorem ipsum dolor sit amet.',
			'Consectetur adipisicing elit.',
			'Quidem odio quidem praesentium.',
			'Lorem ipsum doler.',
			'Quasi blanditiis corrupti nobis.'
		],
		bestFor: 'Brands',
		className: 'bg-white'
	}
];
