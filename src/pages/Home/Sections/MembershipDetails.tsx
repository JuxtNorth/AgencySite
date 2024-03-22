import { FC } from 'react';
import { PerkCard } from '@/components';
import { perks } from '@/constants';
import BoltIcon from '@/assets/scribbles/Artboard 11.svg';

export const MembershipDetails: FC = () => {
	return (
		<section className="grid grid-cols-1 grid-rows-6 place-items-center gap-8 p-8 md:grid-cols-3 md:grid-rows-2">
			<PerkCard {...perks[0]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
			<PerkCard {...perks[1]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
			<PerkCard {...perks[2]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
			<PerkCard {...perks[3]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
			<PerkCard {...perks[4]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
			<PerkCard {...perks[4]}>
				<img className="mx-auto my-8 h-44" src={BoltIcon} alt="Bolt Icon" />
			</PerkCard>
		</section>
	);
};
