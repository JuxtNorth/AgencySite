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
	<RankingIcon />,
	<ContentIcon />,
	<TrendIcon />,
	<SalesIcon />,
	<VideoIcon />,
	<LeadIcon />
];

export const Services: FC = () => {
	return (
		<section className="mx-auto max-w-[100rem] p-snug text-center md:p-loose">
			<div className="rounded-3xl bg-surface p-snug md:p-loose lg:p-relaxed">
				<h2 className="mb-12 mt-snug font-semibold">Our Services</h2>
				<section className="grid grid-rows-6 gap-snug lg:grid-cols-3 lg:grid-rows-2">
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
