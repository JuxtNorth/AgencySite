import { applyIntersectionEventDisptchers } from '@/lib/applyIntersectionEventDisptchers';
import anime, { AnimeAnimParams } from 'animejs';
import { useEffect } from 'react';

export const handleAnimation = (
	className: string,
	props: AnimeAnimParams,
	cb?: (event: CustomEvent) => void
) => {
	const onEnter = (event: CustomEvent) => {
		const target = event.target as HTMLElement;
		if (!target.dataset.viewed) {
			target.dataset.viewed = 'true';
			anime({ targets: target, ...props });
			if (cb) cb(event);
		}
	};
	const nodes = document.querySelectorAll(className);
	nodes.forEach((node) => {
		node.addEventListener('enter', onEnter as EventListener);
	});
	return () => {
		nodes.forEach((node) =>
			node.removeEventListener('enter', onEnter as EventListener)
		);
	};
};

/**
 * Handles animations of the listed classnames. Helpful for generl
 */
export const useAnimation = () => {
	useEffect(() => {
		return handleAnimation('._anime_generic_observable', {}, (event) => {
			const target = event.target as HTMLElement;
			if (target) target.classList.add('entered');
		});
	}, []);

	useEffect(() => {
		return handleAnimation('._anime_generic', {
			translateY: [80, 0],
			opacity: [0, 1],
			duration: 400,
			easing: 'easeOutExpo'
		});
	}, []);

	useEffect(() => {
		return handleAnimation('._anime_stagger_observe', {}, (event) => {
			const target = event.target as HTMLElement;
			const targets = target.childNodes;
			anime({
				targets,
				translateY: [target.classList.contains('stagger-y-64') ? 64 : 24, 0],
				opacity: [0, 1],
				duration: 400,
				delay: anime.stagger(60),
				easing: 'easeOutExpo'
			});
		});
	}, []);

	useEffect(() => {
		return handleAnimation('._anime_heading', {});
	}, []);

	useEffect(() => {
		document.querySelectorAll('._anime_paragraph');

		const observables = Array.from(
			document.querySelectorAll<HTMLElement>(
				'._anime_heading, ._anime_paragraph, ._anime_generic, ._anime_generic_observable, ._anime_stagger_observe'
			)
		);
		const unobserve = applyIntersectionEventDisptchers(...observables);

		return unobserve;
	}, []);
};
