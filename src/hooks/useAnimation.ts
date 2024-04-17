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
		return handleAnimation(
			'._anime_rotate, ._anime_rotate_alternate',
			{},
			(event) => {
				const target = event.target as HTMLElement;
				if (target) target.classList.add('entered');
			}
		);
	}, []);

	useEffect(() => {
		return handleAnimation('._anime_heading', {});
	}, []);

	useEffect(() => {
		document.querySelectorAll('._anime_paragraph');

		document.querySelectorAll('._anime_rotate_alternate');

		document.querySelectorAll('._anime_stagger');

		const observables = Array.from(
			document.querySelectorAll<HTMLElement>(
				'._anime_heading, ._anime_paragraph, ._anime_rotate, ._anime_rotate_alternate, ._anime_stagger, ._anime_stagger_observe'
			)
		);
		const unobserve = applyIntersectionEventDisptchers(...observables);

		return unobserve;
	}, []);
};
