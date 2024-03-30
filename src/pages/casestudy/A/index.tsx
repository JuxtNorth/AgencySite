import { FC } from 'react';
import { Header, Mission, Outcome, Results } from '../Sections';

const data = {
	header: {
		title: 'Lorem Chaudhary',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	mission: {
		contentBlock1:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt! Neque rem, animi pariatur sit voluptatum cum, modi eligendi incidunt eum, reiciendis cumque ut asperiores optio tempore molestiae non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquam et, quam neque corporis itaque voluptas obcaecati non inventore, fugit odit iste quis laborum a delectus architecto voluptatem, quisquam amet!',
		contentBlock2:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt! Neque rem, animi pariatur sit voluptatum cum, modi eligendi incidunt eum, reiciendis cumque ut asperiores optio tempore molestiae non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquam et, quam neque corporis itaque voluptas obcaecati non inventore, fugit odit iste quis laborum a delectus architecto voluptatem, quisquam amet!',
		list: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt',
			'Lorem elit. Temporibus alias facilis voluptate?',
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolorum odit possimus',
			'Adipisci, esse cumque molestiae magnam repellat rerum tempore commodi ab debitis quidem.',
			'Ipsum quae labore, maiores voluptates expedita rerum atque dignissimos autem! Quis.',
			'Earum esse dignissimos quisquam animi minus at provident est ex velit architecto.'
		]
	}
};

export const A: FC = () => {
	return (
		<main className="mx-auto max-w-[100rem] space-y-loose p-snug md:p-loose">
			<Header {...data.header} />
			<Mission {...data.mission} />
			<Outcome />
			<Results />
		</main>
	);
};
