import { FC } from 'react';
import { CheckIcon } from '@/icons';
import HtmlParser from 'react-html-parser';

interface FeatureItemProps {
	content: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ content }) => {
	return (
		<li className="flex gap-2 font-display text-xs font-normal md:text-[15px]">
			<CheckIcon className="mt-[0.2rem] shrink-0" />
			<p>{HtmlParser(content)}</p>
		</li>
	);
};
