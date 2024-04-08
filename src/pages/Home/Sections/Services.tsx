import { FC } from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/constants';
import {
	RankingIcon,
	ContentIcon,
	TrendIcon,
	SalesIcon,
	CustomisationIcon,
	LeadIcon
} from '@/icons';

const icons = [
	<RankingIcon className="text-2xl md:text-3xl text-accent" />,
	<ContentIcon className="text-2xl md:text-3xl text-accent" />,
	<TrendIcon className="text-2xl md:text-3xl text-accent" />,
	<SalesIcon className="text-2xl md:text-3xl text-accent" />,
	<CustomisationIcon className="text-2xl md:text-3xl text-accent" />,
	<LeadIcon className="text-2xl md:text-3xl text-accent" />
];

export const Services: FC = () => {
	return (
		<section className="mx-auto max-w-[80rem] p-snug text-center md:p-loose">
			<div className="rounded-3xl">
				<h2 className="mb-12 mt-snug font-semibold">Our Services</h2>
				<section className="">
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
