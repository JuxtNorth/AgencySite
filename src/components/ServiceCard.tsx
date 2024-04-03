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
		<article className="flex gap-snug rounded-2xl px-snug py-6 text-left">
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl ">
				{props.children}
			</div>
			<div className="space-y-2">
				<h3 className="font-bold lg:text-[1.4rem]">{props.title}</h3>
				<p className="w-[80%] leading-tight lg:text-sm xl:text-[1.1rem]">
					{props.description}
				</p>
				<Dialog>
					<DialogTrigger>
						{' '}
						<p className="lg:text-sm xl:text-base">Learn More</p>
					</DialogTrigger>
					<DialogContent className="w-[90%] space-y-4 rounded-2xl">
						<DialogHeader className="text-left">
							<DialogTitle className="mb-2 text-3xl font-bold">
								{props.title}
							</DialogTitle>
							<DialogDescription>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Veniam, voluptatibus tenetur saepe at. Possimus, repudiandae,
								incidunt? Quo optio mollitia a. Est ex perferendis, deleniti
								maiores doloremque provident saepe aliquam distinctio.
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
			</div>
		</article>
	);
};
