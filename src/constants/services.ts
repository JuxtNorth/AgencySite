import { type ServiceCardProps } from '@/components';

// Update the grid classNames in Services section if number of services change.
export const services: Omit<ServiceCardProps, 'serialNo'>[] = [
	{
		title: 'Branding',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic unde magnam, quo totam laborum quasi, distinctio debitis id voluptates,',
		dialog: {
			markdownContent: `
Today, you can begin to create a winning personal brand or you will continue to be jealous with the success and recognition of others. Treat your personal brand like your secondary business backing up the primary one.

We give clients the insights they need to succeed and remain distinctive. Our research and expertise in brand management allow us to advise Coaches, Consultants and online service providers on positioning their brand in various industries and markets.

**There is a cost to your inaction:**
- A never ending frustration of finding leads
- No authority or dominance in your niche
- No Sales system setup in place

## Take Action now or remain unrecognisable

- Sub Services 
	- Profile optimisation
  -	Developing Unique Brand Aura
  - Establishing your target audience
  - Competition Analysis`,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Content Creation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora animi, cum nihil, esse ut aperiam veritatis consectetur exerci',
		dialog: {
			markdownContent: ``,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Social Media Growth',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel, error dicta voluptatibus voluptas labore reiciendis excepturi se',
		dialog: {
			markdownContent: ``,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Sales Infrastructure Setup',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore quaerat harum ex quod alias voluptatibus accusantium ab itaque n',
		dialog: {
			markdownContent: ``,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Video Editing',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae, hic dolore accusamus fuga esse atque facere itaque est, nesci',
		dialog: {
			markdownContent: ``,
			stat: {
				title: '',
				value: 12
			}
		}
	},
	{
		title: 'Lead Generation',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates qui facilis assumenda error laboriosam consequatur adipisci optio?',
		dialog: {
			markdownContent: ``,
			stat: {
				title: '',
				value: 12
			}
		}
	}
];
