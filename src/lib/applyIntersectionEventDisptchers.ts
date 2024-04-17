const getIntersectionObserver = (function () {
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const name = entry.isIntersecting ? 'enter' : 'leave';
			const { target } = entry;
			target.dispatchEvent(new CustomEvent(name));
		});
	}, { threshold: 0.5 });

	return () => {
		return io;
	};
})();

export const applyIntersectionEventDisptchers = (...targets: HTMLElement[]) => {
	const io = getIntersectionObserver();
	targets.forEach((target) => {
		io.observe(target);
	});

	return () => {
		targets.forEach((target) => io.unobserve(target));
	};
};
