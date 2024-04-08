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
	<RankingIcon className="text-2xl md:text-3xl lg:text-4xl" />,
	<ContentIcon className="text-2xl md:text-3xl lg:text-4xl" />,
	<TrendIcon className="text-2xl md:text-3xl lg:text-4xl" />,
	<SalesIcon className="text-2xl md:text-3xl lg:text-4xl" />,
	<VideoIcon className="text-2xl md:text-3xl lg:text-4xl" />,
	<LeadIcon className="text-2xl md:text-3xl lg:text-4xl" />
];

export const Services: FC = () => {
	return (
		<section className="mx-auto max-w-[80rem] p-snug text-center md:p-loose">
			<div className="rounded-3xl">
				<h2 className="mb-12 mt-snug font-semibold">Our Services</h2>
				<section className="grid grid-flow-row gap-snug md:grid-cols-2 lg:grid-cols-3">
					{services.map((props, i) => (
						<ServiceCard key={i} serialNo={`0${i + 1}`} {...props}>
							{icons[i]}
						</ServiceCard>
					))}
				</section>
			</div>
		</section>
	);
};
