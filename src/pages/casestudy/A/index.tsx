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
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque animi quis deserunt'
		]
	}
};

export const A: FC = () => {
	return (
		<main className="space-y-loose p-snug md:p-loose">
			<Header {...data.header} />
			<Mission {...data.mission} />
			<Outcome />
			<Results />
		</main>
	);
};
