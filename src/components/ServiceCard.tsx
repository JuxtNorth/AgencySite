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
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xl text-white">
				{props.children}
			</div>
			<div className="space-y-2">
				<h1 className="text-3xl font-bold text-slate-800 lg:text-4xl">
					{props.title}
				</h1>
				<p className="w-[80%] leading-tight xl:text-2xl">{props.description}</p>
				<Dialog>
					<DialogTrigger>
						{' '}
						<p className="xl:text-2xl">
							<button>Learn More</button>
						</p>
					</DialogTrigger>
					<DialogContent className="w-[90%] space-y-4 rounded-2xl bg-white">
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
							<DialogClose asChild>
								<button
									onClick={jumpToPricingSection}
									className="rounded-2xl bg-black px-8 py-snug text-center text-lg text-white"
								>
									See Pricing
								</button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</article>
	);
};
