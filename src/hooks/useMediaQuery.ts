import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query = '(min-width: 768px)') => {
	const [match, setDesktop] = useState(window.matchMedia(query).matches);

	const onResize = useCallback(() => {
		setDesktop(window.matchMedia(query).matches);
	}, [query]);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [onResize]);

	return { match };
};
