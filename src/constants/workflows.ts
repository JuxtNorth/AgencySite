import { WorkflowCardProps } from '@/components';

export const workflows: Array<WorkflowCardProps & { emphasis: string }> = [
	{
		serialNo: '01',
		header: 'Strategy & Positioning',
		description:
			'Only 3.5% of personal brands ever hit 10,000 followers. Our expert strategists understand your business, develop unique brand strategies, and position you as a leading authority in your niche.',
		emphasis: 'Some additional text lorem ipsum',
		aesthetics: 'a'
	},
	{
		serialNo: '02',
		header: 'Content Production',
		description:
			'Our team of managers and copywriters work together to ideate and script compelling content tailored to your niche to hook your audience forever. Then our skilled editors employs their magic',
		emphasis: 'Some additional text lorem ipsum',
		aesthetics: 'b'
	},
	{
		serialNo: '03',
		header: 'Revenue Growth',
		description:
			'Once traction kicks in, we establish a comprehensive sales infrastructure and implement effective funnels to drive individuals to book a call with you.',
		emphasis: 'Some additional text lorem ipsum',
		aesthetics: 'c'
	}
];
