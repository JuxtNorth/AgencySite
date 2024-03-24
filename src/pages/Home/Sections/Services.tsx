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

export const Services: FC = () => {
	return (
		<section className="p-snug text-center md:p-loose">
			<div className="rounded-3xl bg-purple-100 p-snug md:p-loose">
				<h1 className="mb-12 mt-snug text-4xl font-medium font-semibold md:text-5xl">
					Our Services
				</h1>
				<section className="grid grid-rows-6 gap-snug md:grid-cols-3 md:grid-rows-2">
					<ServiceCard {...services[0]}>
						<RankingIcon />
					</ServiceCard>
					<ServiceCard {...services[1]}>
						<ContentIcon />
					</ServiceCard>
					<ServiceCard {...services[2]}>
						<TrendIcon />
					</ServiceCard>
					<ServiceCard {...services[3]}>
						<SalesIcon />
					</ServiceCard>
					<ServiceCard {...services[4]}>
						<VideoIcon />
					</ServiceCard>
					<ServiceCard {...services[5]}>
						<LeadIcon />
					</ServiceCard>
				</section>
			</div>
		</section>
	);
};
