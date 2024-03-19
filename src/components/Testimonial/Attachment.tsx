import { FC } from 'react';

interface AttachmentProps {}

export const Attachment: FC<AttachmentProps> = () => {
	return (
		<div className="hidden h-full w-36 rounded-2xl bg-white p-4 shadow-lg md:block">
			<div className="h-[86%] rounded-xl bg-rose-600">i</div>
			<div className="mt-1">Lorem Ipsum</div>
		</div>
	);
};
