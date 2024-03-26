import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Scheduled } from './Scheduled';
import { A, B } from './casestudy';

export const Router: FC = () => {
	return (
		<BrowserRouter>
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
