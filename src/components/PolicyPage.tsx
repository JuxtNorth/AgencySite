import { useRealtimeDB } from '@/hooks';
import { FC } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { LoadingSpinner } from './ui';

interface PolicyPageData {
	title: string;
	lastUpdated: string;
	content: string[];
}

export const PolicyPage: FC<{ path: string }> = ({ path }) => {
	const data = useRealtimeDB<PolicyPageData>(path);

	return (
		<>
			<Nav />
			{data ? (
				<>
					<main className="mt-relaxed space-y-loose p-loose lg:mt-loose lg:p-relaxed">
						<div className="space-y-2">
							<h1 className="text-4xl font-semibold md:text-5xl">
								{data?.title}
							</h1>
							<p className="text-sm text-muted md:text-base">
								Last Updated at {data?.lastUpdated}
							</p>
						</div>
						<div className="space-y-4 text-[#ddd]">
							{data?.content.map((text) => <p>{text}</p>)}
						</div>
					</main>
				</>
			) : (
				<div className="flex h-screen w-screen items-center justify-center">
					<LoadingSpinner />
				</div>
			)}
			<Footer />
		</>
	);
};
