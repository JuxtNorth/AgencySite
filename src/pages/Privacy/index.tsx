import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

export const Privacy: FC = () => {
  const data = useLoaderData();

  console.log(data)

	return (
		<main className="space-y-loose p-relaxed">
			<div className="space-y-2">
				<h1 className="text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
				<p className="text-sm text-muted md:text-base">
					Last Updated at 12th April, 2024
				</p>
			</div>
			<div className="space-y-4 text-[#ddd]">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					velit ex doloremque nemo sint error dolorum, accusantium quia maxime
					fugit molestias. Eveniet eius quibusdam, alias, exercitationem nihil
					ut dolor architecto cum iusto quos veritatis nam maiores earum qui
					autem consequatur quia amet magnam quod corporis repudiandae rem quis
					at? Quos ipsa molestias, ratione vitae inventore reprehenderit modi
					recusandae ab? Explicabo sapiente quae omnis laboriosam?
				</p>
				<p>
					Mollitia dolorum quas numquam nesciunt eligendi at. Veritatis illo
					iure impedit id, reprehenderit officia, nostrum tempora hic adipisci
					libero non molestias, quam quis laudantium expedita harum corrupti!
					Aliquid, nihil unde? Similique placeat sit quidem, velit dolores
					minima repellat illo rerum numquam asperiores ratione? Eaque hic
					praesentium molestiae, quia beatae perferendis doloremque pariatur
					quod libero voluptates consequatur et laudantium laborum
					necessitatibus deserunt qui blanditiis repudiandae!
				</p>
				<p>
					Porro consequatur perferendis quos animi magni quae itaque quod,
					perspiciatis ipsum aliquid aspernatur? Dolore amet voluptate sapiente.
					Cumque ullam quisquam assumenda dolore ipsa quos error voluptates
					placeat quia explicabo odio consequuntur quae mollitia ipsum culpa,
					necessitatibus similique? Perspiciatis, ad ipsam consequatur alias
					unde eos maxime incidunt voluptatum iusto nihil quibusdam consectetur
					saepe, nulla non! Saepe aspernatur modi sequi? Eius delectus maxime
					incidunt similique at!
				</p>
			</div>
		</main>
	);
};
