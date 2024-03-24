import { FC } from 'react';
import { PerkCard } from '@/components';
import { perks } from '@/constants';
import BoltIcon from '@/assets/scribbles/Artboard 11.svg';
import { BlobOverlay, type BlobIndex } from '@/components/ui';

export const MembershipDetails: FC = () => {
	return (
		<section className="text-center">
			<h1 className="text-4xl font-semibold md:text-5xl">Membership Perks</h1>
			<p className="md:text-lg">Lorem Ipsum Doler Imet Constrctuer</p>
			<div className="grid grid-cols-1 grid-rows-6 place-items-center gap-8 p-8 md:grid-cols-3 md:grid-rows-2">
				{perks.map((perk, index) => (
					<PerkCard {...perk} key={index}>
						<BlobOverlay type={index as BlobIndex}>
							<img className="h-28" src={BoltIcon} alt="Bolt Icon" />
						</BlobOverlay>
					</PerkCard>
				))}
			</div>
		</section>
	);
};
