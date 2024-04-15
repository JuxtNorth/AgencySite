import {
	FC,
	ReactNode,
	useEffect,
	useRef,
	useState,
	VideoHTMLAttributes
} from 'react';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
	children?: ReactNode;
	placeContentAtBottom?: boolean;
	shouldPause?: boolean;
	observe?: boolean;
}

export const Video: FC<VideoProps> = ({
	placeContentAtBottom,
	children,
	shouldPause = false,
	observe = false,
	...restProps
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const observer = useRef<IntersectionObserver>();
	const [forcePause, setForcePause] = useState(false);

	const { current: video } = videoRef;

	useEffect(() => {
		const isVideoPlaying =
			video &&
			!!(
				video?.currentTime > 0 &&
				!video.paused &&
				!video.ended &&
				video.readyState > 2
			);
		if ((shouldPause || forcePause) && isVideoPlaying) {
			video.pause();
		}
	}, [video, shouldPause, forcePause]);

	useEffect(() => {
		if (observe && video) {
			observer.current = new IntersectionObserver((entries) => {
				entries.map((entry) => {
					if (!entry.isIntersecting) {
						setForcePause(true);
					} else {
						setForcePause(false);
					}
				});
			});
			observer.current.observe(video);
		}

		return () => {
			if (observer.current) observer.current.disconnect();
		};
	}, [observe, video]);

	if (placeContentAtBottom) {
		return (
			<div className="size-full">
				<video {...restProps} ref={videoRef} />
				{children}
			</div>
		);
	}

	return (
		<div className="size-full">
			{children}
			<video {...restProps} ref={videoRef} />
		</div>
	);
};
