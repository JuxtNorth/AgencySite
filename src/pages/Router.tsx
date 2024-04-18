import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Scheduled } from './Scheduled';
import { A, B, C } from './casestudy';
import { Privacy } from './Privacy';
import { Terms } from './Terms';
import { RefundPolicy } from './RefundPolicy';
import ScrollToTop from '@/lib/ScrollToTop';

// https://random-data-api.com/api/v3/projects/bb87cbbc-7f6d-4225-9c7b-4421807ad551?api_key=gs8VqaxotQNIB06x6soO6w
export const Router: FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/casestudy">
					<Route path="a" element={<A />} />
					<Route path="b" element={<B />} />
					<Route path="c" element={<C />} />
				</Route>
				<Route path="/scheduled" element={<Scheduled />} />
				<Route path="/" element={<Home />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/refund-policy" element={<RefundPolicy />} />
			</Routes>
		</BrowserRouter>
	);
};
