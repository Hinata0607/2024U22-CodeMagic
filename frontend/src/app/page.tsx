import { TopNewsArea, TopNewsCard, TopTransparentArea } from '@/components';

export default function Home() {
	const array = [1, 1, 1];

	return (
		<>
			<TopTransparentArea />
			<TopNewsArea>
				{array.map((_, index) => (
					<TopNewsCard key={index} />
				))}
			</TopNewsArea>
		</>
	);
}
