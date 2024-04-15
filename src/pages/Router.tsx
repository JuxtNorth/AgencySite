import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Scheduled } from './Scheduled';
import { A, B } from './casestudy';
import ScrollToTop from '@/lib/ScrollToTop';

export const Router: FC = () => {
	// const lenis = useLenis();

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scheduled" element={<Scheduled />} />
				<Route path="/casestudy">
					<Route path="a" element={<A />} />
					<Route path="b" element={<B />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
