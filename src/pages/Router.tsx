import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Scheduled } from './Scheduled';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/scheduled" element={<Scheduled />} />
			</Routes>
		</BrowserRouter>
	);
};
