import { FC } from 'react';

export interface OutcomeProps {}

export const Outcome: FC<OutcomeProps> = () => {
	return (
		<section>
			<h1 className="mb-snug font-bold">Outcome</h1>
			<p className="mb-snug">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem
				sequi praesentium fugiat deserunt veniam labore non itaque.
			</p>
			<ol className="mb-snug list-decimal space-y-snug pl-snug lg:pl-loose">
				<li>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
					unde amet libero.
				</li>
				<li>
					Culpa commodi nisi totam voluptate fugiat voluptatibus in. Eligendi
					omnis id saepe.
				</li>
				<li>
					Ipsam laudantium quia veniam quibusdam id quaerat debitis impedit
					dolore atque numquam.
				</li>
				<li>
					Impedit sunt consequatur delectus laborum voluptatem molestias
					exercitationem quisquam fugiat quia totam!
				</li>
				<li>
					Vitae laudantium sunt nisi fugit harum mollitia dolores, praesentium
					ab sequi! Iste?
				</li>
				<li>
					Sed, unde eum placeat aspernatur magni nostrum rerum. Ad accusamus
					quasi quia.
				</li>
			</ol>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo
				omnis sequi est velit amet! Alias, praesentium! Nostrum ut laudantium
				dicta eos odio maiores perspiciatis maxime doloremque, recusandae
				voluptate eveniet. Non, sed?
			</p>
		</section>
	);
};
