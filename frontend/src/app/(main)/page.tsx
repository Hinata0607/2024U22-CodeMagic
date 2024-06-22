import { TopNewsArea, TopNewsCard, TopTransparentArea } from '@/components';

export default function Home() {
	const newses = [
		{
			title:
				'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
			date: 'xxxx/xx/xx',
			body: '内容内容内容内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		},
		{
			title:
				'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
			date: 'xxxx/xx/xx',
			body: '内容内容内容内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		},
		{
			title:
				'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
			date: 'xxxx/xx/xx',
			body: '内容内容内容内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		},
		{
			title:
				'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
			date: 'xxxx/xx/xx',
			body: '内容内容内容内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		},
		{
			title:
				'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
			date: 'xxxx/xx/xx',
			body: '内容内容内容内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		},
	];

	return (
		<>
			<TopTransparentArea />
			<TopNewsArea>
				{newses.map((news, index) => (
					<TopNewsCard
						key={index}
						title={news.title}
						date={news.date}
						body={news.body}
					/>
				))}
			</TopNewsArea>
		</>
	);
}
