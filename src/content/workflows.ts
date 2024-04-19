import { WorkflowCardProps } from '@/components';

export const workflows: Array<WorkflowCardProps & { emphasis: string }> = [
	{
		serialNo: '01',
		header: 'Strategy & Positioning',
		description:
			'Our expert strategists understand your business, develop unique brand strategies, and position you as a leading authority in your niche. You just need to open up to us and we handle the rest',
		emphasis: '**Only 2.7%** of personal brands ever hit 10,000 followers',
		aesthetics: 'a'
	},
	{
		serialNo: '02',
		header: 'Content Production',
		description:
			'Our team of managers and copywriters work together to ideate and script compelling content tailored to your niche to hook your audience forever while our skilled editors employ their magic',
		emphasis: 'We hire the **top 1% talents** who goes into your team',
		aesthetics: 'b'
	},
	{
		serialNo: '03',
		header: 'Revenue Growth',
		description:
			'Once traction kicks in, we establish a comprehensive sales infrastructure and implement effective funnels to drive the traction into your bank account',
		emphasis: 'Generated over **1M+ in revenue** for our clients',
		aesthetics: 'c'
	}
];
