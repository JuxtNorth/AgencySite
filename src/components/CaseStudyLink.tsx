import { GoIcon } from '@/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export interface CaseStudyLinkProps {
	name: string;
	url: string;
	index: number;
}

export const CaseStudyLink: FC<CaseStudyLinkProps> = (props) => {
	return (
		<Link
			to={props.url}
			className="flex w-full items-center gap-snug border-b border-slate-600 last:border-none py-2 hover:bg-white/10 md:pl-loose lg:py-7"
		>
			<img
				className="aspect-square h-12 rounded-full object-cover lg:mr-snug lg:h-20"
				src={`https://ik.imagekit.io/Hireachmedia/CaseStudy/${props.index}/tr:q-80,pr-true,w-320/profile.jpg`}
				alt={`An image of ${props.name}`}
			/>
			<h1 className="font-body text-[currentColor]">{props.name}</h1>
			<GoIcon className="text-sm text-font-primary lg:text-xl" />
		</Link>
	);
};
