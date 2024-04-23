import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Ig, Ln  } from './Scheduled';
import { A, B, C } from './casestudy';
import ScrollToTop from '@/lib/ScrollToTop';
import { PolicyPage } from '@/components';
import { Page404 } from './Page404';

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
				<Route path="/scheduled">
					<Route path="ig" element={<Ig />} />
					<Route path="ln" element={<Ln />}/>
				</Route>
				<Route path="/" element={<Home />} />
				<Route path="/privacy" element={<PolicyPage path="privacy" />} />
				<Route path="/terms" element={<PolicyPage path="terms" />} />
				<Route
					path="/refund-policy"
					element={<PolicyPage path="refundPolicy" />}
				/>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
};
