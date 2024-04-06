import { useEffect, useState } from 'react';

export const useMediaQuery = (query = '(min-width: 768px)') => {
	const [match, setDesktop] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const onResize = () => {
			setDesktop(window.matchMedia('(min-width: 768px)').matches);
		};

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	}, []);

	return { match };
};
