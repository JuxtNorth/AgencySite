import { FC, ReactNode } from 'react';
import Blob1 from '@/assets/blobs/1.svg';
import Blob2 from '@/assets/blobs/2.svg';
import Blob3 from '@/assets/blobs/3.svg';
import Blob4 from '@/assets/blobs/4.svg';
import Blob5 from '@/assets/blobs/5.svg';
import Blob6 from '@/assets/blobs/6.svg';

const blobs: string[] = [Blob1, Blob2, Blob3, Blob4, Blob5, Blob6];

export type BlobIndex = keyof typeof blobs;

export interface BlobOverlayProps {
	type?: BlobIndex;
	children: ReactNode;
}

export const BlobOverlay: FC<BlobOverlayProps> = (props) => {
	const blobIndex = props.type || 0;
	return (
		<div className="relative mx-auto mb-12 lg:mb-loose grid w-fit grid-cols-1 place-items-center">
			<div className="col-start-1 row-start-1">{props.children}</div>
			<img
				className="-z-[1] col-start-1 row-start-1 h-40"
				src={blobs[blobIndex] as string}
				alt=""
				aria-hidden="true"
			/>
		</div>
	);
};
