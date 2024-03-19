import { FC } from 'react';
import { Attachment } from './Attachment';
import { QuoteIcon } from '@/icons';

interface TestimonialProps {}

export const Testimonial: FC<TestimonialProps> = () => {
	return (
		<div className="flex gap-2">
			<Attachment />
			<article className="w-72 shrink-0 rounded-2xl bg-white p-4 shadow-md">
				<QuoteIcon className="text-4xl" />
				<div className="mt-4 h-28 pl-4">
					<p className="text-sm font-semibold leading-tight text-slate-700">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
						quasi, facilis iste ab voluptates repellat, modi temporibus
						laboriosam mollitia asperiores ea!
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-9 w-9 rounded-full bg-pink-100" />
					<div>
						<h1 className="text-md leading-tight">Kiron Dey</h1>
						<p className="text-xs leading-tight text-slate-700">
							Web Developer
						</p>
					</div>
				</div>
			</article>
		</div>
	);
};
