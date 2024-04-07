import { FC, ReactNode } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose
} from '@/components/ui';

export interface ServiceCardProps {
	children?: ReactNode; // Icon
	title: string;
	description: string;
}

const jumpToPricingSection = () => {
	setTimeout(() => {
		const elem = document.getElementById('pricing');
		if (elem) {
			elem.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}, 200);
};

export const ServiceCard: FC<ServiceCardProps> = (props) => {
	return (
		<article className="flex flex-col justify-between rounded-2xl bg-surface p-loose text-left">
			<div className="space-y-snug">
				<div className='text-xl mb-loose'>{props.children}</div>
				<div className="space-y-2 pl-2">
					<h3 className="max-w-[80%] font-bold text-[2.4rem] leading-tight">
						{props.title}
					</h3>
					<p className="w-[80%] leading-tight text-sm ml-1">
						{props.description}
					</p>
				</div>
			</div>

			<Dialog>
				<DialogTrigger className="w-full">
					{' '}
					<button className="w-full rounded-full bg-primary py-snug mt-snug">
						Learn More
					</button>
				</DialogTrigger>
				<DialogContent className="w-[90%] space-y-4 rounded-2xl">
					<DialogHeader className="text-left">
						<DialogTitle className="mb-2 text-3xl font-bold">
							{props.title}
						</DialogTitle>
						<DialogDescription>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
							voluptatibus tenetur saepe at. Possimus, repudiandae, incidunt?
							Quo optio mollitia a. Est ex perferendis, deleniti maiores
							doloremque provident saepe aliquam distinctio.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose onClick={jumpToPricingSection} asChild>
							<p className="rounded-2xl bg-black px-8 py-snug text-center text-lg text-white">
								See Pricing
							</p>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</article>
	);
};
