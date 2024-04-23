import { FC } from 'react';
import { Header, Mission, Outcome, Results } from '../Sections';
import { ScheduleCalendar } from '@/pages/Home/Sections';
import { Footer, Nav, PreFooter } from '@/components';

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
		],
		picture: {
			src: 'https://ik.imagekit.io/Hireachmedia/CaseStudy/3/tr:w-720,pr-true/profile.jpg',
			alt: 'Profile'
		}
	},
	outcome: {
		contentBlock1:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem sequi praesentium fugiat deserunt veniam labore non itaque.',
		list: [
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis unde amet libero.',
			'Culpa commodi nisi totam voluptate fugiat voluptatibus in. Eligendi omnis id saepe.',
			'Ipsam laudantium quia veniam quibusdam id quaerat debitis impedit dolore atque numquam.',
			'Impedit sunt consequatur delectus laborum voluptatem molestias exercitationem quisquam fugiat quia totam!',
			'Vitae laudantium sunt nisi fugit harum mollitia dolores, praesentium ab sequi! Iste?',
			'Sed, unde eum placeat aspernatur magni nostrum rerum. Ad accusamus quasi quia.'
		],
		contentBlock2:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo omnis sequi est velit amet! Alias, praesentium! Nostrum ut laudantium dicta eos odio maiores perspiciatis maxime doloremque, recusandae voluptate eveniet. Non, sed?',
		images: [
			{
				src: 'https://ik.imagekit.io/Hireachmedia/CaseStudy/3/Result.jpeg',
				alt: "An image of _'s growth on _"
			}
		]
	},
	results: {
		highlights: [
			'Lorem Ipsum',
			'Lorem Ipsum',
			'Lorem Ipsum',
			'Lorem Ipsum',
			'Lorem Ipsum',
			'Lorem Ipsum'
		],
		images: [
			{
				src: 'https://ik.imagekit.io/Hireachmedia/CaseStudy/3/Result.jpeg',
				alt: '_'
			}
		]
	}
};

export const C: FC = () => {
	return (
		<>
			<Nav />
			<main className="mx-auto mt-16 max-w-[100rem] space-y-loose">
				<Header {...data.header} />
				<Mission {...data.mission} />
				<Outcome {...data.outcome} />
				<Results {...data.results} />
				<ScheduleCalendar />
				<PreFooter />
			</main>
			<Footer />
		</>
	);
};
