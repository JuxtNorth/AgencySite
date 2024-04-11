import { FC } from 'react';
import { PerkCard } from '@/components';
import { perks } from '@/constants';
import { BlobOverlay, type BlobIndex } from '@/components/ui';

import Peace from '@/assets/scribbles/peace.svg';
import Planet from '@/assets/scribbles/planet.svg';
import Bolt from '@/assets/scribbles/Artboard 11.svg';
import Clock from '@/assets/scribbles/clock.svg';
import Target from '@/assets/scribbles/target.svg';
import Money from '@/assets/scribbles/money.svg';

const scribbles = [Peace, Planet, Bolt, Clock, Target, Money];

export const MembershipPerks: FC = () => {
	return (
		<section className="mx-auto mt-12 max-w-[100rem] text-center">
			<h1 className="text-4xl font-semibold md:text-5xl">Membership Perks</h1>
			<p className="text-sm md:text-lg">Lorem Ipsum Doler Imet Constrctuer</p>
			<div className="grid grid-cols-1 grid-rows-6 place-items-center gap-snug p-loose md:grid-cols-3 md:grid-rows-2 xl:p-relaxed">
				{perks.map((perk, index) => (
					<PerkCard {...perk} key={index}>
						<BlobOverlay type={index as BlobIndex}>
							<img className="h-20" src={scribbles[index]} alt="Bolt Icon" />
						</BlobOverlay>
					</PerkCard>
				))}
			</div>
		</section>
	);
};