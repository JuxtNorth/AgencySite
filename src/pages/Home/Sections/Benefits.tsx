import { FC } from 'react';
import { AsideCard } from '@/components/ui';

export const Benefits: FC = () => {
	return (
		<section className="grid p-8 md:grid-cols-[60%_auto] md:gap-8">
			<article className="mb-8 space-y-4 text-center md:text-left">
				<h1 className="text-7xl font-bold">
					Hi-Reach <span className="text-rose-500">Media</span>
				</h1>
				<h2 className="text-3xl font-semibold">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</h2>
				<p className="text-xl md:mr-8">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nobis sed
					nam repellendus maiores reiciendis earum voluptatibus.
				</p>
			</article>
			<aside className="space-y-4">
				<AsideCard title="Lorem Ipsum" className="bg-red-500" />
				<AsideCard title="Lorem Ipsum" className="bg-blue-500" />
				<AsideCard title="Lorem Ipsum" className="bg-purple-500" />
			</aside>
		</section>
	);
};
