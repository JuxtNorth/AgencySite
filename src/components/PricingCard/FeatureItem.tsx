import { FC } from 'react';
import { ArrowIcon } from '@/icons';

interface FeatureItemProps {
	content: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ content }) => {
	return (
		<li className="flex gap-2 text-lg font-normal md:text-sm">
			<ArrowIcon className="mt-[0.2rem]" /> {content}
		</li>
	);
};
