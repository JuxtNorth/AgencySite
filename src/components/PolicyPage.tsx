import { useRealtimeDB } from '@/hooks';
import { FC } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { LoadingSpinner } from './ui';
import HtmlParser from 'react-html-parser';

interface PolicyPageData {
	title: string;
	lastUpdated: string;
	subTitle: string;
	content: string[];
}

export const PolicyPage: FC<{ path: string }> = ({ path }) => {
	const data = useRealtimeDB<PolicyPageData>(path);

	return (
		<>
			<Nav />
			{data ? (
				<>
					<main className="mt-relaxed space-y-loose p-loose lg:mt-relaxed lg:px-[12vw] lg:py-32">
						<div className="lg:mb-12">
							<h1 className="mb-snug text-4xl font-bold md:text-[clamp(2.5rem,4vw,6rem)] lg:mb-loose">
								<span className="text-blood-red">Hi-Reach Media</span> -{' '}
								{data?.title}
							</h1>
							<em className="text-sm text-muted md:text-base">
								Last Updated on {data?.lastUpdated}
							</em>
						</div>
						<p className="!mb-16 text-[1.1rem]">
							{data?.subTitle}
						</p>
						<div className="space-y-4 text-[#ddd] lg:px-12">
							{data?.content.map((text) => <p>{HtmlParser(text)}</p>)}
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
