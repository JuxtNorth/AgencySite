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
		<li className="text-md flex gap-2 font-normal md:text-sm">
			<CheckIcon className="mt-[0.2rem] shrink-0" /> {contentElem || content}
		</li>
	);
};
