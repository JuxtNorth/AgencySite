export const observeClassMutations = function (
	targetElement: HTMLElement,
	observableClassName: string,
	callback: (classExists: boolean) => void
): MutationObserver {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			const { type, attributeName } = mutation;
			if (type === 'attributes' && attributeName === 'class') {
				const target = <HTMLElement>mutation.target;
				const classExists = target.classList.contains(observableClassName);
				callback(classExists);
			}
		});
	});
	observer.observe(targetElement, { attributes: true });
	return observer;
};
