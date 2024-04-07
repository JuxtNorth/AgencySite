import { FC } from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/constants';
import {
	RankingIcon,
	ContentIcon,
	TrendIcon,
	SalesIcon,
	VideoIcon,
	LeadIcon
} from '@/icons';

const icons = [
	<RankingIcon className='text-lg md:text-3xl lg:teext-4xl'/>,
	<ContentIcon className='text-lg md:text-3xl lg:teext-4xl'/>,
	<TrendIcon className='text-lg md:text-3xl lg:teext-4xl'/>,
	<SalesIcon className='text-lg md:text-3xl lg:teext-4xl'/>,
	<VideoIcon className='text-lg md:text-3xl lg:teext-4xl'/>,
	<LeadIcon className='text-lg md:text-3xl lg:teext-4xl'/>
];

export const Services: FC = () => {
	return (
		<section className="mx-auto max-w-[100rem] p-snug text-center md:p-loose">
			<div className="rounded-3xl">
				<h2 className="mb-12 mt-snug font-semibold">Our Services</h2>
				<section className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-snug">
					{services.map((props, i) => (
						<ServiceCard key={i} {...props}>
							{icons[i]}
						</ServiceCard> 
					))}
				</section>
			</div>
		</section>
	);
};
