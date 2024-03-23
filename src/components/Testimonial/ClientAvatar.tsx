import { FC } from 'react';

export interface ClientAvatarProps {
	isExpanded: boolean;
	onClick: () => void;
}

export const ClientAvatar: FC<ClientAvatarProps> = (props) => {
	const style = {
		transform: '',
		marginLeft: '',
		marginRight: ''
	};
	if (props.isExpanded) {
		style.transform = `scale(1.2)`;
		style.marginLeft = '0.5rem';
		style.marginRight = '0.5rem';
	}
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={props.onClick}
			className="h-12 w-12 rounded-full bg-pink-400 transition-all"
			style={style}
		/>
	);
};
