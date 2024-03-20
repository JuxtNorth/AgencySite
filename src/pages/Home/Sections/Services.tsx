import { FC, createElement, lazy, Suspense } from 'react';
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
		<section className="p-8 text-center">
			<h1 className="mb-12 text-5xl font-medium md:text-7xl">
				Our <span className="text-rose-500">Services</span>
			</h1>
			<section className="grid grid-rows-6 gap-4 md:grid-cols-3 md:grid-rows-2">
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
		</section>
	);
};
