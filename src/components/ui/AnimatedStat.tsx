import anime from 'animejs';
import { FC, useEffect, useRef, useState } from 'react';

export interface AnimatedStatProps {
	target: number;
	duration?: number;
}
export const AnimatedStat: FC<AnimatedStatProps> = (props) => {
	const [currentValue, setCurrentValue] = useState(0);
	const [animate, setAnimationFlag] = useState(false);
	const spanRef = useRef<HTMLSpanElement>(null);
	const observer = useRef(
		new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setAnimationFlag(true);
				}
			});
		})
	);

	const { duration = 1600, target } = props;

	useEffect(() => {
		observer.current.observe(spanRef.current!);
	}, []);

	useEffect(() => {
		if (animate) {
			const dummyProp = {
				val: 0
			};

			anime({
				targets: dummyProp,
				val: target,
				round: 1,
				duration,
				update: function () {
					setCurrentValue(dummyProp.val);
				},
				easing: 'linear'
			});
		}
	}, [animate, duration, target]);

	const len = target.toString().length;

	return (
		<span ref={spanRef}>{currentValue.toString().padStart(len, '0')}</span>
	);
};
