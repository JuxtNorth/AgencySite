import { FC, ReactNode } from 'react';

export interface SocialLinkProps {
	children: ReactNode;
	to: string;
}

export const SocialLink: FC<SocialLinkProps> = (props) => {
	return (
		<li className="text-base flex h-7 w-7 items-center justify-center rounded-lg bg-gray-700 text-white md:h-10 md:w-10 md:rounded-xl md:text-xl">
			<a href={props.to}>{props.children}</a>
		</li>
	);
};
