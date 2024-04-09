import { FC, ReactNode } from 'react';
import { CheckIcon } from '@/icons';

interface FeatureItemProps {
	content: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ content }) => {
	let contentElem: ReactNode | null;

	if (content[0] === '*') {
		content = content.slice(2, content.length - 2);
		contentElem = <b>{content}</b>;
	}

	return (
		<li className="flex gap-2 text-sm md:text-base font-normal font-display">
			<CheckIcon className="mt-[0.2rem] shrink-0" /> {contentElem || content}
		</li>
	);
};
