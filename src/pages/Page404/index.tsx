import { FC } from 'react';

export const Page404: FC = () => {
	return (
		<main className="flex h-screen w-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-7xl font-extrabold md:text-9xl">404</h1>
				<p className="text-sm md:text-lg">Page not found</p>
			</div>
		</main>
	);
};
