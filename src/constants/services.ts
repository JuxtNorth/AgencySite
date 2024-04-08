import { type ServiceCardProps } from '@/components';

// Update the grid classNames in Services section if number of services change.
export const services: Omit<ServiceCardProps, 'serialNo'>[] = [
	{
		title: 'Branding',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic unde magnam, quo totam laborum quasi, distinctio debitis id voluptates, '
	},
	{
		title: 'Content Creation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora animi, cum nihil, esse ut aperiam veritatis consectetur exerci'
	},
	{
		title: 'Social Media Growth',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel, error dicta voluptatibus voluptas labore reiciendis excepturi se'
	},
	{
		title: 'Sales Infrastructure Setup',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore quaerat harum ex quod alias voluptatibus accusantium ab itaque n'
	},
	{
		title: 'Video Editing',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae, hic dolore accusamus fuga esse atque facere itaque est, nesci'
	},
	{
		title: 'Lead Generation',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates qui facilis assumenda error laboriosam consequatur adipisci optio?'
	}
];
