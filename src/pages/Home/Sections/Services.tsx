import { FC } from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/constants';
import {
	RankingIcon,
	ContentIcon,
	SalesIcon,
	CustomisationIcon,
	LeadIcon,
	MagicIcon
} from '@/icons';

const icons = [
	<RankingIcon className="overflow-visible text-2xl text-accent md:text-3xl" />,
	<ContentIcon className="overflow-visible text-2xl text-accent md:text-3xl" />,
	<MagicIcon className="overflow-visible text-2xl text-accent md:text-3xl" />,
	<SalesIcon className="overflow-visible text-2xl text-accent md:text-3xl" />,
	<CustomisationIcon className="overflow-visible text-2xl text-accent md:text-3xl" />,
	<LeadIcon className="overflow-visible text-2xl text-accent md:text-3xl" />
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
