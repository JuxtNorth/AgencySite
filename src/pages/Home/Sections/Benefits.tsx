import { FC } from 'react';
import { AsideCard } from '@/components/ui';
import { MagicIcon } from '@/icons';
import { benefits } from '@/constants';

export const Benefits: FC = () => {
	return (
		<section className="grid space-y-16 p-12 md:grid-cols-[60%_40%] md:space-y-0">
			<article className="pr-8">
				<h1 className="mb-2 text-6xl font-bold">Benefits</h1>
				<h2 className="text-3xl">Lorem Ipsum Doler Imet Constrctuer</h2>
				<p className="mt-8 text-xl">
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
						recusandae accusamus qui voluptatem similique harum, nostrum ipsum a
						vel sequi id tenetur ab dolores obcaecati animi corporis non, dicta
						magnam.
					</div>
					<div>
						Id hic quia possimus incidunt enim optio vero exercitationem
						accusamus ipsa, distinctio aperiam placeat in, et corrupti alias
						quidem consectetur quasi voluptatem veniam sunt magni tempora
						assumenda libero suscipit! Corrupti.
					</div>
				</p>
			</article>
			<section className="space-y-8">
				<AsideCard {...benefits[0]}>
					<MagicIcon />
				</AsideCard>
				<AsideCard {...benefits[1]}>
					<MagicIcon />
				</AsideCard>
				<AsideCard {...benefits[2]}>
					<MagicIcon />
				</AsideCard>
			</section>
		</section>
	);
};
