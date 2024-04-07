import { useEffect, useState } from 'react';

export const useMediaQuery = (query = '(min-width: 768px)') => {
	const [match, setDesktop] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const onResize = () => {
			setDesktop(window.matchMedia(query).matches);
		};

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	}, [query]);

	return { match };
};
